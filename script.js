const promiseA = Promise.resolve(3);
const promiseB = new Promise((res, rej) => {
    setTimeout(() => {
        res('foo');         //res/rej
    }, 100);
});
const promiseC = 42;
const myPromises = [promiseA,  promiseB, promiseC];

console.log(Promise.all(myPromises));
// Promise.all(myPromises).then((values) => console.log(values));



const promiseAll = function(promises) {
    return new Promise((resolve, reject) => {
        const arr = [];

        promises.forEach(async prom => {
            try {
                arr.push(await prom);
                resolve(arr);
            } catch (e) {
                reject(e);
            }
        });
    })
};

// promiseAll(myPromises);
console.log(promiseAll(myPromises));
// promiseAll(myPromises).then(values => console.log(values));