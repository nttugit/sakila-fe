<template>
  <div>
    <h1>Films</h1>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Release Year</th>
          <th scope="col">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(film, index) in films" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ film.title }}</td>
          <td>{{ film.release_year }}</td>
          <td>{{ film?.rating || "N/A" }}</td>
        </tr>
      </tbody>
    </table>
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
        console.log("Film API: ", APIs.FILM.LIST);
        const response = await this.$axios.get(APIs.FILM.LIST);
        this.films = response.data.data;
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
