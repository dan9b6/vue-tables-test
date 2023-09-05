<template>
  <div>
    <button
      class="btn btn-primary mb-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      Filter Options
    </button>
  </div>
  <div class="collapse" id="collapseExample">
    <div class="d-flex flex-column gap-3">
      <div class="p-2">
        <ul class="d-flex gap-4 align-items-center ps-0 mb-0">
          <li v-for="(item, index) in $store.state.filterOptions" :key="index">
            <label class="d-flex gap-2 align-items-center">
              <span>{{ item.label }}</span>
              <input
                type="checkbox"
                :value="item.label"
                v-model="item.checked"
              />
            </label>
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-end gap-2 text-bg-light p-2">
        <button
          class="btn btn-secondary"
          @click="$store.commit('clearFilters')"
        >
          Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
ul {
  list-style: none;
}
</style>
