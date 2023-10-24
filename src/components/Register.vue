<template>
  <form @submit.prevent="register">
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
// import axios from "axios";
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
    async register() {
      const data = {
        username: this.username,
        password: this.password,
      };
      try {
        if (this.password !== this.confirmPassword)
          return alert("Mật khẩu nhập lại không khớp");
        const res = await this.$axios.post("api/auth/register", data);
        if (res.data.data?.username) {
          this.$router.push("/login");
        } else {
          console.log(res);
        }
      } catch (error) {
        console.log(error?.response.data);
        const message =
          typeof error?.response.data.message == "object"
            ? error?.response.data.message[0].message
            : error?.response.data.message;
        return alert(message);
      }
    },
  },
};
</script>
