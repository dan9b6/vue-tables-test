<template>
  <td class="table__result position-relative" :data-item-value="tableData">
    <button @click="handleToggleOpen" class="btn btn-primary d-block w-100">
      {{ this.tableData }}
    </button>
    <div
      v-if="toggle"
      @click="handleToggleClose"
      id="table-results__overlay"
      class="position-fixed top-0 start-0 w-100 h-100 z-3"
    ></div>
    <form
      v-if="toggle"
      class="position-absolute top-0 end-0 d-grid gap-3 p-3 border border-rounded bg-white z-3"
    >
      <h4 class="border-bottom mb-0 pb-3">{{ studentName }}</h4>
      <input type="text" placeholder="Enter grade" class="border-rounded p-2" />
      <ul class="d-grid gap-2 ps-0">
        <li>
          <button
            type="button"
            class="btn btn-primary w-100"
            @click="editGrade"
            value="A"
          >
            A
          </button>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-primary w-100"
            @click="editGrade"
            value="B"
          >
            B
          </button>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-primary w-100"
            @click="editGrade"
            value="C"
          >
            C
          </button>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-primary w-100"
            @click="editGrade"
            value="D"
          >
            D
          </button>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-primary w-100"
            @click="editGrade"
            value="E"
          >
            E
          </button>
        </li>
        <li>
          <button
            type="button"
            class="btn btn-primary w-100"
            @click="editGrade"
            value="F"
          >
            F
          </button>
        </li>
      </ul>
    </form>
  </td>
</template>
<script>
export default {
  data() {
    return {
      toggle: false,
      tableData: this.data,
      studentName: this.student,
      tableColumn: this.dataColumn,
    };
  },

  props: {
    data: String,
    student: String,
    dataColumn: Object,
  },

  methods: {
    handleFormSubmission(event) {
      event.preventDefault();
    },
    handleToggleOpen() {
      this.toggle = true;
    },
    handleToggleClose() {
      this.toggle = false;
    },
    editGrade(event) {
      this.tableData = event.target.value;
      this.handleToggleClose();
    },
  },
};
</script>
<style lang="scss">
.table__result {
  cursor: pointer;
}

#table__result-overlay {
  z-index: 1;
}
</style>
