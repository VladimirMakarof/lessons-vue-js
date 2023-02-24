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
    component: () => import('../views/Lists.vue'),
    children: [
      { // когда добавляем маршруты к дочерним компонентам, то пишем имя маршрута без / 
        path: 'reading', // в router-link  /lists/reading
        component: () => import('../views/lists/Reading.vue'),
        children: [{
          name: 'Book',
          path: 'book/:id',
          component: () => import('../views/lists/Book.vue')
        }
        ]
      },
      { // когда добавляем маршруты к дочерним компонентам, то пишем имя маршрута без / 
        path: 'finished', // в router-link  /lists/reading
        component: () => import('../views/lists/Finished.vue')
      },
      { // когда добавляем маршруты к дочерним компонентам, то пишем имя маршрута без / 
        path: 'shared', // в router-link  /lists/reading
        component: () => import('../views/lists/Shared.vue')
      }
    ],
  },
  {
    // если нужно прописать маршрут для обработки 404 страницы маршрут будет записываться в таком виде '/:patchMatch(.*)*'
    path: '/:patchMatch(.*)*',
    redirect: '/404'
    // component: () => import('../views/NotFound.vue')
  }, {
    path: '/404',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({ // функция createRouter позволяет создать объект роутер что бы все переходы работали, нужен всегда, принимает на вход объект 
  history: createWebHistory(process.env.BASE_URL), // режим в котором работает роутер 
  routes // массив с маршрутами 
})

export default router
// вложенный маршрут, внутри компонента есть ссылка на другой компонент 