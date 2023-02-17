import { createRouter, createWebHistory } from 'vue-router' // мы импортируем функцию createRouter и createWebHistory из библиотеки vue-router которая находиться в node_modules
// const routes = [{ в данном случае загрузка компонента будет в любом случае вне зависимости от запроса, которые важные страницы
//   path: '/',
//   name: 'Home',
//   component: HTMLModElement}
// ]


const routes = [ // массив с маршрутами, каждый маршрут записывается отдельным объектом 
  {
    path: '/share', // что будет отображаться в адресной строке браузера 
    component: () => import('../views/Share.vue') // мы указываем какой компонент должен обрисоваться по переходе по данной ссылке, это ленивая загрузка компонентов (компонент будет подружен только тогда когда запросят)
  },
  {
    path: '/lists',
    component: () => import('../views/Lists.vue')
  }
]

const router = createRouter({ // функция createRouter позволяет создать объект роутер что бы все переходы работали, нужен всегда, принимает на вход объект 
  history: createWebHistory(process.env.BASE_URL), // режим в котором работает роутер 
  routes // массив с маршрутами 
})

export default router
