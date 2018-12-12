<template>
  <div id="MainContent">
    <articleContainer
      v-for="(item, index) in Posts"
      :key="index"
      v-bind="item"
    />
    <button v-on:click="toggleHighContrast">Toggle Contrast</button>
  </div>
</template>

<script>
import articleContainer from "./article.vue";
import Accessibility from "../mixins/Accessibility.js";
import FakePosts from "../data/posts.js";

export default {
  data: function() {
    return {
      Posts: []
    };
  },
  methods: {
    fakeApiCall() {
      //here we are emulating the possibility to load the value with an api
      this.Posts = FakePosts;
    }
  },
  components: {
    articleContainer
  },
  mounted() {
    this.fakeApiCall();
  },
  mixins: [Accessibility]
};
</script>

<style>
#MainContent {
  text-align: left;
  padding: 20px;
}
</style>
