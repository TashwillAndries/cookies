<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary br-gradient">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/login" class="nav-link text-light"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link text-light"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link text-light"
                >Dashboard</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
