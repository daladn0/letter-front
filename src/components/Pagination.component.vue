<template>
  <nav>
    <ul class="flex w-fit space-x-4">
      <li v-for="page in totalPages" :key="page">
        <button
          @click="$emit('change', page)"
          class="font-semibold py-2 px-3 leading-tight bg-white rounded border border-gray-300 hover:bg-gray-100"
          :class="[page === currentPage ? 'text-white' : 'text-blue-700', {'bg-blue-700 hover:bg-blue-700': page === currentPage}]"
        >
          {{ page }}
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Pagination",
  props: ["currentPage", "totalPages"],
};
</script>
