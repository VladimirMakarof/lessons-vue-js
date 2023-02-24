<template>
  <div>{{ $route.params.id }}</div>
  <h2>{{ book.title.toUpperCase() }}</h2>
  <div>
    <img :src="book.img">
  </div>
  <p>{{ book.description }}</p>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: "Book",
  computed: {
    book() {
      return this.$store.getters.bookById(parseInt(this.$route.params.id))
    }
  }
}
</script>

<style scoped></style>