<template>
  <div>Выберите интересующий Вас раздел</div>
  <library-header :tabs="tabs" background="#bdbdbd" size="25px"></library-header>
  <router-view></router-view>
</template>

<script>
import LibraryHeader from '@/components/LibraryHeader.vue';
export default { // это объект компонента vue 

  name: "ListsBook",  // имя компонента, обычно соответствует имени файла/ имя нужно для использования компонента в других компонентах 
  // вложенное меню будет в списках
  components: { LibraryHeader },
  data() {
    return {
      tabs: [ // если у этого компонента будут вложенные маршруты, то все ссылки должны начинаться с основой ссылки(родительский), как мы попали на этот компонент 
        { name: 'Читаю', path: '/lists/reading' },
        { name: 'Прочитанные', path: '/lists/finished' },
        { name: 'Поделился', path: '/lists/shared' },
      ]
    }
  }
}
</script>

<style scoped> /* scoped данные стили будут доступны только этому template */
</style>
