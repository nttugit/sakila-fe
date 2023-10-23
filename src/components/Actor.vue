<template>
  <div>
    <h1>Actors Page</h1>
    <ul>
      <li v-for="(actor, index) in actors" :key="index">
        {{ actor.first_name }} ({{ actor.last_name }})
      </li>
    </ul>
  </div>
</template>

<script>
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
        const rest = await this.$axios.get('api/actors')
        console.log("11111",{rest})
        this.actors = rest.data.data
      } catch (error) {
        console.log(error)
      }
    }
  },
};
</script>