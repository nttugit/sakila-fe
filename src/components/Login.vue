<template>
  <form @submit.prevent="handleSubmit">
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
    handleSubmit() {
      const data = {
        username: this.username,
        password: this.password,
      };
      // console.log(data);

      this.$axios
        .post("api/auth/login", data)
        .then(async (res) => {
          // const { refreshToken } = res?.data.data;
          // console.log(res.data.refreshToken);
          const {refreshToken, accessToken, user} = res.data.data;
          if (accessToken && refreshToken) {
            localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
            localStorage.setItem("accessToken", JSON.stringify(accessToken));
            localStorage.setItem("userName", user.username);
            await this.$router.push("/actors");
            window?.location.reload(true)
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
