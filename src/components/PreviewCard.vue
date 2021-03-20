<template>
  <div class="card">
    <span class="remove-icon">X</span>
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
  .card {
    background: white;
    width: 200px;
    padding: 2rem;
    margin: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    text-align: center;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .remove-icon {
    position: relative;
    top: 0;
    right: 0;
    cursor: pointer;
    padding: 0.5rem;
  }

  .remove-icon:hover {
    background: red;
    color: white;
    border-radius: 50%;
  }
</style>