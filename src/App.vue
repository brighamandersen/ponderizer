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

  .card {
    background: white;
    padding: 2rem;
    margin: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .success-msg {
    color: green;
    text-align: center;
    padding: 1rem;
  }

  .error-msg {
    color: red;
    text-align: center;
    padding: 1rem;
  }
</style>
