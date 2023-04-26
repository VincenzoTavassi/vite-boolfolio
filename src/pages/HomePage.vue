<script>
import ProjectList from "../components/ProjectList.vue";

export default {
  data() {
    return {
      title: "Lista Progetti",
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <h1 class="my-4">{{ title }}</h1>
  <ProjectList />
</template>

<style lang="scss" scoped></style>
