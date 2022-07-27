<template>
  <table
    class="table-list table-fixed w-full text-left rounded-lg overflow-hidden shadow-lg"
  >
    <thead class="bg-blue-600 text-white">
      <tr>
        <th class="w-1/12 p-4">
            #
        </th>
        <th class="w-4/12 p-4">
          <button>Word/Phrase</button>
        </th>
        <th class="w-5/12 p-4">
          <button>Definition/Translation</button>
        </th>
        <th class="w-2/12 p-4">
          <button>Date</button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, index) in 5" :key="i" class="border-b" :class="[ index % 2 === 0 ? 'bg-white' : 'bg-slate-100' ]">
        <td class="p-4">
          <p class="block max-w-full truncate">{{i}}</p>
        </td>
        <td class="px-4">
            <input class="bg-transparent w-full h-full py-4 outline-none" type="text" value="Whore">
        </td>
        <td class="px-4">
            <input class="bg-transparent w-full h-full py-4 outline-none" type="text" value="Повія">
        </td>
        <td class="p-4">
          <p class="text-sm text-gray-700">Jul 27 2022, 20:51</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TableList",
};
</script>
