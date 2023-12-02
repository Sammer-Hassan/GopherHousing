<template>
  <div id="app">
    <header>
      <div id="nav">
        <b-navbar toggleable="lg" type="light" variant="maroon">
          <b-navbar-brand href="#">
            <router-link style="text-decoration: none" :to="{ name: 'Home' }">
              <h3 style="color: #ffd700">
                <img
                  width="150"
                  height="50"
                  alt="Image"
                  class="img-fluid"
                  :src="require('@/img/logo2.png')"
                />
                <!-- Gopher Housing -->
              </h3>
            </router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ms-auto">
              <router-link style="text-decoration: none" :to="{ name: 'About' }">
                <h3>
                  <b-nav-item>About</b-nav-item>
                </h3>
              </router-link>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>

    <main id="main-content">
      <router-view />
    </main>

    <footer div id="footer">
      <div class="mt-5">
        <hr />
        <div>
          <!--class="fluid-container footer justify-content-center" -->
          <p class="text-center" style="font-size: 0.84em">
            Not affiliated with UMN-Twin Cities. © 2023 TorTech All Rights Reserved
            <span> - v{{ appVersion }}</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { version } from "../package.json";

export default {
  name: "App",
  components: {},
  computed: {
    appVersion: function () {
      return version;
    },
  },
};
</script>

<style>
@import "bootstrap/dist/css/bootstrap.css";
@import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
}
#nav a {
  font-weight: normal;
  color: white;
}
.bg-maroon {
  background: rgb(128, 0, 0);
}
#page-container {
  position: relative;
  min-height: 100vh;
}
</style>
