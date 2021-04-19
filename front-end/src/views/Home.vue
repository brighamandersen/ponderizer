<template>
  <MyScriptures v-if="user" />
  <Login v-else />
</template>

<script>
  import MyScriptures from '../components/MyScriptures.vue';
  import Login from '../components/Login.vue';

  export default {
    name: 'Home',
    components: {
      MyScriptures,
      Login
    },
    computed: {
      user() {
        return this.$root.$data.user;
      }
    }
  };
</script>
