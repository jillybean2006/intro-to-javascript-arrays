

const foods = [];  

console.log('Exercise 1 result:', foods);
foods = [];
foods.push("pizza");
foods.push("cheeseburger");

console.log('Exercise 2 result:', foods);
foods.unshift("taco");

console.log('Exercise 3 result:', foods);

const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

foods.splice(1,1, "tofu");
console.log('Exercise 5 result:', foods);

foods.splice(foods.indexOf("pizza"), 1, "sushi", "cupcake");
console.log('Exercise 6 result:', foods);

let yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);


let soyIdx = foods.indexOf("tofu");
console.log('Exercise 8 result:', soyIdx);

let allFoods = foods.join("->");
console.log('Exercise 9 result:', allFoods);

let hasSoup = foods.includes("soup");
console.log('Exercise 10 result:', hasSoup);

let odds = [];
num.forEach.(function(num) {
  if (num % 2 !== 0) {
    odds.push(num);
  }
});
console.log('Exercise 11 result:', odds);


const frizz = [];
const buzz [];
const fizzBuzz = [];
num.forEach.(function(num) {
    if (num % 3 === 0) {
        frizz.push(num);
        } 
        if (num % 5 === 0) {
            buzz.push(num);
        } 
        if (num % 3 === 0 && num % 5 === 0) {
            fizzBuzz.push(num);
        }
});
console.log('Exercise 12 result:', frizz, buzz, fizzBuzz);


const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [71, 81, 90]        
];
const numLs = numArrays[numArrays.length - 1];
console.log('Exercise 13 result:', numLs);



const num = numArrays[2][1];
console.log('Exercise 14 result:', num);


let total = 0;
numArrays.forEach(innerArray => {
    innerArray.forEach(number => {
        total += num;
    });

});
console.log('Exercise 15 result:', total);











