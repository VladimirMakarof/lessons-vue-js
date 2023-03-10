'use strict'
let books = [
  {
    title: "Колобок",
    description: "Сказка, знакомая каждому взрослому, придется по душе и маленьким детям. " +
      "Они быстро учат простые слова песенки Колобка и с удовольствием подпевают родителям.",
    img: "https://picsum.photos/seed/picsum/200/300",
    inList: false,
  },
  {
    title: "Репка",
    description: "Репка — русская народная сказка, которая знакома каждому ребенку с малых лет. " +
      "«Репка» имеет цепочные действия, ясные даже малышу, поэтому можно читать сказку с раннего возраста.",
    img: "https://picsum.photos/seed/picsum/200/300",
    inList: false,
  },
  {
    title: "Три медведя",
    description: "Народная сказка с английскими корнями, знакомая каждая ребёнку с детства. " +
      "В ней говорится о приключениях девочки, которая пошла в лес, заблудилась и набрела на дом трёх медведей.",
    img: "https://picsum.photos/seed/picsum/200/300",
    inList: false,
  },
  {
    title: "Красная шапочка",
    description: "В ней показана жизнь простой девочки, Красной Шапочки. " +
      "Однажды ее бабушка заболела, и внучка отправилась ее навестить по наказу матери.",
    img: "https://picsum.photos/seed/picsum/200/300",
    inList: false,
  },
];
let app = Vue.createApp({ // создаём объект vue
  data() { // метод data возвращает объект со свойствами за которыми нужно следить, в случае изменений он сам меняется, после виртуальный дом и после уже html (состояние div контейнера)
    return {
      currentTab: 'Все книги',
      tabs: ['Все книги', 'Мой список книг'],
      allBooks: books,
      myList: []
    }
  },
  computed: { // вычисляемые свойства
    sortedMyList() { // вычисляемые свойства будут пересчитываться когда измениться значение myList (свойство из объекта data)
      // если в вычисляемых свойствах не будет обращения к свойствам из объекта data или значения не изменяются, то свойства пересчитываться не будут 
      return this.myList.sort((b1, b2) => {
        return b2.date.getTime() - b1.date.getTime();
      })
    }
  },
  methods: { // все методы которые должны сработать при наступление каких либо событий описываются в разделе methods
    addToMyList(book) {
      book.inList = true;
      book.date = new Date();
      this.myList.push(book);
    },

    deleteFromMyList(book, i) {
      book.inList = false;
      this.myList.splice(i, 1);
    }

  }
})

app.mount('#app') // соединяем vue c html (#app) \\ метод mount возвращает корневой объект приложения в котором будут данные из data 

