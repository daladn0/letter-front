<template>
  <div class="bg-blue-600 text-white">
    <div class="flex items-center font-semibold">
      <div class="w-1/12 p-4">#</div>
      <div
        v-for="field in sortFilters"
        :key="field.name"
        class="p-4"
        :class="{
          [field.width]: field.width,
        }"
      >
        <button
          class="flex items-center"
          :class="{
            'mx-auto': field.textAlignCenter,
            'cursor-default': !field.filter,
          }"
          @click="onFilterChange(field.filter)"
        >
          {{ field.name }}
          <svg
            v-if="field.filter"
            class="text-white w-5 h-5 ml-1 transform"
            :class="{
              'opacity-0': filter.name !== field.filter,
              'rotate-180': filter.state === 1,
            }"
          >
            <use xlink:href="/sprite.svg#arrow-down" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableHeading",
  props: ["sortFilters"],
  data() {
    return {
      filter: {
        name: "",
        state: 1,
      },
    };
  },
  methods: {
    onFilterChange(title) {
      if (this.filter.name === title) {
        this.filter.state = -(this.filter.state);
        return;
      }

      this.filter.name = title;
    },
  },
};
</script>
