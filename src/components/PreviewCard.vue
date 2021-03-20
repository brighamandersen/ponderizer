<template>
  <div class="card" id="preview-card">
    <h3>{{ scripture.book }} {{ scripture.chapter }}:{{ scripture.verse }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'PreviewCard',
    props: ['scripture']
  };
</script>

<style scoped>
  #preview-card {
    text-align: center;
  }
</style>