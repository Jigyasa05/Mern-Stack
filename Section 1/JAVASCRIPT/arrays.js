let myarr = [7634, 'hello', true, console.log, 45.67];
console.log( myarr);

console.log(typeof(myarr));
console.log(Array.isArray(myarr));

const fruits = ['apple', 'grapes', 'kiwi','orange','fig'];
console.log(fruits.length);

// indexing
console.log(fruits[2]);
console.log(fruits.indexOf('mango'));

console.log(fruits.flat(-3));

// slicing
console.log(fruits.slice(2,5));
console.log(fruits.slice(2,1000));
console.log(fruits.slice(2,));
console.log(fruits.slice(1,-3));

// adding elements
fruits.push('banana'); // adds at the end of array
fruits.unshift('papaya'); // adds at the bigining of array

console.log(fruits);

// replacing elements
fruits[2] = "cherry";
console.log(fruits);

//removing elements
fruits.pop(); //removing last elements
fruits.shift(); //removing first elements

console.log(fruits);
// splice parameters - starting index, no. of elments to remove
fruits.splice(2,2); // removing elements

console.log(fruits);

fruits. splice(1,2,'tomato', 'berry'); //replacing elements

console.log(fruits);


// Also using in string
// indexing - []
// slicing - slice()
// length 


