<template>
  <form @submit.prevent="login">
    <h3>Login</h3>
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
    <button class="btn btn-primary btn-block">Login</button>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.log("Error", err);
        });
    },
  },
};
</script>
