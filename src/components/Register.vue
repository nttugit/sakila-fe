<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <div class="form-group">
      <label for="">Username</label>
      <input
        v-model="username"
        type="text"
        class="form-control"
        placeholder="Username"
      />
    </div>
    <div class="form-group">
      <label for="">Password</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        placeholder="Password"
      />
    </div>
    <div class="form-group">
      <label for="">Confirm Password</label>
      <input
        v-model="confirmPassword"
        type="password"
        class="form-control"
        placeholder="Confirm Password"
      />
    </div>
    <button class="btn btn-primary btn-block">Sign up</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      console.log(data);

      axios
        .post("http://localhost:3000/register", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
