<template>
  <div class="container mx-auto py-6 space-y-8">
    <ControlPanel
      @swap="allowEditing = !allowEditing"
      @toggleMode="mode = $event"
      @addWord="onAddWord"
      :allowEditing="allowEditing"
      :mode="mode"
    />
    <TableList
      @inputChanged="onInputChanged($event)"
      @deleteWord="onWordDelete"
      @filter="onFilter"
      :allowEditing="allowEditing"
      :mode="mode"
      :items="items"
      :isLoading="isLoading"
    />
    <Pagination
      v-if="totalCount > limit"
      class="flex justify-center"
      @change="onPageChange"
      :currentPage="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>
<script>
import ControlPanel from "@/components/ControlPanel.component.vue";
import TableList from "@/components/Table/TableList.component.vue";
import Pagination from "@/components/Pagination.component.vue";
import { MODES } from "@/constants/mode";
import { withAsync } from "../helpers/withAsync";
import { fetchAll, updateWord, addWord, removeWord } from "@/api/wordsApi";
export default {
  name: "HomePage",
  components: {
    TableList,
    ControlPanel,
    Pagination,
  },
  data() {
    return {
      allowEditing: true,
      mode: MODES.BOTH,
      isLoading: true,
      filter: {
        name: null,
        state: null,
      },
      items: [],
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

      if ( response ) {
        if ( this.items.length >= this.limit ) {
          this.getWords({ page: this.currentPage, limit: this.limit, sortBy: this.filter.name, orderBy: this.filter.state })
        } else {
          this.items.unshift(response.data)
        }
      }

      if (error) {
        console.log(error);
      }
    },
    async onWordDelete(item) {
      const { response, error } = await withAsync(removeWord, item._id);

      if (this.items.length <= 1 && this.currentPage > 1) return (this.currentPage = this.currentPage - 1);

      if ( response ) {
        this.items = this.items.filter( i => i._id !== item._id )
      }

      if (error) console.log(error);
    },
    async onFilter(filter) {
      this.filter = filter;
      this.getWords({ page: this.currentPage, limit: this.limit, sortBy: this.filter.name, orderBy: this.filter.state });
    },
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  watch: {
    allowEditing() {
      localStorage.setItem("allowEditing", this.allowEditing);
    },
    currentPage() {
      this.getWords({ page: this.currentPage, limit: this.limit, sortBy: this.filter.name, orderBy: this.filter.state });
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalCount / this.limit);
    },
  },
};
</script>
