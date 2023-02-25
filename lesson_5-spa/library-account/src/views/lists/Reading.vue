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

  name: "ReadingBook", // finishedBooks прочитанные книги 
  computed: { // вычисляемы свойства 
    ...mapGetters(['finishedBooks'])
  },
  created() { // вызывается автоматически при создание объекта компонента, created() обращение к action  
    // в методе created() нельзя обращаться к html тк DOM ещё не отрисован, но можно обращаться к серверу для подгрузки данных 
    this.$store.dispatch('loadData') // dispatch() - это метод объекта "Store", который используется для вызова actions/ loadData - это имя мутации
  }
}
</script>

<style scoped></style>