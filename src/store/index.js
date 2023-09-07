import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      filterOptions: [
        { name: "reading", label: "Reading", checked: false },
        { name: "writing", label: "Writing", checked: false },
        { name: "mathematics", label: "Mathematics", checked: false },
        { name: "science", label: "Science", checked: false },
        { name: "art", label: "Art", checked: false },
      ],
    };
  },
  mutations: {
    clearFilters(state) {
      state.filterOptions.forEach((item) => {
        item.checked = false;
      });
    },
  },
});

export default store;
