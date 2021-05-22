/*let count = true;
let countValue = new Promise(function (resolve, reject) {
if (count) {
resolve("promise resolved");
} else {
reject("promise rejected");
}
});
console.log(countValue); */
// returns a promise
/*let countValue = new Promise(function (resolve, reject) {
resolve("Promise has been resolved");
});
// executes when promise is resolved successfully
countValue
.then(function successValue(result) {
console.log(result);
})
.then(function successValue1() {
console.log("Multiple functions can be called.");
}); */
// returns a promise
/*let countValue = new Promise(function (resolve, reject) {
resolve('Promise accepted');
});
// executes when promise is resolved successfully
countValue.then(
function successValue(result) {
console.log(result);
},
)
// executes if there is an error
.catch(
function errorValue(result) {
console.log(result);
}
); */
// returns a promise
/*let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected
    resolve('Promise resolved');
    });
    // add other blocks of code
    countValue.finally(
    function greet() {
    console.log('This code is executed.');
    }
    );*/

    //NC
    // multiple promises in a array 
/*const promise1 = new Promise((resolve, reject) => {
    resolve("promise resolved successfully.");
  });
const promise2 = new Promise((resolve, reject) => {
  resolve("promise accepted.");
});

Promise.all([promise1, promise2]).then((values) => {
  console.log(values);
}); */

/*const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'promise accepted');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'resolved successfully');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});
*/
