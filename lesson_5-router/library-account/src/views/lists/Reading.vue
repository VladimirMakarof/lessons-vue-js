<template>
  Reading
  <!-- <router-link to="/lists/Reading/book/23">Книга 23</router-link>
        <router-link to="/lists/Reading/book/24">Книга 24</router-link> -->
  <!-- пусть маршрута с name Book -->
  <router-link :to="{ name: 'Book', params: { id: 24 } }">Книга 24</router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "ReadingList"
}
</script>

<style scoped></style>