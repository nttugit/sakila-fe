<template><h3>Hello {{ userName }} </h3></template>

<script>
export default {
  name: "Home",
  computed: {
    userName() {
      return localStorage.getItem("userName") || null;
    }
  },
};
</script>
