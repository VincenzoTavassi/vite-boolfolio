<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },
  props: { project: Object },
};
</script>

<template>
  <div class="col my-2">
    <div class="card h-100">
      <img
        :src="project.image ? project.image : project.link"
        class="card-img-top"
        :alt="project.title"
      />
      <div class="card-body d-flex flex-column align-items-center">
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
        <RouterLink
          class="btn btn-dark btn-sm mt-auto"
          :to="{ name: 'project-details', params: { id: project.id } }"
          >Dettagli</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
