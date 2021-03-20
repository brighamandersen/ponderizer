<template>
  <div class="home">
    <h1>All Ponderize Scriptures</h1>
    <router-link v-for="scripture in scriptures" :key="scripture.id" :to="'/focus/' + scripture.id">
      <PreviewCard :scripture="scripture" />
    </router-link>
    <p v-if="scriptures.length === 0">You don't have any scriptures to ponderize.  
      <router-link to="/add">Add</router-link> one now!
    </p>
  </div>
</template>

<script>
  import PreviewCard from '../components/PreviewCard.vue';

  export default {
    name: 'Home',
    components: {
      PreviewCard
    },
    computed: {
      scriptures() {
        return this.$root.$data.scriptures;
      }
    }
  };
</script>
