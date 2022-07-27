<template>
  <div class="container mx-auto pt-6 space-y-8">
    <ControlPanel/>
    <TableList />
  </div>
</template>
<script>
import ControlPanel from '@/components/ControlPanel.component.vue'
import TableList from '@/components/Table/TableList.component.vue'
export default {
  name: "HomePage",
  components: {
    TableList,
    ControlPanel,
  }
};
</script>
