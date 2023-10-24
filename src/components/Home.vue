<template>
  <h3 v-if="isLoggedIn">Xin chào {{ userName }}</h3>
  <h3 v-else>You have not logged in.</h3>
</template>

<script>
export default {
  name: "Home",
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    userName() {
      return localStorage.getItem("userName") || null;
    },
  },
};
</script>
