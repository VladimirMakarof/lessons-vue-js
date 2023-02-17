<template>
  <nav :style="{ backgroundColor: background }">
    <router-link :to="tab.path" v-for="tab in tabs" :key="tab.path">
      {{ tab.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'LibraryHeader',
  props: {
    background: String,
    tabs: Array
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

<style scoped> .router-link-active {
   /* стили активной вкладки */
   background-color: orangered;
 }
</style>
