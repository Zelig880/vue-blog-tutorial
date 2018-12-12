<template>
  <div class="article">
    <img src="./../assets/logo.png" />
    <h1>{{ title }}</h1>
    <p v-if="showingSnippets">{{ snippets }}</p>
    <p v-else>{{ value }}</p>
    <button v-on:click="toggleArticle">{{ buttonText }}</button>
    <button v-on:click="likes++;">Likes: {{ likes }}</button>
    <button v-on:click="toggleHighContrast">Toggle High Contrast</button>
  </div>
</template>

<script>
import Accessibility from "../mixins/Accessibility.js";
export default {
  props: {
    title: String,
    value: {
      type: String,
      required: true
    },
    snippetsLength: {
      type: Number,
      required: false,
      default: 20
    }
  },
  data() {
    return {
      likes: 0,
      showingSnippets: true
    };
  },
  computed: {
    snippets() {
      const fullArticle = this.value;
      const articleSnippets = fullArticle.substring(0, this.snippetsLength);

      return `${articleSnippets}...`;
    },
    buttonText() {
      return this.showingSnippets ? "Show full article" : "Show snippets";
    }
  },
  methods: {
    toggleArticle() {
      this.showingSnippets = !this.showingSnippets;
    }
  },
  mixins: [Accessibility]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.article {
  width: 95%;
  padding: 15px;
}
.article img {
  margin-top: 15px;
  width: 50px;
  float: left;
}
.article button {
  padding: 5px 10px;
  margin-right: 5px;
}
</style>
