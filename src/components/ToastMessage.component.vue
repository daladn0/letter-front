<template>
  <div
    class="absolute bottom-10 left-10 w-full max-w-xs text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300 overflow-hidden"
  >
    <!-- header -->
    <div
      class="flex justify-between items-center px-4 py-1 text-white"
      :class="{
        'bg-red-500': type === TYPES.ERROR,
        'bg-green-500': type === TYPES.SUCCESS,
        'bg-yellow-500': type === TYPES.INFO
      }"
    >
      <div 
        class="flex items-center max-w-[90%]"
      >
        <!-- toast icon -->
        <svg class="w-5 h-5 flex-shrink-0" v-if="type === TYPES.SUCCESS">
          <use xlink:href="/sprite.svg#success" />
        </svg>
        <svg class="w-5 h-5 flex-shrink-0" v-else-if="type === TYPES.ERROR">
          <use xlink:href="/sprite.svg#error" />
        </svg>
        <svg class="w-5 h-5 flex-shrink-0" v-else>
          <use xlink:href="/sprite.svg#info" />
        </svg>

        <span class="text-base font-semibold text-white ml-2 block truncate max-w-full pb-1"
          >{{heading}}</span
        >
      </div>
      <button
        @click="$emit('close')"
        type="button"
        class="flex-shrink-0 -mr-2 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
      :class="{
        'hover:text-red-500': type === TYPES.ERROR,
        'hover:text-green-500': type === TYPES.SUCCESS,
        'hover:text-yellow-500': type === TYPES.INFO
      }"
      >
        <svg class="w-5 h-5">
          <use xlink:href="/sprite.svg#close" />
        </svg>
      </button>
    </div>

    <!-- message -->
    <div class="px-4 py-2">
      <p class="text-sm line-clamp line-clamp-3 break-all">{{ message }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { TYPES } from "@/constants/toast";
export default {
  name: "ToastMessage",
  emits: ["close"],
  data() {
    return {
      TYPES,
    };
  },
  computed: {
    ...mapGetters("toast", ["message", "heading", "type"]),
  }
};
</script>
