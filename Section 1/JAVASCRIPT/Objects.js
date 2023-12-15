const user = {
    name : 'ramu',
    email : 'ramu@gmail.com',
    rollno : 234
};

console.log(user.email);
console.log(user.name);
console.log(user['name']);

user.address = 'Lucknow'
user.rollno = 1234;

console.log(user);
 
 const smartphone = {
    brand : 'Samesung',
    model : 'M34',
    price : 1999,
    colors:['black', 'grey', 'blue']
 };

 console.log(smartphone.model);
 console.log(smartphone.colors[1]);

 const smartphoneList = [
       { 
        brand : 'Samesung',
        model : 'M34',
        price : 1999,
        colors:['black', 'grey', 'blue']

    }
 ];

 console.log(smartphoneList[0]);

 smartphoneList[0].model = 's22';
 console.log(smartphoneList);




