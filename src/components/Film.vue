<template>
  <div>
    <h1>Films</h1>
    <ul>
      <li v-for="(film, index) in films" :key="index">
        {{ film.title }} ({{ film.release_year }}, {{ film.special_features }},
        {{ film.length }})
      </li>
    </ul>
  </div>
</template>

<script>
import APIs from "../constants/api.js";

export default {
  data() {
    return {
      films: [],
    };
  },
  async mounted() {
    await this.fetchFilms();
  },
  methods: {
    async fetchFilms() {
      try {
        // server a
        // const response = await fetch("http://localhost:3000/api/films/from-b");
        const response = await this.$axios.get(APIs.FILM.LIST);
        this.films = response.data.data;

        // if (response.ok) {
        //   this.films = await response.json();
        // } else {
        //   console.error("Failed to fetch films");
        // }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
<style scope>
/* .auth-inner {
  width: auto;
} */
</style>
