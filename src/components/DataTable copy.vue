<template>
  <table class="table w-100">
    <thead>
      <tr>
        <th
          v-for="(item, index) in Object.keys(tableData[0])"
          :key="index"
          :value="item"
          @click="sortData"
          data-sorted="false"
        >
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in tableData"
        :key="index"
        :data-table-row="index"
      >
        <td v-for="(value, index) in item" :key="index">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      tableData: this.data,
    };
  },

  created() {
    this.getData();
  },

  props: {
    data: Object,
  },

  methods: {
    getData() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.tableData = data.products));
    },

    sortData(event) {
      let val = event.target.getAttribute("value");
      let state = event.target.getAttribute("data-sorted");

      this.tableData.map((obj) => {
        if (typeof obj[val] === "number") {
          this.sortNumber(val, state);
        }
      });
    },

    sortNumber(val, state) {
      if (state === "false") {
        event.target.setAttribute("data-sorted", "true");
        this.tableData = [...this.tableData].sort((a, b) =>
          Number(a[val] - b[val])
        );
      }

      if (state === "true") {
        event.target.setAttribute("data-sorted", "false");
        this.tableData = [...this.tableData].sort((a, b) =>
          Number(b[val] - a[val])
        );
      }
    },

    sortAlpha(val, state) {
      if (state === "false") {
        event.target.setAttribute("data-sorted", "true");
        this.tableData = [...this.tableData].sort((a, b) =>
          Number(a[val] - b[val])
        );
      }

      if (state === "true") {
        event.target.setAttribute("data-sorted", "false");
        this.tableData = [...this.tableData].sort((a, b) =>
          Number(b[val] - a[val])
        );
      }
    },
  },
};
</script>
<style lang="scss"></style>
