<template>
  <div class="add">
    <h1>Add New Scripture</h1>
    <form class="card default-form" id="add-form" @submit.prevent="addScripture">
      <div class="flex-parent form-section">
        <label class="flex-child" for="book">Book</label>
        <input type="text" class="flex-child" v-model="book" placeholder="John" autofocus required maxlength="25" />
      </div>
      <div class="flex-parent form-section">
        <label class="flex-child" for="chapter">Chapter</label>
        <input type="number" class="flex-child" v-model="chapter" placeholder="3" required max="200" />
      </div>
      <div class="flex-parent form-section">
        <label class="flex-child" for="verse">Verse</label>
        <input type="number" class="flex-child" v-model="verse" placeholder="16" required  max="200"  />
      </div>
      <div class="flex-parent form-section">
        <label class="flex-child" for="content">Content</label>
        <textarea class="flex-child" v-model="content" placeholder="For God so loved the world..." rows="6" required />
      </div>
      <div class="flex-parent btn-wrapper">
        <button class="flex-child" type="submit">ADD</button>
      </div>
    </form>
    <p class="success-msg" v-if="successMsg != ''">{{ successMsg }}</p>
    <p class="error-msg" v-if="errorMsg != ''">{{ errorMsg }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Add',
    data() {
      return {
        book: '',
        chapter: '',
        verse: '',
        content: '',
        successMsg: '',
        errorMsg: ''
      }
    },
    methods: {
      async addScripture() {
        this.successMsg = '';
        this.errorMsg = '';

        const newScripture = {
          book: this.book,
          chapter: this.chapter,
          verse: this.verse,
          content: this.content
        }
        
        // Check for duplicate by id
        const alreadyExists = this.$root.$data.scriptures.some((scripture) => (
          scripture.book == newScripture.book && scripture.chapter == newScripture.chapter && scripture.verse == newScripture.verse
        ));
        
        if (alreadyExists) {
          this.errorMsg = "You already added that scripture.  Try a new verse.";
          return;
        } 
        
        try {
          await axios.post("/api/scriptures", {
            book: this.book,
            chapter: this.chapter,
            verse: this.verse,
            content: this.content
          });
        } catch (error) {
          console.log(error);
          return;
        }

        this.errorMsg = '';
        this.book = '';
        this.chapter = '';
        this.verse = '';
        this.content = '';
        this.successMsg = 'Scripture has been successfully added!';
      }
    },
    watch: {
      errorMsg() {
        if (this.errorMsg != '') {
            setTimeout(() => this.errorMsg = '', 3000);
        }
      },
      successMsg() {
        if (this.successMsg != '') {
            setTimeout(() => this.successMsg = '', 3000);
        }
      }
    }
  };
</script>

<style scoped>
  #add-form {
    padding: 2rem;
  }

  .float-parent {
    overflow: hidden;
  }

  .float-right {
    float: right;
  }

  label {
    padding-top: 0.4rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
