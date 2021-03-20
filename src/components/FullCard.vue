<template>
  <div class="card" id="full-card">
    <div class="card-toolbar">
      Card Toolbar
      <span class="remove-icon" @click="remove(scripture)">X</span>
    </div>
    <div class="card-content">
      <h2>{{ scripture.book }} {{ scripture.chapter }}:{{ scripture.verse }}</h2>
      <p>{{ scripture.content }}</p>
    </div>
    <p class="success-msg" v-if="successMsg != ''">{{ successMsg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'FullCard',
    props: ['scripture'],
    data() {
      return {
        successMsg: ''
      }
    },
    methods: {
      remove(scripture) {
        this.$root.$data.scriptures.splice(this.$root.$data.scriptures.indexOf(scripture), 1);

        this.successMsg = "Scripture successfully deleted.  Redirecting you back to Home...";

        setTimeout(() => this.$router.push("/"), 1000);
      }
    }
  };
</script>

<style scoped>
  #full-card {
    text-align: center;
    padding: 1rem;
  }

  .card-toolbar {
    background: orange;
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
  }

  .card-content {
    background: lime;
  }
</style>