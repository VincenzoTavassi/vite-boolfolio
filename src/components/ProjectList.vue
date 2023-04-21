<script>
import axios, { Axios } from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {
      projects: [],
      pages: [],
    };
  },

  methods: {
    fetchProjects() {
      axios.get("http://localhost:8000/api/projects").then((response) => {
        this.projects = response.data.projects.data;
        this.pages = response.data.projects.links;
      });
    },
  },
  components: { ProjectCard },
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="row row-cols-3">
    <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
  </div>
</template>

<style lang="scss" scoped></style>
