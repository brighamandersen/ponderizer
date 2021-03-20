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

  #app-name {
    margin-left: 20px;
  }

  .nav-links {
    flex: 1;
    display: inherit;
    justify-content: center;
  }

  #nav a {
    font-weight: bold;
    color: rgb(187, 187, 187);
    padding: 10px 20px;
  }

  #nav a.router-link-exact-active {
    color: white;
    font-weight: bold;
  }
</style>