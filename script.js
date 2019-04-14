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
    return promises.map(async prom => {
        try {
            return await prom;
        } catch (e) {
            return e;
        }
    });
};

// promiseAll(myPromises);
console.log(promiseAll(myPromises));
// promiseAll(myPromises).then(values => console.log(values));