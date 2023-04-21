<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  props: { pages: Array },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li v-for="page in pages" class="page-item">
        <button
          type="button"
          class="page-link"
          :class="{
            disabled: !page.url,
            active: page.active,
          }"
          v-html="page.label"
          @click="$emit('changePage', page.url)"
        ></button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
