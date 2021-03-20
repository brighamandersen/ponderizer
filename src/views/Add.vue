<template>
  <div class="add">
    <h1>This is an add page</h1>
    <div v-for="scripture in scriptures" :key="scripture.id">
      <h1>{{ scripture.book }} {{ scripture.chapter }}:{{ scripture.verse }}</h1>
      <p>{{ scripture.content }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Add',
    computed: {
      scriptures() {
        return this.$root.$data.scriptures;
      }
    }
  };
</script>
