<template>
  <div class="home" v-if="user">
    <h1>All Ponderize Scriptures</h1>
    <router-link v-for="scripture in scriptures" :key="scripture._id" :to="'/focus/' + scripture._id" class="flex-parent fit-width">
      <PreviewCard :scripture="scripture" class="flex-child" />
    </router-link>
    <p v-if="scriptures.length === 0">You don't have any scriptures to ponderize.  
      <router-link to="/add">Add</router-link> one now!
    </p>
  </div>
  <Login v-else />
</template>

<script>
  import PreviewCard from '../components/PreviewCard.vue';
  import Login from '../components/Login.vue';
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      PreviewCard,
      Login
    },
    async created() {
      this.getUsers();
      this.getScriptures();
    },
    methods: {
      async getUsers() {
        try { 
          let response = await axios.get('/api/users');
          this.$root.$data.user = response.data.user;
        } catch (error) {
          this.$root.$data.user = null;
        }
      },
      async getScriptures() {
        try {
          const response = await axios.get("/api/scriptures");
          this.$root.$data.scriptures = response.data;
        } catch (error) {
          console.log(error);
        }
      }
    },
    computed: {
      user() {
        return this.$root.$data.user;
      },
      scriptures() {
        return this.$root.$data.scriptures;
      }
    }
  };
</script>
