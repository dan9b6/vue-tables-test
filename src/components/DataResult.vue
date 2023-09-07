<template>
  <td class="table__result position-relative" :data-item-value="tableData">
    <DataButton
      type="button"
      :data-type="tableData"
      :label="tableData"
      @click="handleToggleOpen"
      :value="tableData"
    />
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
      <input
        type="text"
        placeholder="Enter grade"
        class="border-rounded p-2"
        :on-change="handleInput(inputValue)"
        v-model="inputValue"
      />
      <ul class="d-grid gap-2 ps-0">
        <li v-for="(grade, index) in gradeOptionsFilter" :key="index">
          <DataButton
            type="button"
            :data-type="grade"
            :label="grade"
            :value="grade"
            @click="editGrade"
          />
        </li>
      </ul>
    </form>
  </td>
</template>
<script>
import DataButton from "./DataButton.vue";

export default {
  data() {
    return {
      toggle: false,
      tableData: this.data,
      subject: this.dataHeading,
      studentName: this.student,
      tableColumn: this.dataColumn,
      inputValue: "",
      gradeOptionsFilter: [...this.$store.state.gradeOptions],
    };
  },

  props: {
    data: String,
    student: String,
    dataColumn: Object,
    dataHeading: String,
  },

  components: {
    DataButton,
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
      let payload = {
        name: this.studentName,
        subject: this.subject,
        grade: this.tableData,
      };
      this.$store.commit("updateGrades", payload);
    },

    handleInput(event) {
      if (event.length > 0) {
        this.gradeOptionsFilter = this.$store.state.gradeOptions.filter(
          (el) => event.toUpperCase() === el
        );
      } else {
        this.gradeOptionsFilter = this.$store.state.gradeOptions;
      }
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
