// promise это длинный код выполняющийся асинхронно и мы не знаем когда он завершиться
// объявление promise

let promise = new Promise(function (resolve, reject) { // новый объект типа Promise, в конструктор передаём функцию // самая эта function принимает на выход ещё 2 функции resolve (функция в случае успешного разрешения) и reject (если неудача)
    setTimeout(() => { // мы не знаем сколько займёт функция, и будет выполняться асинхронна 
        let data = Math.random();
        if (data < 0.5) {
            resolve(`Код выполнился ${data}`); // когда вызывается функция в неё можно передать данные 
        } else {
            reject(`Выполнение привело к ошибке ${data}`)
        }
    }, Math.floor(Math.random() * 20000))
}); // как только promise создан он сразу начинает выполняться, и его не нужно вызывать 
console.log(promise)

// использование promise
promise
    .then((successData) => { // у promise есть метод then, принимает на выход функцию. эта так функция которая будет вызвана в случае завершения успехом         
        console.log(`SUCCESS ${successData}`);
        return { info: successData } // если функция передана в метод then возвращает результат, то эти данные можем получить при последующем вызове then 
    })
    .then((returnData) => { // returnData будет объект { info: successData }
        console.log(returnData);
    })
    .catch((errorData) => { // у promise есть метод catch. эта так функция которая будет вызвана в случае завершения не успехом 
        console.log(`ERROR ${errorData}`)
    });

function getPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (Math.random() < 0.5) resolve("Код выполнился");
            else reject("Код не выполнился")
        }, Math.floor(5000))
    });
}

async function getResult() { // async перед функцией, позволяет использовать await внутри функции, это нужно для того что бы интрепритатор могу выполнять другие функции 
    let result = await getPromise(); // результат выполнения функции getPromise мы получим в переменную result, await (ожидание выполнения функции)
    console.log(result);
    return result;
}

getResult();
getResult().then((data) => {
    console.log("data " + data);
});


