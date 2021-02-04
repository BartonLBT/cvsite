// console.log("Hello Everyone")

// const add = function (x) {
//     const result = x + x
//     return result
// }

// const resultOfAddition = add(2)
// console.log(resultOfAddition)

/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

// const area = function (l1, l2) {
// const rectangleArea = l1*l2
//  return rectangleArea
// }

// const areaOfRectangle = area (4, 2,)
// console.log(areaOfRectangle) //yay!

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/



// const crazysum = function  (x , y,) {
//     const resultAdded = x+y

//     if (x===y) {
//         const resultMultiplied = x*y
//         return resultMultiplied
//     }
//     else {
//         return resultAdded
//     }
// } 

// const answerMultiplied = crazysum (2, 3,)
// const answerAdded = crazysum (8,8)
// console.log(answerAdded)
// console.log(answerMultiplied)


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

// const y = 19

// const CrazyDiff= function ( x, y,) {
//    const answerDifference = x/y
//     return answerDifference
//    if(x>y) {
//        const answerTripleDifference = (x/y)*3
//        return answerTripleDifference
//    }
// }

// const answerDifference = CrazyDiff (1, y)
// const answerTripleDifference = CrazyDiff (20, y)
// console.log(answerDifference)
// console.log(answerTripleDifference)



/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/



// const boundary =  (n) => {
//     // if(n>=20 && n<=100 || n===100) {
//     //     return true
//     // } 
//     //     return false
    
//     return n>=20 && n<=100 || n===400 ? true :false
   
// }
// const result = boundary(50)
// const result2 = boundary(400)
// const result3 = boundary(10)
// console.log(result, result2, result3)

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

// const strivify = () => {
//      return string = "Strive" || ("")   
//     }

//     const result= strivify("")
//     console.log(result)

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

// const check3and7= (Number) => {
//     return Number*3 || Number*7 ? true ("This is a Multiple") :false ("This is NOT a Multiple")
// }

// const result=check3and7(6)
// console.log(result)


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/



// const reverseString= (String) => {
//     const stringToReverse=(String)
//     reverseString(stringToReverse)    
//     return result
// }

// const result=reverseString("Help me!")
// console.log=(result)


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/