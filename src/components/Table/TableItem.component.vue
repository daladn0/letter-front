<template>
  <div class="flex items-center border-b">
    <div class="p-4 w-1/12">
      <p class="block max-w-full truncate">{{ index }}</p>
    </div>
    <div class="px-4 w-4/12">
      <input
        @change="$emit('inputChanged', item)"
        :disabled="!allowEditing"
        :class="{ 'blur-sm': mode === MODES.WORDS }"
        class="bg-transparent w-full h-full py-4 outline-none"
        type="text"
        v-model="item.word"
        placeholder="Something awful.."
      />
    </div>
    <div class="px-4 w-4/12">
      <input
        @change="$emit('inputChanged', item)"
        :disabled="!allowEditing"
        :class="{ 'blur-sm': mode === MODES.DEFINITIONS }"
        class="bg-transparent w-full h-full py-4 outline-none"
        type="text"
        v-model="item.definition"
        placeholder="Щось жахливе.."
      />
    </div>
    <div class="p-4 w-2/12">
      <p class="text-sm text-gray-700">{{ formatDate(item.date) }}</p>
    </div>
    <div class="p-4 w-1/12">
      <button class="text-center mx-auto block focus:ring ring-red-500 outline-none rounded-full">
        <svg class="w-6 h-6 text-red-500" @click="$emit('deleteWord', item)">
          <use xlink:href="/sprite.svg#close" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import { MODES } from "@/constants/mode";
import { formatDate } from "../../helpers/formatDate";
export default {
  name: "TableItem",
  emits: ["inputChanged", 'deleteWord'],
  props: ["item", "allowEditing", "index", "mode"],
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
