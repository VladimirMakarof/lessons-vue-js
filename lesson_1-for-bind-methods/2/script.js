'use strict'

let app = Vue.createApp({ // создание экземпляра, createApp вернет экземпляр vue после мы его соединяем с контейнером 
  data() {
    return { // через этот объект vue будет следить состоянием свойств этого объекта и если нам нужно будет что либо выводить в html то это будет из этого объекта, либо вычитаемые свойства
      title: 'подробнее о статье',
      book: {
        title: 'vue js',
        author: 'junior developer',
        otherAuthors: ["junior1", "junior2"],
        img: 'https://picsum.photos/id/237/200/300'
      }
    }
  }
})

// фильтры (методы) для распространённых задач (будут доступны всем компонентам vue)
app.config.globalProperties.$customFilters = {
  firstToUpper(word) {
    if (!word) return ''
    word = word.toString().toLowerCase()
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
} // записываются те методы которые будут нужны на все страницах приложения

let vm = app.mount('#app') // это и его связующе звено между html и js, mount - вернет корневой элемент приложения, это объект внутри которого буду свойства из (data() {return ... ) а так же глобальные методы (globalProperties)

