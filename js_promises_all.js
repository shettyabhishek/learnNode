console.log("------------------------------------------------------------------------");
console.log("------------------------------------------------------------------------");
console.log("-------------------------- Working with Promise all error handling (All promises handled with single then and catch) ----------------------------");
const prm1 = new Promise((resolve,reject) => {
    resolve('This promise is resolved - prm1');
});
const prm2 = new Promise((resolve,reject) => {
    reject('This promise has failed - prm2');
});
const prm3 = new Promise((resolve,reject) => {
    resolve('This promise is resolved - prm3');
});
Promise.all([prm1,prm2]).then((res) => {
    console.log(res);
}).catch((err) => console.log(err));

console.log("-------------------------- Working with Promise all error handling (Individual promises handled with single then and catch) ----------------------------");
const prm4 = new Promise((resolve,reject) => {
    resolve('This promise is resolved - prm4');
});
const prm5 = new Promise((resolve,reject) => {
    reject('This promise has failed - prm5');
});
const prm6 = new Promise((resolve,reject) => {
    reject('This promise has failed - prm6');
});
Promise.all([
    prm4.then((res4)=>console.log(res4)).catch((err4)=>console.log(err4)),
    prm5.then((res5)=>console.log(res5)).catch((err5)=>console.log(err5)),
    prm6
]).then(unhandledRes => console.log('unhandled success promise response'))
.catch(unhandledErr => console.log('unhandled failed promise response :- ',unhandledErr))