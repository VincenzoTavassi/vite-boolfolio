<script>
import axios, { Axios } from "axios";
import ProjectCard from "./ProjectCard.vue";
import Pagination from "./Pagination.vue";

export default {
  data() {
    return {
      projects: [],
      pages: [],
    };
  },

  methods: {
    fetchProjects(endpoint = null) {
      console.log(endpoint);
      if (!endpoint) endpoint = "http://localhost:8000/api/projects";
      axios.get(endpoint).then((response) => {
        this.projects = response.data.projects.data;
        this.pages = response.data.projects.links;
      });
    },
  },
  components: { ProjectCard, Pagination },
  emits: ["changePage"],
  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="row row-cols-3">
    <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
  </div>
  <Pagination :pages="pages" @changePage="fetchProjects" />
</template>

<style lang="scss" scoped></style>
