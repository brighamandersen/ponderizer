<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
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
    computed: {
      user() {
        return this.$root.$data.user;
      }
    }
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
    background: #f1e9ce;
    padding: 30px;
  }

  .navbar-footer {
    background: black;
    color: white;
    height: 60px;
  }

  input, textarea {
    padding: 0.5rem;
    background: rgb(233, 233, 233);
    outline: none;
    border: none;
  }

  input:hover, input:focus, textarea:hover, textarea:focus {
    background:rgb(221, 221, 221);
    outline: 1px solid rgb(204, 204, 204);
  }

  input::placeholder, textarea::placeholder {
    color: rgb(192, 192, 192);
  }

  textarea {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

  .flex-parent {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-child {
    flex: 1;
    align-items: center;
  }

  .card {
    background: white;
    padding: 2rem;
    margin: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    overflow-wrap: break-word;
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

  .form-section {
    padding: 0.5rem 0;
  }

  label {
    padding: 0.5rem 0.2rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .btn-wrapper {
    margin: 1rem 0;
  }

  button {
    background: black;
    color: white;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    font-size: large;
    font-weight: bold;
    letter-spacing: 2px;
  }

  button:hover {
    background:rgb(43, 43, 43)
  }

  .default-form {
    padding: 1rem;
    min-width: 250px;
    max-width: 40%;
    margin: auto;
    text-align: left;
  }

  .form-section {
    flex-direction: column;
  }
</style>
