<script>
import axios, { Axios } from "axios";
import ProjectCard from "./ProjectCard.vue";
import Pagination from "./Pagination.vue";

export default {
  data() {
    return {
      projects: [],
      pages: [],
      isLoading: false,
    };
  },

  methods: {
    fetchProjects(endpoint = null) {
      this.isLoading = true;
      if (!endpoint) endpoint = "http://localhost:8000/api/projects";
      axios
        .get(endpoint)
        .then((response) => {
          this.projects = response.data.projects.data;
          this.pages = response.data.projects.links;
        })
        .finally(() => {
          this.isLoading = false;
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
  <AppLoader v-if="isLoading" />
  <div v-else>
    <div class="d-flex justify-content-end">
      <Pagination :pages="pages" @changePage="fetchProjects" />
    </div>
    <div class="row row-cols-3">
      <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
    </div>
    <Pagination :pages="pages" @changePage="fetchProjects" />
  </div>
</template>

<style lang="scss" scoped></style>
