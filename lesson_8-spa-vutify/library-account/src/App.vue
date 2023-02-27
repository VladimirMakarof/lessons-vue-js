<template>
  <library-header :background="background" :tabs="tabs"></library-header>
  <!--  3 пункт -->
  <div>
    <!-- router-view это то место куда будет подружен компонент при переходе по ссылке-->
    <router-view></router-view>
  </div>
</template>



<script>
import LibraryHeader from './components/LibraryHeader.vue'; //1 пункт 
export default {
  components: { LibraryHeader }, // 2 пункт 
  data() {
    return {
      tabs: [
        {
          name: 'Поделиться книгой', path: '/share'
        },
        {
          name: 'Списки', path: '/lists'
        },
      ],
      background: "yellow"
    }
  }
}
</script>




<style>
#app {
  color: #2c3e50;
}
</style>