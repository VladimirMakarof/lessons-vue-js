// import { json } from 'express';
import { createStore } from 'vuex'

export default createStore({
  state: { // хранятся данные к которые будут обращаться разные компоненты
    shared: [], // книги которыми поделился пользователь 
    usersBook: [],
    userBook: [
      {
        id: 1,
        title: "Shadow pink ghosts kill screen",
        description: "She learned that water bottles are no longer just to hold liquid, but they're also status symbols. Arcade cabinets retro Melon dots maza Pac-Man chase red Namco fruit wocka paku-paku 1980. I hear that Nancy is very pretty.",
        img: "https://picsum.photos/200/300?random=1",
        genre: "Жанр 1",
        finished: false
      },
      {
        id: 2,
        title: "Shadow dots strawberry",
        description: "Shadow pink ghosts kill screen yellow disk video game maze console power up dots Midway. Ambusher maze wocka wocka fruit Pac-Man Fever arcade Galaxian Boss power up intermission. He had a hidden stash underneath the floorboards in the back room of the house. Shadow dots strawberry Pac-Man Midway chaser Pinky kill screen. Pac-Man Namco Toru Iwatani Pac-Man Fever maze dots. ",
        img: "https://picsum.photos/200/300?random=2",
        genre: "Жанр 2",
        finished: false
      },
      {
        id: 3,
        title: "She learned that water bottles ",
        description: "Pellets flash Midway chaser Pinky cherry Puck Man ghosts. She learned that water bottles are no longer just to hold liquid, but they're also status symbols. Apple Speedy maze wocka wocka flash chase Pakkuman paku-paku dots pizza missing slice. He had a hidden stash underneath the floorboards in the back room of the house.",
        img: "https://picsum.photos/200/300?random=3",
        genre: "Жанр 2",
        finished: false
      },
      {
        id: 4,
        title: "Orange fickle blue guy maze chase. ",
        description: "Son't put peanut butter on the dog's nose. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. She learned that water bottles are no longer just to hold liquid, but they're also status symbols. The beauty of the sunset was obscured by the industrial cranes. She had the gift of being able to paint songs. ",
        img: "https://picsum.photos/200/300?random=4",
        genre: "Жанр 2",
        finished: false
      },
      {
        id: 5,
        title: "She learned that water bottles are no longer just to hold liquid",
        description: "They're also status symbols. High score Feigned Ignorance maze lives video game Apple slow guy chaser pizza missing slice dots blue. Apple Speedy maze wocka wocka flash chase Pakkuman paku-paku dots pizza missing slice. I hear that Nancy is very pretty. The external scars tell only part of the story. Pac-Man Inky bashfull orange dots blue enemies ghosts Toru Iwatani Puck Man power up. I think I will buy the red car, or I will lease the blue one. Flying fish few by the space station. Don't put peanut butter on the dog's nose.",
        img: "https://picsum.photos/200/300?random=5",
        genre: "Жанр 1",
        finished: false
      },
      {
        id: 6,
        title: "The old apple revels in its authority",
        description: "Clyde blue enemies flash dots wocka maze monsters ghosts red chaser. Flying fish few by the space station. He hated that he loved what she hated about hate. I hear that Nancy is very pretty. He found his art never progressed when he literally used his sweat and tears. Ghosts dots cherry Blinky Pac-Man Power Pellets fruit. Patricia loves the sound of nails strongly pressed against the chalkboard. He was willing to find the depths of the rabbit hole in order to be with her.",
        img: "https://picsum.photos/200/300?random=6",
        genre: "Жанр 1",
        finished: true
      }
    ]
  },
  getters: { // отфильтрованные данные state
    finishedBooks(state) {// в любой метод getters первым аргументом передаётся state, вторым геттер
      return state.userBook.filter(book => book.finished)
    },
    finishedBooksCount(state, getters) {
      return getters.finishedBooks.length
    },
    // bookById(){}
    // bookById: function() {}
    bookById: state => (id) => { // (id) функция принимает на вход все денные которые мы хотим передать 
      return state.userBook.filter(book => book.id == id)[0];
    }
  },
  mutations: { // содержать методы позволяющие изменять состояния хранилища, данные которые меняют состояние внутри state
    // в мутации не должно быть асинхронных методов 
    // получение данных с сервера в мутации писать не нужно 
    shareBook(state, book) { // при вызове любого метода из мутации, первым аргументом будет передаваться объект state
      state.shared.push(book)
    },
    markRead(state, index) {
      state.userBook[index].finished = true
    },
    addToUserBook(state, books) {
      for (let i = 0; i < books.length; i++) {
        state.userBook.push(books[i])
      }
    }
  },
  actions: { // любые асинхронные события что связаны с сервером прописываются в action 
    loadData(context) { // первым аргументом принимает объект контекста, через объект контексты мы получаем доступ к мутациям и геттерам и самому state
      fetch('http://localhost:8080/userbooks') // для отправки запросов на сервер, первым аргументом куда отправляем запрос 
        .then(response => response.json()) // сервер вернёт ответ мы сможем получить в объекте - response 2 метода text() для текста либо block() для картинок
        .then(jsonData => context.commit('addTpUserBook', jsonData))
    }
  },
  // modules: {
  // }
})
