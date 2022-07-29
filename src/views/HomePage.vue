<template>
  <div class="container mx-auto pt-6 space-y-8">
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
  </div>
</template>
<script>
import { MODES } from "@/constants/mode";
import ControlPanel from "@/components/ControlPanel.component.vue";
import TableList from "@/components/Table/TableList.component.vue";
import { withAsync } from "../helpers/withAsync";
import { fetchAll, updateWord, addWord, removeWord } from "@/api/wordsApi";
export default {
  name: "HomePage",
  components: {
    TableList,
    ControlPanel,
  },
  data() {
    return {
      allowEditing: true,
      mode: MODES.BOTH,
      isLoading: true,
      items: [],
      filter: null,
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
    this.getWords({queryString: this.filter});
  },
  methods: {
    async getWords(args) {
      const { response, error } = await withAsync(fetchAll, args);
      this.isLoading = false;

      if (response) {
        this.items = response.data;
      }

      if (error) {
        console.log(error)
      }
    },
    async onInputChanged(item) {
      await updateWord(item._id, item.word, item.definition);
    },
    async onAddWord() {
      const { response, error } = await withAsync(addWord)

      if ( response ) {
        await this.getWords({queryString: this.filter})
      }

      if ( error ) {
        console.log(error)
      }
    },
    async onWordDelete(item) {
      const {error} = await withAsync(removeWord, item._id)
      this.getWords({queryString: this.filter})

      if ( error ) console.log(error)
    },
    async onFilter(filter) {
      this.filter = `${[filter.name]}=${filter.state}`
      this.getWords({queryString: this.filter})
    }
  },
  watch: {
    allowEditing() {
      localStorage.setItem("allowEditing", this.allowEditing);
    },
  },
};
</script>
