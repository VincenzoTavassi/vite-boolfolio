<script>
import AppNavbar from "./components/AppNavbar.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  data() {
    return {
      title: "Lista progetti",
    };
  },

  components: { AppNavbar, ProjectList },
};
</script>

<template>
  <header>
    <AppNavbar></AppNavbar>
  </header>
  <main class="container">
    <h1 class="my-4">{{ title }}</h1>
    <ProjectList />
  </main>
</template>

<style lang="scss" scoped></style>
