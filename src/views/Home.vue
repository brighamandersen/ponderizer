<template>
  <div class="home">
    <div v-for="scripture in scriptures" :key="scripture.id">
      <PreviewCard :scripture="scripture" />
    </div>
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
