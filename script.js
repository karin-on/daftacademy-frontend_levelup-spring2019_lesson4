const promiseA = Promise.resolve(3);
const promiseB = new Promise((res, rej) => {
    setTimeout(() => {
        res('foo');         //res/rej
    }, 100);
});
const promiseC = 42;
const myPromises = [promiseA,  promiseB, promiseC];

// console.log(Promise.all(myPromises));
// Promise.all(myPromises).then((values) => console.log(values));
Promise.all([]).then(values => console.log(values));
Promise.all([1, 2, 3]).then(values => console.log(values));



const promiseAll = function(promises) {
    console.log(promises.length);
    return new Promise((resolve, reject) => {
        const arr = [];

        if (!promises.length) {
            resolve([]);
        }

        promises.forEach(async (prom, i) => {
            try {
                arr[i] = await prom;
                // console.log(i);
                resolve(arr);
            } catch (e) {
                reject(e);
            }
        });
    });
};

// promiseAll(myPromises);
// console.log(promiseAll(myPromises));
// promiseAll(myPromises).then(values => console.log(values));
promiseAll([]).then(values => console.log(values));
// promiseAll([1, 2, 3]).then(values => console.log(values));
