const nums = [2, 6, 23, 37, 9, 18];

for(let n of nums){
    if(n%2 === 0){
    console.log(n);
   }
};
console.log('----------------');

nums.forEach( (n) => { if(n%2 !==0) console.log(n);});

// create a new array that constains the square of all elements

const newArr = nums.map( (n)=> { return n**2});

console.log(newArr);





// filter
const evens = nums.filter( (a) =>{ return a%2 === 0 }) 

console.log(evens);

const prices = [2300, 150, 1300, 800, 300, 600, 750];
// price should be less than 1000 and greater than 500


const newPrices = prices. filter( (P) => { return P>500 && P<1000 });

console.log(newPrices);

const mails = ['mmm@ahoo.com','abs@gail.com','xyz@gmail.com',"jjj@hotmail.com"];

// console.log('triplem@gmail.com' .includes('m') );

// WAP to filter email with gmail domain
const gmail = mails.filter( (m) => { return m.includes('gmail') } );

console.log(gmail);

const discounted = prices.map( (P)  => { return P*0.8} );

console.log(discounted);




