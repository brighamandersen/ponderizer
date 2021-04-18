<template>
  <div class="navbar-footer" id="nav">
    <div class="flex-child">
      <router-link to="/" id="app-name-home-link"><h1 id="app-name">Ponderizer</h1></router-link>
    </div>
    <div class="flex-child nav-links" v-if="user">
      <router-link to="/"><i class="fas fa-home"></i></router-link>
      <router-link to="/add"><i class="fas fa-plus"></i></router-link>
        <h4><span id="logged-in-user">{{user.firstName}} {{user.lastName}}</span> <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h4>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Navbar',
    computed: {
      user() {
        return this.$root.$data.user;
      }
    },
    methods: {
      async logout() {
        try {
          await axios.delete("/api/users");
          this.$root.$data.user = null;
          this.$router.push('/');
        } catch (error) {
          this.$root.$data.user = null;
        }
      },
    }
  };
</script>

<style scoped>

  #nav {
    display: flex;
    justify-items: flex-end;
    align-items: center;
  }

  #app-name {
    margin: 10px;
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

  #nav a.router-link-exact-active, #nav a :hover {
    color: white;
    font-weight: bold;
  }

  #nav a#app-name-home-link {
    color: white;
    text-decoration: none;
  }

  #logged-in-user {
    color: rgb(187, 187, 187);
  }

  @media screen and (max-width: 600px) {
    #logged-in-user {
      display: none;
    }
  }
</style>