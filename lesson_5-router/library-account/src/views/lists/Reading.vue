<template>
  Reading
  <div v-for="book in finishedBooks " :key="book.id">
    <h2>{{ book.title }}</h2>
    <router-link :to="{ name: 'Book', params: { id: book.id } }">Открыть</router-link>
  </div>
  <router-view></router-view>
  <!-- <router-link to="/lists/Reading/book/23">Книга 23</router-link>
        <router-link to="/lists/Reading/book/24">Книга 24</router-link> -->
  <!-- пусть маршрута с name Book -->
  <!-- <router-link :to="{ name: 'Book', params: { id: 24 } }">Книга 24</router-link>
  <router-view></router-view> -->
</template>

<script>

// import { computed } from 'vue';
import { mapGetters } from 'vuex';
export default {
  // eslint-disable-next-line
  name: "Reading", // finishedBooks прочитанные книги 
  computed: {
    ...mapGetters(['finishedBooks'])
  }
}
</script>

<style scoped></style>