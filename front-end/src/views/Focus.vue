<template>
  <div class="focus" v-if="scripture != null">
    <h1>Focus Mode</h1>
    <div class="card default-form" id="full-card">
      <div class="card-toolbar">
        <span class="option edit-option" :class="{ active: inEditMode }" @click="inEditMode = !inEditMode"><i class="fas fa-edit"></i></span>
        <span class="option remove-option" @click="removeScripture(scripture)"><i class="fas fa-trash-alt"></i></span>
      </div>
      <div class="card-content" v-if="!inEditMode">
        <h2>{{ scripture.book }} {{ scripture.chapter }}:{{ scripture.verse }}</h2>
        <p>{{ scripture.content }}</p>
      </div>
      <div v-else>
        <form class="default-form inner-form" @submit.prevent="updateScripture(scripture)">
          <div class="flex-parent form-section">
            <label class="flex-child" for="book">Book</label>
            <input type="text" class="flex-child" v-model="scripture.book" autofocus required />
          </div>
          <div class="flex-parent form-section">
            <label class="flex-child" for="chapter">Chapter</label>
            <input type="number" class="flex-child" v-model="scripture.chapter" required />
          </div>
          <div class="flex-parent form-section">
            <label class="flex-child" for="verse">Verse</label>
            <input type="number" class="flex-child" v-model="scripture.verse" required />
          </div>
          <div class="flex-parent form-section">
            <label class="flex-child" for="content">Content</label>
            <textarea class="flex-child" v-model="scripture.content" rows="6" required />
          </div>
          <div class="flex-parent btn-wrapper">
            <button class="flex-child" type="submit">DONE</button>
          </div>
        </form>
      </div>
    </div>
    <p class="success-msg" v-if="successMsg != ''">{{ successMsg }}</p>
  </div>
  <div v-else>
    <NotFound />
  </div>
</template>

<script>
import NotFound from '../views/NotFound.vue';
import axios from 'axios';

export default {
  name: 'Focus',
  components: {
    NotFound
  },
  data() {
    return {
      scripture: {},
      successMsg: '',
      inEditMode: false
    }
  },
  created() {
    this.getScripture();
  },
  methods: {
    async getScripture() {
      try {
        const response = await axios.get(`/api/scriptures/${this.$route.params.id}`);
        this.scripture = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateScripture(scripture) {
      this.inEditMode = false;
      try {
        await axios.put(`/api/scriptures/${scripture._id}`, {
          book: scripture.book,
          chapter: scripture.chapter,
          verse: scripture.verse,
          content: scripture.content,
        });
        // this.getScripture();
      } catch (error) {
        console.log(error);
        return;
      }
    },
    async removeScripture(scripture) {
      try {
        await axios.delete(`/api/scriptures/${scripture._id}`);
      } catch (error) {
        console.log(error);
        return;
      }

      this.successMsg = "Scripture successfully deleted.  Redirecting you back to Home...";

      setTimeout(() => this.$router.push("/"), 1000);
    },
  }
}
</script>

<style scoped>
  #full-card {
    text-align: center;
    padding: 0;
  }

  .card-toolbar {
    background: rgb(233, 233, 233);
    padding: 1rem;
  }

  .option {
    padding: 0.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
  }

  .edit-option:hover {
    background: rgb(184, 184, 184);
  }

  .remove-option:hover {
    background: red;
    color: white;
  }

  .card-content {
    padding: 3rem 1rem;
  }

  .active {
    border-bottom: 1px solid black;
  }

  .inner-form {
    max-width: 90%;
  }
</style>
