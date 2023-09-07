import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // Nothing initially.
      // We'll use the grade data directly to work out what we need
      filterOptions: [],
      // This has probably been loaded from an API
      gradeData: [
        {
          name: "George Gardiner",
          grades: [
            { subject: "Reading", grade: "A" },
            { subject: "Writing", grade: "B" },
            { subject: "Mathematics", grade: "B" },
            { subject: "Science", grade: "A" },
            { subject: "Art & Design", grade: "C" },
          ],
        },
        {
          name: "Dan Burton",
          grades: [
            { subject: "Reading", grade: "A" },
            { subject: "Writing", grade: "A" },
            { subject: "Mathematics", grade: "B" },
            { subject: "Science", grade: "B" },
            { subject: "Art & Design", grade: "A" },
          ],
        },
        {
          name: "Peter Parker",
          grades: [
            { subject: "Reading", grade: "C" },
            { subject: "Writing", grade: "C" },
            { subject: "Mathematics", grade: "B" },
            { subject: "Science", grade: "C" },
            { subject: "Art & Design", grade: "A" },
          ],
        },
        {
          name: "Mary Wood",
          grades: [
            { subject: "Reading", grade: "D" },
            { subject: "Writing", grade: "B" },
            { subject: "Mathematics", grade: "C" },
            { subject: "Science", grade: "D" },
            { subject: "Art & Design", grade: "C" },
          ],
        },
        {
          name: "Josie Applegate",
          grades: [
            { subject: "Reading", grade: "A" },
            { subject: "Writing", grade: "A" },
            { subject: "Mathematics", grade: "A" },
            { subject: "Science", grade: "A" },
            { subject: "Art & Design", grade: "B" },
          ],
        },
        {
          name: "Hannah Montanna",
          grades: [
            { subject: "Reading", grade: "A" },
            { subject: "Writing", grade: "A" },
            { subject: "Mathematics", grade: "A" },
            { subject: "Religious Education", grade: "A" },
            { subject: "Drama", grade: "A" },
          ],
        },
      ],
    };
  },
  mutations: {
    createFilters(state) {
      // For every student
      state.gradeData.forEach((student) => {
        // For every grade
        student.grades.forEach((grade) => {
          // Is this subject already in the filter options?
          if (
            state.filterOptions.reduce((acc, current) => {
              if (current.label === grade.subject) return true;
              return acc;
            }, false) !== true
          ) {
            // No - we better add it.
            state.filterOptions.push({
              label: grade.subject,
              checked: false,
            });
          }
        });
      });
    },
    clearFilters(state) {
      state.filterOptions.forEach((item) => {
        item.checked = false;
      });
    },
  },
});

export default store;
