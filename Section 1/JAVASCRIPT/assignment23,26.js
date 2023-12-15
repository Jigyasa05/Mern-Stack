//JavaScript Questions
// 1. WAP to check if a number is perfect square.

const num = 36;
const sqrt = num ** 0.5;
if(sqrt%1 === 0){
    console.log( num + ' is a perfect square');
}

// 2. WAP to check if a number is prime.

const num1 = 79;
let prime = true;

for(let i=2; i<num1**0.5; i++){
    if(num1 % i === 0){
        prime = false;
        console.log('not prime');
        break;
    }
}



if(prime) console.log('prime');

// 3. WAP to print Fibonacci series.

let [a, b] = [0, 2];
// process.stdout.write('');
console.log(a);
console.log(b);
for(let i=0;i<8;i++){
    let c = a+b;
    console.log(c);
    [a, b] = [b, c];
}
console.log('---------------------');

// 4. WAP to print all number divisible 7 and 11 in range of 400 - 1200

for(let i=400; i<=1200; i++){
    if(i%7 === 0 && i%11 === 0){
        console.log(i);
    }
}

// 5. WAP to get sum of all numbers from 1 to 100.

let sum = 0;

for(let i=1; i<=100; i++){
    sum+=i;
    // sum = sum+i;
}

console.log(sum);

//Today's task : 
//1. WAP to check is a number is palindrome.
                                     

//2. WAP to reverse a number.
//3. WAP to check if a number Armstrong.
//4. WAP to print all prime numbers in range of 100 to 2000.
//5. WAP to print all perfect squares from 10 - 200.


