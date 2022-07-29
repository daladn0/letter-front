<template>
  <div class="bg-white p-4 rounded-md border">
    <div class="flex justify-end items-center h-12 space-x-2">
      <select
        :value="mode"
        @change="$emit('toggleMode', $event.target.value)"
        class="block w-fit h-full px-2.5 text-base bg-transparent font-medium border-2 border-blue-700 text-blue-700 rounded-lg outline-none"
      >
        <option value="" disabled>Learning mode</option>
        <option :value="MODES.BOTH">Both</option>
        <option :value="MODES.WORDS">Words</option>
        <option :value="MODES.DEFINITIONS">Definition</option>
      </select>

      <button
        @click="$emit('swap')"
        class="flex-shrink-0 btn btn-blue py-0 h-full uppercase"
        :class="{ 'btn-blue_outline': allowEditing }"
      >
        <svg v-if="allowEditing" class="w-6 h-6 mr-2">
          <use xlink:href="/sprite.svg#lock" />
        </svg>
        <svg v-else class="w-6 h-6 mr-2">
          <use xlink:href="/sprite.svg#unlocked" />
        </svg>
        {{ allowEditing ? "Restrict" : "Allow" }} editing
      </button>

      <button class="flex-shrink-0 btn btn-blue py-0 h-full" @click="$emit('addWord')">
        <svg class="w-6 h-6 mr-2">
          <use xlink:href="/sprite.svg#plus" />
        </svg>
        ADD
      </button>
    </div>
  </div>
</template>

<script>
import { MODES } from '@/constants/mode'
export default {
  name: "ControlPanel",
  emits: ["swap", "toggleMode", "addWord"],
  props: ["allowEditing", "mode"],
  data() {
    return {
      MODES
    }
  },
};
</script>
