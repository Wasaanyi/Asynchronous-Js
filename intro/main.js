// Important browser apis that live on the window object
// console.log, setTimeout/interval, fetch, geolocation

// regular functions review
// function greet(){
//     console.log('hi');
// }

// const greet = () => console.log('hi');
//greet()

// const greet2 = () => {
//     console.log('hello');
//     return 5+5;
// }
//console.log(greet2());

// using arrow function defaults 'this' to the window object
// const obj = {
//     obj2: {
//         test: () => {console.log(this);}
//     }
// }
//obj.obj2.test(); // returns window object

// const array = [5,6,7,8,9,19, true, 'hi', false, {obj:true}]

// for loop
// alot of flexibility like changing starting value and reversing
// for (let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// for of Loop
// only gives access to the values only
// exchanges functionality for simplicity
// not that much needed always use a regular for loop
// for (const value of array){
//     console.log(value);
// }


//...........................................................................
// working with call back functions

// function findTotal(item1, item2){
//     return item1 + item2;
// }

// function totalWithTaxes(a,b){
//     return findTotal(a,b) * 1.8;
// }

// console.log(totalWithTaxes(1,9));


// const arr = [1,2,3]
// const numberSquared = arr.map( val => {
//     return val * val
// }); 

// console.log(numberSquared);

//...........................................................................
// Basic object manipulations
// properties - key: value pairs
// only looped with for - in loops
// building block of js

// method is a function in an object
// const obj = {
//     name: 'james',
//     age: 28,
//     greet: function () {
//         console.log('hello');
//     }
// }

// // . notation reference
// for (const key in obj){
//     // . notation reference
//     console.log(obj.name);

//     // bracket notation
//     console.log(`${key} :`,obj[key]);
// }

// // alternatively
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// // use in to find if something exist
// console.log('name in obj','name' in obj);
// console.log('has name property',obj.hasOwnProperty('name'));


//...........................................................................
// map and filter

// const arr = [2,3,4,5,6,7,8,9,10]

// const copy = arr.map(val=>val**2)
// console.log(copy);

// // filter
// const evens = arr.filter(val=> val % 2 === 0);
// console.log('evens',evens);

// const odds = arr.filter(val=> val % 2 === 0);
// console.log('odds',odds);


//............................................................................
// synchronous js
// loads line by line
// console.log('start');

// window.confirm('yes or no')

// if (confirm){
//     window.alert('yay')
// }else{
//     window.alert('Nay')
// }

// console.log('hi');

//.............................................................................
// Asynchronous means while we wait for user to something, let us be running
// something else.
// const intervalID = setInterval(myCallBack, 1000)

// const counter = document.querySelector('.counter')

// function myCallBack (){
//     counter.textContent = Number(counter.textContent) + 1;
// }

// console.log('Hello');
// console.log('done!');

/*
When you have asynchronous with synchronous the asynchronous only runs 
after all the synchrous has been run
e.g.
    the counter above only starts incrementing after all 
    the console.log() are done!
*/

//.........................................................................
// SOME callbacks are async, such as addEventListener & setTimeOut/Interval
// SOMe callbacks are NOT async, such as map, filter

// asynchronous example

// const myH1 = document.querySelector('h1')

// myH1.addEventListener('click',()=>{
//     console.log('clicked');
// })

// console.log('end!');

// const arr2 = [1,2,3,4,5]

// arr2.map(function(value){
//     setTimeout(function(){
//         console.log(value)
//     },2000)
// })



// synchronous example

// const arr = [1,2,3,4,5]

// console.log('begin!');
// arr.map(function(value){
//     console.log(value);
// })
// console.log('end!')


//.............................................................................
// promise.finally will run no matter if the promise was rejected or resolved
// use finally for individual promise, use Promise.all/allSettled for multiple promises

// const pizzaIsGood = true

// const myPromise = new Promise((resolve, reject) => {
//     if (pizzaIsGood) {
//         resolve('Yay')
//     }else{
//         reject('woooow')
//     }
// })

// // resolve action
// myPromise.then(msg => console.log('yay'))

// // reject action
// myPromise.catch(msg => console.log('wowowowow'))

// // default action
// // always keep .finally last
// myPromise.finally(msg => console.log('byeee!'))


//.............................................................................
// async and wait
// first example
// adding the async keyword before the function makes it asynchronous

// async function add (a, b) {
//     console.log(a + b)
//     return a + b
// }

// console.log(add(3,2));


// another example 
// using async await

// const delayedPromise = new Promise(resolve => setTimeout(() => resolve('resoleved in 2 secs'),2000))

// async function waitingForPromise() {
//     await delayedPromise
//     console.log(delayedPromise);
// }

// waitingForPromise()


// using async await with fetch
// async function waitingForFetch(){
//     await fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(result => result.json()) // string to array
//         .then(data => console.log(data)) // log array
// }

// waitingForFetch()


//............................................................................
// Fetch Api
// window.fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))

// second argument of the fetch 'options'
// getting request for resources from the server
const optionsObject = {
    method: 'GET',
}

window.fetch('https://jsonplaceholder.typicode.com/posts', optionsObject)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) // runs incase something goes wrong and returns error

// posts something to the server
const optionsObjectPost = {
    method: 'POST',
    body: {
        id: '',
        title: 'Sample'
    }
}

// PUT - when you want to update 
const optionsObjectPut = {
    method: 'PUT',
    body: {
        damage: 'currentDamage'
    }
}