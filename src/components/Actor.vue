<template>
  <div>
    <h1>Actors</h1>

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <!-- <th scope="col">Last Name</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(actor, index) in actors" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ actor.first_name + " " + actor.last_name }}</td>
          <!-- <td>{{ actor.last_name }}</td> -->
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
      actors: [],
    };
  },
  async mounted() {
    await this.fetchActors();
  },
  methods: {
    //
    async fetchActors() {
      try {
        const response = await this.$axios.get(APIs.ACTOR.LIST);
        this.actors = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
