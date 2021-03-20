<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PreviewCard />
  </div>
</template>

<script>
  import PreviewCard from '../components/PreviewCard.vue';

  export default {
    name: 'Home',
    components: {
      PreviewCard
    },
  };
</script>
