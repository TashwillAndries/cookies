<template>
  <h4>Login Page</h4>
  <form>
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
    <div v-if="error" class="text-danger">username or password incorrect</div>
    <button type="button" class="btn btn-primary" @click.prevent="login">
      Submit
    </button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  computed: {
    ...mapGetters("auth", {
      getloginStatus: "getloginStatus",
    }),
  },
  methods: {
    ...mapActions("auth", {
      userLogin: "userLogin",
    }),
    async login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      await this.userLogin(payload);
      if (this.getloginStatus == "success") {
        console.log("i work");
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style></style>
