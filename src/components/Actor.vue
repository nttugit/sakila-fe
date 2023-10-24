<template>
  <div>
    <h1>Actors</h1>
    <ul>
      <ol v-for="(actor, index) in actors" :key="index">
        {{
          index + 1
        }}.
        {{
          actor.first_name
        }}
        {{
          actor.last_name
        }}
      </ol>
    </ul>
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
