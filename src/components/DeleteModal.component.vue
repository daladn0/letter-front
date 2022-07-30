<template>
  <div
    tabindex="-1"
    class="flex items-center justify-center fixed top-0 right-0 left-0 z-50 w-full h-full bg-black bg-opacity-60"
    @click.self="$emit('close')"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          @click="$emit('close')"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white transition-all"
        >
          <svg class="w-5 h-5">
            <use xlink:href="/sprite.svg#close" />
          </svg>
        </button>
        <div class="p-6 text-center">
          <svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200">
            <use xlink:href="/sprite.svg#warning" />
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete word <span class="font-semibold"># {{number}}</span>?
          </h3>
          <div class="flex items-center justify-center space-x-4">
            <button class="btn btn-red" @click="$emit('confirm')">Yes, I'm sure</button>
            <button class="btn btn-grey px-8" @click="$emit('close')">No, cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeleteModal",
  props: ['number']
};
</script>
