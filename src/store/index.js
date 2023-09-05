import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      filterOptions: [
        { name: "", label: "Reading", checked: false },
        { reading: "A", label: "Writing", checked: false },
        { reading: "A", label: "Mathematics", checked: false },
        { reading: "A", label: "Science", checked: false },
        { reading: "A", label: "Art & Design", checked: false },
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
