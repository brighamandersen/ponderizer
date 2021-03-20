<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer,
    },
  };
</script>


<style>
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: black;
  }

  .content {
    min-height: calc(100vh - 180px);
    background: #e0d7bc;
    padding: 30px;
  }

  .navbar-footer {
    background: black;
    color: white;
    height: 60px;
  }

  input, textarea {
    padding: 0.5rem;
  }

  input::placeholder, textarea::placeholder {
    color: rgb(192, 192, 192);
  }

  textarea {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .flex-parent {
    display: flex;
  }

  .flex-child {
    flex: 1;
  }
</style>
