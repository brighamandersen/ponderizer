<template>
  <MyScriptures v-if="user" />
  <Login v-else />
</template>

<script>
  import MyScriptures from '../components/MyScriptures.vue';
  import Login from '../components/Login.vue';
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      MyScriptures,
      Login
    },
    async created() {
      this.getUsers();
    },
    methods: {
      async getUsers() {
        try { 
          const response = await axios.get('/api/users');
          this.$root.$data.user = response.data.user;
        } catch (error) {
          this.$root.$data.user = null;
        }
      }
    },
    computed: {
      user() {
        return this.$root.$data.user;
      }
    }
  };
</script>
