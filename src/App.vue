<template>
  <main class="py-4">
    <div class="container-fluid">
      <DataFilters />
      <DataTable />
    </div>
  </main>
</template>
<script>
import DataFilters from "./components/DataFilters.vue";
import DataTable from "./components/DataTable.vue";
export default {
  components: {
    DataFilters,
    DataTable,
  },
};
</script>
<style lang="scss"></style>
