import { createApp } from 'vue' //  нам нужна функция createApp из vue (библиотека) что находиться в node_modules
import App from './App.vue' // импортируем компонент с названием App из файла ./App.vue и на основе него создаём приложение все остальные компоненты хранятся в папке с компонентами (header, footer bodу всё в папке с компонентами)после эти компоненты могут вкладываться друг в друга и в итоге все передаются во vue которое передаёт на страницу html
import router from './router' // 
import store from './store' // vuex импортируется а после экспортируется use(store)

createApp(App).use(store).use(router).mount('#app') // функция createApp - создаёт объект приложения корневой, в эту функцию передаём App
