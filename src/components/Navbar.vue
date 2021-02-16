<template>
  <div class="navbar">
    <img src="../assets/logo.svg" alt="Bolt logo" class="logo" />
    <ul class="nav-links">
      <a href="">
        <MenuIcon class="menu" />
      </a>
      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/install" class="nav-link">Install</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/docs" class="nav-link">Docs</router-link>
      </li>
      <li class="nav-item">
        <a href="https://github.com/boltchat/bolt" class="github-icon">
          <GithubIcon />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GithubIcon, MenuIcon } from "vue-feather-icons";

@Component({
  components: { GithubIcon, MenuIcon }
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.menu {
  color: #000;
  display: none;
}

.logo {
  width: 40px;
  margin-right: auto;
}

.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 10%;
}

.nav-links {
  list-style: none;
}

.nav-item {
  display: inline-block;
  padding: 0px 40px;
}

.nav-link {
  transition: all 0.3s ease 0s;
  color: var(--text-color);
  color: inherit;
  text-decoration-style: dotted;
  line-height: 45px;
  font-family: "Roboto Mono";
  font-size: 18px;
}

.nav-link:hover {
  transition: all 0.3s ease 0s;
}

svg.feather {
  margin-top: -4px;
  vertical-align: middle;
  width: 45px;
}

@media only screen and (max-width: 850px) {
  .menu {
    display: block;
  }
  .nav-item {
    display: none;
  }
}
</style>
