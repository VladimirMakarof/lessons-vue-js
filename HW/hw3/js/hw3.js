'use strict';

Vue.createApp({
    data(){
        return {
            genres: [
                {id: 1, name: "Жанр 1"},
                {id: 2, name: "Жанр 2"},
                {id: 3, name: "Жанр 3"},
            ],
            formData: {
                genres: [3],
                title: "",
                pagecount: "",
                age: [2,4],
                read: "no",
            },
        }
    },
    methods: {
        addRequest(event){
            event.target.reset();
            console.log(this.formData);
        }
    }
}).mount("#app");