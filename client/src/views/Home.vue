<template>
  <div class="home">
    <h1>Home</h1>
    <button v-on:click="logout">logout</button>
  </div>
</template>

<script>
import store from "../store";
import router from "../router";

export default {
  name: "Home",
  components: {},
  methods: {
    logout: function() {
      store.commit("logout");
      router.push("/");
    },
  },
};
</script>
