<template>
  <div class="focus" v-if="scripture != null">
      <h1>Focus Mode</h1>
      <FullCard :scripture="scripture" />
  </div>
  <div v-else>
    <NotFound />
  </div>
</template>

<script>
import FullCard from '../components/FullCard.vue';
import NotFound from '../views/NotFound.vue';

export default {
  name: 'Focus',
  components: {
    FullCard,
    NotFound
  },
  data() {
    return {
      scripture: {}
    }
  },
  created() {
    this.scripture = this.$root.$data.scriptures.find((scripture) => scripture.id
    === this.$route.params.id);
  }
}
</script>

<style scoped>
  .focus {
    
  }
</style>
