<template>
  <nav :style="{ backgroundColor: background }">
    <router-link :to="tab.path" v-for="tab in tabs" :key="tab.path" :style="{ fontSize: size }">
      {{ tab.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'LibraryHeader',
  props: {
    background: String,
    tabs: Array,
    size: String,
  },
  data() {
    return {
      // данные компонента
    }
  },
  computed: {
    // вычисляемые свойства компонента
  },
  methods: {
    // методы компонента
  },
  mounted() {
    // логика, которая выполняется после монтирования компонента
  },
  watch: {
    // отслеживание изменений свойств и данных компонента
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
}

nav a {
  flex: 1;
  text-decoration: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}

.router-link-active {
  /* стили активной вкладки */
  background-color: orangered;
}
</style>
