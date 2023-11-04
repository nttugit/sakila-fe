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
    };
  },
  async mounted() {
    await this.fetchCategories(); // Fetch initially
    await this.setupSSE();
  },

  methods: {
    async fetchCategories() {
      try {
        // Call API
        const url = APIs.CATEGORY.LIST;
        console.log("Category API: ", url);
        const response = await this.$axios.get(url);
        this.categories = response.data.data;

        // ws.on
      } catch (error) {
        console.error("Error:", error);
      }
    },

    async setupSSE() {
      // Kiểm tra Browser có support Server-Sent Events không?
      if (typeof EventSource === "undefined") {
        console.error("SSE is not supported!");
        return;
      }

      console.log("Setting up SSE ....");

      // Tạo EventSource
      const src = new EventSource(
        "http://localhost:3000/subscribeCategoryAdded"
      );
      src.onerror = function (e) {
        console.error("error: " + e);
      };
      // Thêm Event
      src.addEventListener(
        "category_added",
        (e) => {
          const category = JSON.parse(e.data);
          console.log("data", category);
          this.categories = this.categories.concat([category]);
        },
        false
      );
    },

    formatDatetime(datetime) {
      return moment(datetime).format("DD/MM/YYYY HH:mm:s");
    },
  },
};
</script>
<style scope></style>
