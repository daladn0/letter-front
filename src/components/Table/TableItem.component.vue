<template>
  <div class="flex items-center border-b">
    <div class="p-4 w-1/12">
      <p class="block max-w-full truncate">{{ index }}</p>
    </div>
    <div class="px-4 w-4/12">
      <TableInput
        class="table-input"
        placeholder="Something awful.."
        v-model="item.word"
        @inputChanged="$emit('inputChanged', item)"
        :allowEditing="allowEditing"
        :class="{ 'blur-sm': mode === MODES.WORDS }"
      />
    </div>
    <div class="px-4 w-4/12">
      <TableInput
        @inputChanged="$emit('inputChanged', item)"
        placeholder="Щось жахливе.."
        :allowEditing="allowEditing"
        :class="{ 'blur-sm': mode === MODES.DEFINITIONS }"
        v-model="item.definition"
      />
    </div>
    <div class="p-4 w-2/12">
      <p class="text-sm text-gray-700">{{ formatDate(item.date) }}</p>
    </div>
    <div class="p-4 w-1/12">
      <button
        @click="$emit('deleteWord', item)"
        :disabled="!allowEditing"
        class="text-center mx-auto block focus:ring ring-red-500 outline-none rounded-full"
      >
        <svg class="w-6 h-6 text-red-500">
          <use xlink:href="/sprite.svg#close" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import TableInput from "@/components/Table/TableInput.component.vue";
import { MODES } from "@/constants/mode";
import { formatDate } from "../../helpers/formatDate";
export default {
  name: "TableItem",
  emits: ["inputChanged", "deleteWord"],
  props: ["item", "allowEditing", "index", "mode"],
  components: {
    TableInput,
  },
  data() {
    return {
      MODES,
    };
  },
  methods: {
    formatDate,
  },
};
</script>
