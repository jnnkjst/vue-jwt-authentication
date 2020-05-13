<template>
  <form>
    <label for="token">Token</label>
    <input id="token" v-model="token" />
    <button v-on:click="login">Login</button>
  </form>
</template>

<script>
import store from "../store";
import router from "../router";

export default {
  store,
  data: function() {
    return { token: "" };
  },
  methods: {
    login: async function() {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: this.token }),
      });
      const responseJson = await response.json();
      store.commit("login", await responseJson.token);
      router.push({ path: "home" });
    },
  },
};
</script>
