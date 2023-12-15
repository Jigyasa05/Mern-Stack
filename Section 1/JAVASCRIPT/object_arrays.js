const smartphoneList = [
    {
      brand: "Samsung",
      model: "M34",
      price: 19999,
      colors: ["black", "grey", "blue"],
    },
    {
      brand: "Vivo",
      model: "z14",
      price: 33000,
      colors: ["blue", "black"],
    },
    {
      brand: "OnePlus",
      model: "nord c3",
      price: 25000,
      colors: ["white", "yellow", 'green'],
    },
    {
      brand: "OnePlus",
      model: "11",
      price: 70000,
      colors: ["blue", "red", 'white'],
    },
    {
      brand: "Samsung",
      model: "s23",
      price: 89000,
      colors: ["white", "grey"],
    },
];

smartphoneList[2].colors[1] = 'red';

console.log(smartphoneList[2]);

const models = smartphoneList.map( ( obj ) => { return obj.model } );
console.log(models);

const budgetPhones = smartphoneList.filter( ( phone ) => { return phone.price<30000 } );

console.log(budgetPhones);

// console.log( ['a', 'boy', 'c', 'd'].includes('b') );

const whitePhones = smartphoneList.filter( (phone) => { return phone.colors.includes('white') } )

console.log(whitePhones);

const search = 'OnePlus';

const searchResult = smartphoneList.filter((phone) => { return phone.brand === search });

console.log(searchResult);

const userLists = [
    {
        name : 'ramu',
        email : 'ramu@gmail.com',
        password : '12djsh',
        address: 'Lucknow'
    },
    {
        name : 'raju',
        email : 'ramu@gmail.com',
        password : 'miow908',
        address: 'Delhi'
    },
    {
        name : 'shamu',
        email : 'shamu@yahoo.com',
        password : '12djsh',
        address: 'Lucknow'
    },
    {
        name : 'kaliya',
        email : 'kaliya@yahoo.com',
        password : 'n83h78',
        address: 'Delhi'
    },
];

// find users with ramu@mail.com
// find user who live in delhi
// get an array of all the emails
// get user who have yahoo mail account






const user = userLists.filter((e) => {return e.email === "ramu@gmail.com"});
console.log(user);

const count = userLists.filter( (a) => { return a.address === " dehli"});
console.log(count);

const get = userLists.map( (r) => {return r.email });
console.log(get);


 const yahoo = userLists.filter( (y) => {return y.email });
 console.log(yahoo);






