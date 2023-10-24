<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <a href="/" class="navbar-brand">Home</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li v-if="!isLoggedIn" class="nav-item">
            <a href="/login" class="nav-link">Login</a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a href="/signup" class="nav-link">Sign up</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a href="/actors" class="nav-link">Actors</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a href="/films" class="nav-link">Films</a>
          </li>
          <div v-if="isLoggedIn" class="dropdown">
            <!-- <button class="dropbtn">{{ userName }}</button> -->
            <a href="/profile" class="nav-link">{{ userName }}</a>
            <div class="dropdown-content">
              <a @click="logout" href="#">Logout</a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    userName() {
      return localStorage.getItem("userName") || null;
    },
  },
  methods: {
    // async logout() {
    //   localStorage.setItem("refreshToken", '');
    //   localStorage.setItem("accessToken", '');
    //   localStorage.setItem("userName", '');
    //   await this.$router.push("/login");
    //   window?.location.reload(true)
    // }
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
/* Style The Dropdown Button */
.dropbtn {
  /* background-color: #1c8ef9; */
  /* color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  margin-left: 20px; */
}

/* The container <div> - needed to position the dropdown content */
/* .dropdown {
  position: relative;
  display: inline-block;
} */

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
/* .dropdown:hover .dropbtn {
  background-color: #1c8ef9;
} */
</style>
