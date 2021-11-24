<template>
  <h3>Register Page</h3>
  <form>
    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input
        type="text"
        class="form-control"
        id="username"
        v-model="username"
      />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="text" class="form-control" id="email" v-model="email" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
      />
    </div>
    <div v-if="exists">User already exists</div>
    <button type="button" class="btn btn-primary" @click.prevent="register">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      exists: false,
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(({ status }) => {
          console.log("you can log in");
          this.$router.push("/login");
        })
        .catch((error) => {
          this.exists = true;
        });
    },
  },
};
</script>

<style></style>
