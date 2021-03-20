<template>
  <div class="add">
    <h1>Add New Scripture</h1>
    <form class="add-form" @submit.prevent="add">
    <label for="book">Book</label>
    <input type="text" id="book" v-model="book" placeholder="Book" />
    <br>
    <label for="chapter">Chapter</label>
    <input type="text" id="chapter" v-model="chapter" placeholder="Chapter" />
    <br>
    <label for="verse">Verse</label>
    <input type="text"  id="verse" v-model="verse" placeholder="Verse" />
    <br>
    <label for="content">Content</label>
    <textarea  id="content" v-model="content" placeholder="Content" />
    <button type="submit">Add</button>
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
  }
</style>
