<template>
  <div class="card" id="preview-card">
    <h3>{{ scripture.book }} {{ scripture.chapter }}:{{ scripture.verse }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'PreviewCard',
    props: ['scripture'],
  };
</script>

<style scoped>
  #preview-card {
    width: 200px;
    text-align: center;
  }
</style>