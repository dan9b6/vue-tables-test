<template>
  <button type="button" class="btn w-100" :data-type="dataType">
    {{ label }}
  </button>
</template>
<script>
export default {
  props: {
    dataType: String,
    label: String,
  },
};
</script>
<style lang="scss">
.btn {
  &[data-type="A"] {
    background-color: green;
    color: white;
  }
  &[data-type="B"] {
    background-color: blue;
    color: white;
  }
  &[data-type="C"] {
    background-color: purple;
    color: white;
  }
  &[data-type="D"] {
    background-color: orange;
    color: black;
  }
  &[data-type="E"] {
    background-color: yellow;
    color: black;
  }
  &[data-type="F"] {
    background-color: red;
    color: white;
  }
}
</style>
