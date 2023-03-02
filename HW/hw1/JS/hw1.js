'use strict';

let cats = [
    {
        "name": "Люся",
        "age": "1 год",
        "color": "трехцветная",
        "img": "https://topspb.tv/media/768x432/news_covers/ermit_eu41VUl.jpg",
        "additional_info": {"vaccinations": true, "passport": true}
    },
    {
        "name": "Том",
        "age": "3 месяца",
        "color": "белый",
        "img": "https://vokrugsveta.ua/wp-content/uploads/2019/03/shutterstock_1111071638.jpg",
        "additional_info": {"vaccinations": false, "passport": false}
    },
    {
        "name": "Макс",
        "age": 2,
        "color": "серый",
        "img": "https://cdn24.img.ria.ru/images/151546/28/1515462835_0:0:1036:587_600x0_80_0_0_a75f922e8b052d966122e1c9dc40feb4.jpg",
        "additional_info": {"vaccinations": false, "passport": true}
    },
    {
        "name": "Василий",
        "age": 3,
        "color": "черный",
        "img": "https://www.ugorizont.ru/wp-content/uploads/sites/39/2017/02/AIV_3968.jpg",
        "additional_info": {"vaccinations": true, "passport": true}
    }
];

let app = Vue.createApp({
    data() {
        return {
            allCats: cats,
        };
    }
});

app.mount("#app");