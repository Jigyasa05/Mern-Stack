function addNums(a,b){
   var  c = a+b;
     console.log(c);
}

addNums(5,6);

//console.log(c);

// uisng assignment operator
const getpercentage = function(m1, m2, m3, m4, m5){
    const percentage = (m1+m2+m3+m4+m5)/5;

    // console.log(percentage);
    console.log(percentage);
};

const ans = getpercentage(45, 67, 89, 90, 78);
console.log(ans);





// using arrow function

const factorial = (n) => {
    let fact = 1;
    for(let i=2; i<=n; i++){
        fact *=i;
        // fact = fact*i;
    };

    return fact;
}
 
let result = factorial(7);
console.log(result);

 const newFunction = factorial;

 console.log(newFunction(5));

 const permutation = (n, r, fact_function) => {
    let ans = fact_function(n)/fact_function(n-r);
    console.log('Permutation is :',ans);

}

permutation(10, 3, factorial);
    

