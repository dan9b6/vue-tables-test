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
      <tr v-for="(student, studentIndex) in $store.state.gradeData" :key="studentIndex">
        <td data-item="name">{{ student.name }}</td>
        <template
          v-for="(filterColumn, filterIndex) in $store.state.filterOptions"
          :key="filterIndex"
        >
          <td v-if="filterColumn.checked" :data-heading="filterColumn.label">
              {{ getStudentGrade(studentIndex, filterColumn.label )}}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
    created() {
        this.$store.commit('createFilters');
    },
    methods : {
        getStudentGrade(studentIndex, subject) {
            const grade = this.$store.state.gradeData[studentIndex].grades.filter((grade) => grade.subject === subject);
            if(grade.length > 0) {
                return grade[0].grade;
            }
            return '-';
        }
    }
};
</script>
<style lang="scss"></style>
