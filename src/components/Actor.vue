<!-- <template>
  <div>
    <h1>Film Page</h1>
    <ul>
      <li v-for="(film, index) in films" :key="index">
        {{ film.title }} ({{ film.release_year }})
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      films: [],
    };
  },
  mounted() {
    this.fetchFilms();
  },
  methods: {
  // 
  },
};
</script>
  async fetchFilms() {
  //     try {
  //       const url = 'http://localhost:3000/api/actors';
  //       const token = localStorage.getItem('accessToken');

  //       const config = {
  //         headers: {
  //           'Authorization': `Bearer ${token}`
  //         }
  //       }
  //       axios.get(url, config)
  // .then(response => {
  //   // Handle the API response here
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   // Handle any errors here
  //   console.error(error);
  // });

   
  //   }, -->
