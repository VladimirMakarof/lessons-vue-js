<template>
  <!-- Если изображение  находиться в assets, статическое изображение подключение через src-->
  <img src="../assets/logo.png" alt="лого">
  <!-- из App.vue файла -->
  <!-- Если изображение  находиться в assets, подключение через v-bind:src-->
  <img :src="require('@/assets/' + logo)">
  <!-- Если изображение  находиться в public, подключение через v-bind:src-->
  <img :src="`${publicPath}${logo}`">
</template>
<script>
export default {
  name: 'Images',
  data() {
    return {
      logo: 'logo.png',
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
<style scoped></style>