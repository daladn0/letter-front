<template>
  <div class="container mx-auto py-6">
    <DeleteModal
      v-if="showModal"
      @close="showModal = false"
      :number="numberToRemove"
      @confirm="onWordDelete"
    />
    <div class="space-y-8">
      <ControlPanel
        @swap="allowEditing = !allowEditing"
        @toggleMode="mode = $event"
        @addWord="onAddWord"
        :allowEditing="allowEditing"
        :mode="mode"
        :filter="filter"
      />
      <TableList
        @inputChanged="onInputChanged($event)"
        @deleteWord="openModal"
        @filter="onFilter"
        :allowEditing="allowEditing"
        :mode="mode"
        :items="items"
        :isLoading="isLoading"
        :shift="(currentPage - 1) * limit"
      />
      <Pagination
        v-if="totalCount > limit"
        class="flex justify-center"
        @change="onPageChange"
        :currentPage="currentPage"
        :totalPages="totalPages"
      />
    </div>
  </div>
</template>
<script>
import ControlPanel from "@/components/ControlPanel.component.vue";
import TableList from "@/components/Table/TableList.component.vue";
import Pagination from "@/components/Pagination.component.vue";
import DeleteModal from "@/components/DeleteModal.component.vue";
import { MODES } from "@/constants/mode";
import { withAsync } from "../helpers/withAsync";
import { fetchAll, updateWord, addWord, removeWord } from "@/api/wordsApi";
import { nextTick } from "@vue/runtime-core";
export default {
  name: "HomePage",
  components: {
    TableList,
    ControlPanel,
    Pagination,
    DeleteModal,
  },
  data() {
    return {
      isLoading: true,
      mode: MODES.BOTH,
      allowEditing: true,
      showModal: false,

      items: [],
      itemToRemove: null,
      numberToRemove: null,

      filter: {
        name: null,
        state: null,
      },
      totalCount: 0,
      currentPage: 1,
      limit: 10,
    };
  },
  created() {
    const editing = localStorage.getItem("allowEditing");

    if (editing) {
      const isEditable = editing === "true";
      this.allowEditing = isEditable;
      return;
    }

    localStorage.setItem("allowEditing", this.allowEditing);
  },
  async mounted() {
    this.getWords({ page: this.currentPage, limit: this.limit });
  },
  methods: {
    openModal(item, number) {
      this.itemToRemove = item;
      this.numberToRemove = number;

      this.showModal = true;
    },
    async getWords(args) {
      const { response, error } = await withAsync(fetchAll, args);
      this.isLoading = false;

      if (response) {
        this.items = response.data.words;
        this.totalCount = response.data.totalCount;
      }

      if (error) {
        console.log(error);
      }
    },
    async onInputChanged(item) {
      await updateWord(item._id, item.word, item.definition);
    },
    async onAddWord() {
      const { response, error } = await withAsync(addWord);

      // Switch page to the very first if it isn't
      if (this.currentPage > 1) {
        this.currentPage = 1;
        await this.getWords({
          page: this.currentPage,
          limit: this.limit,
          sortBy: this.filter.name,
          orderBy: this.filter.state,
        });
      }

      if (response) {
        if (this.items.length >= this.limit) {
          this.filter = {
            name: "word",
            state: 1,
          };

          await this.getWords({
            page: this.currentPage,
            limit: this.limit,
            sortBy: this.filter.name,
            orderBy: this.filter.state,
          });
        } else {
          this.items.unshift(response.data);
        }

        nextTick(() => {
          const newWordItem = document.querySelectorAll(".table-input")[0];

          if (newWordItem) newWordItem.focus();
        });
      }

      if (error) {
        console.log(error);
      }
    },
    async onWordDelete() {
      this.showModal = false;
      const { response, error } = await withAsync(
        removeWord,
        this.itemToRemove._id
      );

      if (response) {
        // if user is removing the last item in a list and the page is not first then go to the previous page
        if (this.items.length <= 1 && this.currentPage > 1) {
          this.currentPage = this.currentPage - 1;

          return await this.getWords({
            page: this.currentPage,
            limit: this.limit,
            sortBy: this.filter.name,
            orderBy: this.filter.state,
          });
        }

        this.getWords({
          page: this.currentPage,
          limit: this.limit,
          sortBy: this.filter?.name,
          orderBy: this.filter?.state,
        });
      }

      if (error) console.log(error);
    },
    async onFilter(filter) {
      this.filter = filter;
      this.getWords({
        page: this.currentPage,
        limit: this.limit,
        sortBy: this.filter.name,
        orderBy: this.filter.state,
      });
    },
    onPageChange(page) {
      this.currentPage = page;

      this.getWords({
        page: this.currentPage,
        limit: this.limit,
        sortBy: this.filter.name,
        orderBy: this.filter.state,
      });
    },
  },
  watch: {
    allowEditing() {
      localStorage.setItem("allowEditing", this.allowEditing);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalCount / this.limit);
    },
  },
};
</script>
