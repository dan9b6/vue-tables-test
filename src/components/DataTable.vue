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
      <tr
        v-for="(student, studentIndex) in $store.state.gradeData"
        :key="studentIndex"
      >
        <td data-item="name">{{ student.name }}</td>
        <template
          v-for="(filterColumn, filterIndex) in $store.state.filterOptions"
          :key="filterIndex"
        >
          <DataResult
            v-if="filterColumn.checked"
            :data="getStudentGrade(studentIndex, filterColumn.label)"
            :data-heading="filterColumn.label"
            :data-column="filterColumn"
            :student="student.name"
          />
        </template>
      </tr>
    </tbody>
  </table>
</template>
<script>
import DataResult from "./DataResult.vue";

export default {
  created() {
    this.$store.commit("createFilters");
  },
  components: {
    DataResult,
  },
  methods: {
    getStudentGrade(studentIndex, subject) {
      const grade = this.$store.state.gradeData[studentIndex].grades.filter(
        (grade) => grade.subject === subject
      );
      if (grade.length > 0) {
        return grade[0].grade;
      }
      return "-";
    },
  },
};
</script>
<style lang="scss"></style>
