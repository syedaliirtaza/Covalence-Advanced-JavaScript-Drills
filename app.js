// name = 'irtaza';
// var name;
// console.log(name);

// here due to hoisting effect var was hoisted in top 
//now if we change the keyword to let

// name = 'irtaza';
// let name;
// console.log(name);

// it will give ref error because let doesn't hoisted at the top 
// so at that moment of time we can't access name before initiallization

// setName();
// function setName(){
//     var name = 'irtaza';
//     console.log(name);
// }

// here function is also hoisted to the top that is way it doesn't give us any error 

// console.log('text');
// let avg = findAvg(2,2);
// console.log('some text', avg);
// function findAvg(a,b){
//     console.log('in text');
//     var ans = (a+b)/2;
//     return ans;
// }

// let fruits = ['apple','mango','banana'];
// let favFruit;
// function printFruits(){
    // if we write let here then fav fruit will be undefined 
    // because its in a local scope 
//      let favFruit = fruits[2];
//     console.log(fruits[0]);
// }

// function printFavFruit(){
//     console.log(favFruit);
// }
// printFruits();
// printFavFruit();

//Nest the printFavFruit function inside of the printFruits function.

let fruits = ['apple','mango','banana'];
let favFruit;
let leastFav;
function printFruits(){
    
     let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit(){
        console.log(favFruit);
        let leastFav = fruits[1];
    }
    console.log(leastFav);
    printFavFruit();
}
myFunc();
function myFunc(){
    console.log('hello');
}
printFruits();


let yourFunc = function(){
    alert('hello');
}
yourFunc();
