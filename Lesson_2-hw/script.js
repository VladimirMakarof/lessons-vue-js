'use strict'

var app = new Vue({ // var app = new Vue({ ... }); создает новый объект Vue и связывает его с элементом DOM с идентификатором app с помощью свойства el
  el: '#app',
  data: { // data - это объект, который содержит все данные, используемые в приложении, в том числе список товаров goods и корзину cart.
    goods: [
      {
        title: "Пианино",
        price: 3000,
        count: 25
      },
      {
        title: "Гитара",
        price: 1200,
        count: 40
      },
      {
        title: "Барабаны",
        price: 2700,
        count: 12
      },
      {
        title: "Флейта",
        price: 900,
        count: 50
      },
      {
        title: "Арфа",
        price: 3400,
        count: 5
      }
    ],
    cart: []
  },
  computed: { // computed - это свойство, которое предоставляет вычисляемые значения на основе данных в data. В этом примере используется sortedGoods, который возвращает отсортированный список товаров по убыванию количества.
    sortedGoods: function () {
      return this.goods.sort((a, b) => b.count - a.count);
    }
  },
  methods: { // methods - это свойство, которое содержит методы, которые можно вызывать в приложении. В этом примере это addToCart, который уменьшает количество товара на единицу и добавляет его в корзину, если количество товара больше нуля.
    addToCart: function (good) {
      if (good.count > 0) {
        good.count--;
        this.cart.push(good);
      }
    }
  }
});
