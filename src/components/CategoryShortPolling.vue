<template>
  <div>
    <h1>Categories</h1>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Last update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, index) in categories" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ category.name }}</td>
          <td>
            {{ formatDatetime(category.last_update) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import APIs from "../constants/api.js";
import moment from "moment";

export default {
  data() {
    return {
      categories: [],
      ts: 0,
    };
  },
  async mounted() {
    await this.fetchCategories(); // Fetch initially
  },

  methods: {
    async fetchCategories() {
      try {
        const url = APIs.CATEGORY.LIST_SP + `?ts=${this.ts}`;
        console.log("Category API: ", url);

        const response = await this.$axios.get(url);
        if (response.data.data.length > 0)
          this.categories = this.categories.concat(response.data.data);
        this.ts = response.data.meta?.polling.return_ts;
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setTimeout(async () => {
          const url = APIs.CATEGORY.LIST_SP + `?ts=${this.ts}`;
          await this.fetchCategories(url);
        }, 5000);
      }
    },
    formatDatetime(datetime) {
      return moment(datetime).format("DD/MM/YYYY HH:mm:s");
    },
  },
};
</script>
<style scope></style>
