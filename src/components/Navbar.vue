<template>
  <div class="navbar">
    <img src="../assets/logo.svg" alt="Bolt logo" class="logo" />
    <ul class="nav-links">
      <a href="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
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
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
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
  font-size: 22px;
  line-height: 45px;
  font-family: "Roboto Mono";
}

.nav-link:hover {
  transition: all 0.3s ease 0s;
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
