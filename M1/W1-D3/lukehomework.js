/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

/*
let myfirstarray=[ 1, 2, 3, 4, 5]
console.log(myfirstarray)
*/

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/


// let userluke = {
//     name: "Luke",
//     surname: "Titterington",
//     email: "bartonlbt@gmail.com",
//     age: 32
// }



/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

// userluke.hasdrivinglicense = true


/* EXERCISE 4
Remove from the previously created object the age property.
*/

// delete userluke.age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

// let userluke2 = {
//     name: "Luke",
//     surname: "Titterington",
//     email: "bartonlbt@gmail.com",
//     age: 32
// }

// console.log(userluke)
// console.log(userluke2)

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/

// let totalShoppingCart = 60
// let shipping = 10
// let totalCost = 1

// if (totalShoppingCart < 50){
//     totalCost= totalShoppingCart + shipping
// } else {
//     totalCost= totalShoppingCart
// }


/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

//let blackfriday = totalCost - (totalCost*20/100)
//console.log(blackfriday)

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

// const myCar = {
//     brand: "Toyota",
//     model: "IQ",
//     licencePlate: "GL59 FFY",
// }

// let car1 = Object.assign({}, myCar,);
// car1.licencePlate = "YG62 HDS"

// let car2 = Object.assign({}, myCar,);
// car2.licencePlate = "LS82 JSA"

// let car3 = Object.assign({}, myCar,);
// car3.licencePlate = "KD80 LDU"

// let car4 = Object.assign({}, myCar,);
// car4.licencePlate = "EA53 ISY"

// let car5 = Object.assign({}, myCar,);
// car5.licencePlate = "JG63 MCY"

// console.log(car1)
// console.log(car2)
// console.log(car3)
// console.log(car4)
// console.log(car5)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

// const carsForRent = [car1, car2, car3, car4, car5]


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

// carsForRent.shift
// carsForRent.pop

// console.log(carsForRent)


/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/