<template>
  <div class="navbar-footer" id="nav">
    <div class="flex-child">
      <h1 id="app-name">Ponderizer</h1>
    </div>
    <div class="flex-child nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
  };
</script>

<style scoped>
  #nav {
    display: flex;
    justify-items: flex-end;
    align-items: center;
  }

  .flex-child {
    flex: 1;
  }

  #app-name {
    margin: 0 2rem;
  }

  .nav-links {
    flex: 1;
    display: inherit;
    justify-content: center;
  }

  #nav a {
    font-weight: bold;
    color: gray;
    padding: 1rem 2rem;
  }

  #nav a.router-link-exact-active {
    color: white;
    font-weight: bold;
  }
</style>