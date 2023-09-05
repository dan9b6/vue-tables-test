<template>
  <table class="table my-4">
    <thead>
      <tr>
        <th data-heading="name">Name</th>
        <template
          v-for="(item, index) in $store.state.filterOptions"
          :key="index"
        >
          <th v-if="item.checked" :data-heading="item.label">
            {{ item.label }}
          </th>
        </template>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-item="name">Dan</td>
        <template
          v-for="(item, index) in $store.state.filterOptions"
          :key="index"
        >
          <td v-if="item.checked" :data-heading="item.label">
            {{ item.label }}
          </td>
        </template>
      </tr>
      <tr>
        <td data-item="name">Dan</td>
        <template
          v-for="(item, index) in $store.state.filterOptions"
          :key="index"
        >
          <td v-if="item.checked" :data-heading="item.label">
            {{ item.label }}
          </td>
        </template>
      </tr>
      <tr>
        <td data-item="name">Dan</td>
        <template
          v-for="(item, index) in $store.state.filterOptions"
          :key="index"
        >
          <td v-if="item.checked" :data-heading="item.label">
            {{ item.label }}
          </td>
        </template>
      </tr>
      <tr>
        <td data-item="name">Dan</td>
        <template
          v-for="(item, index) in $store.state.filterOptions"
          :key="index"
        >
          <td v-if="item.checked" :data-heading="item.label">
            {{ item.label }}
          </td>
        </template>
      </tr>
      <tr>
        <td data-item="name">Dan</td>
        <template
          v-for="(item, index) in $store.state.filterOptions"
          :key="index"
        >
          <td v-if="item.checked" :data-heading="item.label">
            {{ item.label }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
