<template>
  <div class="add">
    <h1>Add New Scripture</h1>
    <form class="add-form" @submit.prevent="add">
      <div class="flex-parent form-section">
        <label class="flex-child" for="book">Book</label>
        <input type="text" class="flex-child" v-model="book" placeholder="John" autofocus />
      </div>
      <div class="flex-parent form-section">
        <label class="flex-child" for="chapter">Chapter</label>
        <input type="text" class="flex-child"  v-model="chapter" placeholder="3" />
      </div>
      <div class="flex-parent form-section">
        <label class="flex-child" for="verse">Verse</label>
        <input type="text" class="flex-child" v-model="verse" placeholder="16" />
      </div>
      <div class="flex-parent form-section">
        <label class="flex-child" for="content">Content</label>
        <textarea class="flex-child" v-model="content" placeholder="For God so loved the world..." rows="4" />
      </div>
      <div class="float-parent form-section">
        <button class="float-right" type="submit">ADD</button>
      </div>
    </form>
    <p class="error-msg" v-if="errorMsg != ''">{{ errorMsg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Add',
    data() {
      return {
        book: '',
        chapter: '',
        verse: '',
        content: '',
        errorMsg: ''
      }
    },
    computed: {
      scriptures() {
        return this.$root.$data.scriptures;
      }
    },
    methods: {
      add() {


        const newScripture = {
          id: this.book.toLowerCase() + '-' + this.chapter + '-' + this.verse,
          book: this.book,
          chapter: this.chapter,
          verse: this.verse,
          content: this.content
        }

        // Check for duplicate by id
        const alreadyExists = this.$root.$data.scriptures.some((scripture) => scripture.id === newScripture.id);
        
        
        if (alreadyExists) {
          this.errorMsg = "You already added that scripture.  Try a new verse.";
        } else {
          this.$root.$data.scriptures.push(newScripture);

          this.errorMsg = '';
          this.book = '';
          this.chapter = '';
          this.verse = '';
          this.content = '';
        }
      }
    },
    watch: {
      book() {
        this.errorMsg = '';
      },
      chapter() {
        this.errorMsg = '';
      },
      verse() {
        this.errorMsg = '';
      }
    }
  };
</script>

<style scoped>
  .error-msg {
    color: red;
    text-align: center;
    padding: 1rem;
  }

  .add-form {
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 1rem;
    min-width: 300px;
    max-width: 50%;
    margin: auto;
  }

  .form-section {
    padding: 0.5rem 0;
  }

  .float-parent {
    overflow: hidden;
  }

  .float-right {
    float: right;
  }
</style>
