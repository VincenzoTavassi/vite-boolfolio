<script>
import AppNavbar from "./components/AppNavbar.vue";

export default {
  data() {
    return {
      title: "Lista progetti",
    };
  },

  components: { AppNavbar },
};
</script>

<template>
  <header>
    <AppNavbar></AppNavbar>
  </header>
  <main class="container">
    <RouterView></RouterView>
  </main>
</template>

<style lang="scss" scoped></style>
