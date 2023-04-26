<script>
import axios from "axios";

export default {
  data() {
    return {
      project: "",
      isLoading: false,
    };
  },
  methods: {
    fetchProject() {
      this.isLoading = true;
      axios
        .get(`http://localhost:8000/api/projects/${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data);
          this.project = response.data;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.fetchProject();
  },
};
</script>

<template>
  <AppLoader v-if="isLoading" />
  <div v-else>
    <div class="col my-2">
      <div class="card">
        <div class="d-flex card-body">
          <div class="d-flex flex-column justify-content-center">
            <h5 class="card-title">{{ project.title }}</h5>
            <p>
              <strong>Tipo: </strong>
              <span v-html="project.type.badge"></span>
            </p>

            <p class="card-text">{{ project.description }}</p>
            <p>
              <strong>Tecnologie: </strong>
              <span
                v-for="technology in project.technologies"
                v-html="technology.badge + ' '"
              ></span>
            </p>
          </div>
          <img
            :src="project.image ? project.image : project.link"
            class="w-50 me-3"
            :alt="project.title"
          />
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <RouterLink class="btn btn-dark btn-sm" :to="{ name: 'home' }"
        >Torna alla Home</RouterLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
