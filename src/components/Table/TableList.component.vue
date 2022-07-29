<template>
  <div>
    <LoadingSpinner v-if="isLoading" class="w-12 h-12 mx-auto mt-20" />
    <table
      v-else
      class="table-list table-fixed w-full text-left rounded-lg overflow-hidden shadow-lg"
    >
      <TableHeading :sortFilters="sortFilters" />
      <div>
        <div :class="{'card': mode !== MODES.BOTH}" v-for="(item, index) in items" :key="item._id">
          <TableItem
            class="front"
            @inputChanged="$emit('inputChanged', $event)"
            @deleteWord="$emit('deleteWord', $event)"
            :allowEditing="allowEditing"
            :item="item"
            :index="index + 1"
            :class="[index % 2 === 0 ? 'bg-white' : 'bg-slate-100']"
            :mode="mode"
          />

          <TableItem
            v-if="mode !== MODES.BOTH"
            class="back absolute left-0 top-0 w-full"
            :allowEditing="false"
            :item="item"
            :index="index + 1"
            :class="[index % 2 === 0 ? 'bg-white' : 'bg-slate-100']"
            :mode="MODES.BOTH"
            @inputChanged="$emit('inputChanged', $event)"
          />
        </div>
      </div>
    </table>
  </div>
</template>

<script>
import TableHeading from '@/components/Table/TableHeading.component.vue'
import TableItem from "@/components/Table/TableItem.component.vue";
import LoadingSpinner from "@/components/LoadingSpinner.component.vue";
import { MODES } from "@/constants/mode";
export default {
  name: "TableList",
  emits: ['inputChanged', 'deleteWord'],
  props: ["allowEditing", "mode", "isLoading", "items"],
  created() {
    this.MODES = MODES
    this.sortFilters = [
      { name: 'Word/Phrase', filter: 'word', width: 'w-4/12' },
      { name: 'Definition/Translation', filter: 'definition', width: 'w-4/12' },
      { name: 'Date', filter: 'date', width: 'w-2/12' },
      { name: 'Actions', width: 'w-1/12', textAlignCenter: true, },
    ]
  },
  components: {
    LoadingSpinner,
    TableItem,
    TableHeading,
  },
};
</script>

<style lang="scss">
.card {
  -webkit-perspective: 1000px;
  perspective: 1000px;
  .back {
    transform: rotateX(180deg);
  }
  .back,
  .front {
    backface-visibility: hidden;
    transition: all 0.6s ease;
  }
  &:hover {
    .front {
      transform: rotateX(180deg);
    }
    .back {
      transform: rotateX(360deg);
    }
  }
}
</style>
