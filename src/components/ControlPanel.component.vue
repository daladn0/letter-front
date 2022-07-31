<template>
  <div class="bg-white p-4 rounded-md border">
    <div class="flex justify-between items-center h-12">
      <div class="flex items-center space-x-4 h-full">
        <button class="btn btn-blue h-full">
          <svg class="w-6 h-6 mr-2">
            <use xlink:href="/sprite.svg#upload" />
          </svg>
          Import
        </button>

        <button class="btn btn-blue h-full" @click="exportDataCSV">
          <svg class="w-6 h-6 mr-2">
            <use xlink:href="/sprite.svg#export" />
          </svg>
          <span v-if="!isExportLoading">Export</span>
          <LoadingSpinner v-else class="w-5 h-5 ml-2 mr-4" />
        </button>
      </div>

      <div class="flex items-center space-x-4 h-full">
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

        <button
          class="flex-shrink-0 btn btn-blue py-0 h-full"
          @click="$emit('addWord')"
        >
          <svg class="w-6 h-6 mr-2">
            <use xlink:href="/sprite.svg#plus" />
          </svg>
          ADD
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { MODES } from "@/constants/mode";
import { exportCSV } from '@/api/wordsApi'
import { withAsync } from '@/helpers/withAsync';
import { TYPES } from '@/constants/toast'
import LoadingSpinner from '@/components/LoadingSpinner.component.vue'
export default {
  name: "ControlPanel",
  emits: ["swap", "toggleMode", "addWord"],
  props: ["allowEditing", "mode"],
  components: {
    LoadingSpinner
  },
  data() {
    return {
      MODES,
      isExportLoading: false,
    };
  },
  methods: {
    ...mapActions('toast', ['showToast']),
    async exportDataCSV() {
      this.isExportLoading = true

      const { response, error, errorMessage } = await withAsync(exportCSV)

      this.isExportLoading = false

      if ( response ) {
        const file = new File([response.data], 'words.csv', {
          type: "text/plain"
        })

        const url = window.URL.createObjectURL(file)

        const link = document.createElement('a')
        link.href= url
        link.download = file.name

        document.querySelector('body').appendChild(link)

        link.click()

        link.remove()
      }

      if ( error ) {
        this.showToast({content: { heading: 'Downloading csv', message: errorMessage || 'Something went wrong'}, type: TYPES.ERROR})
      }
    }
  }
};
</script>
