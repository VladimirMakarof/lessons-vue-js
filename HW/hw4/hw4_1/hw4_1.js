'use strict';
console.log("object");
let articles = [
    {
        "name": "Коты",
        "img": "https://www.zaks.ru/f/2020/Decembre/SN/25393427_original.jpg"
    },
    {
        "name": "Собаки",
        "img": "https://spitz-sobaka.ru/wp-content/uploads/2019/02/glavnye-otlichiya-mezhdu-nemetskim-i-pomeranskim-shpitsem.jpg"
    },
    {
        "name": "Ленивцы",
        "img": "https://animalreader.ru/wp-content/uploads/2018/12/image.jpg"
    }
];

Vue.createApp({
    data() {
        return {
            allArticles: articles,
            search: "",
        }
    },
    computed: {
        searchArticle() {
            return this.allArticles.filter(({ name }) => name.toUpperCase().includes(this.search.toUpperCase()));
        }
    }
}).mount("#app");
