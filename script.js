// var a = 56;

// var a = 67;



// console.log(a)

// let b = 56;

// b = 67;

// console.log(b)


// console.log(4 + 8)



// let userName = 'Afaz'






// document.write(userName)




// let userName = prompt('Enter your name')
// let lastName = prompt('Enter your last name')

// document.write(userName +" "+ lastName)


// let num1 = prompt('Enter number 1')
// let num2 = prompt('Enter number 2')


// let convertedNumber = num1;

// let convertedNumber2 = Number(num2)

// document.write(parseInt(num1) + parseInt(num2))
// document.write(convertedNumber + convertedNumber2)

// console.log(num1 * num2)

// console.log(parseInt(num1) + parseInt(num2))


// confirm('jkjfsdkajfksd')








// unary


// let a = 5;

// a = a+1;


// console.log(a)


// binary

// 2 + 3 =




// let userName = prompt('Enter your user name');
// let password = prompt('Enter your password');


// if(userName === 'abc123'){
//     alert('you have successfully login')
// }else if(password === '321'){
//     alert('unsuccessfull login')  
// }

// alert('hfdshkj')







// let a = prompt('Enter something')
// let b = prompt('Enter something')

// console.log(Number(a) + parseInt(b))









// falsy values


// 1 ------ true 
// 0 ------ false










// let  a = prompt('enter a number');









// if(document.all){
//     console.log('truth values')
//     // a = 0
// }else{
//     console.log('false values')
// }






// comparision operator



// = ----> not data type 9 ---> '9'
// === ----> data type '9' -----> '9'
// !=  ------> 10 ------> 9 ------> true 





// let age = prompt('Enter your age')




// if(age >= 18){
//     console.log('you are eligible')
// }else{
//     console.log('you are not eligible')
// }

// ternary operator



// let b = age >=18 ? console.log('you are eligible') : console.log('you are not eligible')





// Logical Operator



// Logical AND operator

// &&

// - - ----> +

// flase && false -------> false

// flase && true -------> false

// true && true --------> true

// true && false -------> false



// logical OR

// ||

// true || true -------> true
// flase || true -------> true
// true || false --------> true
// flase || false --------> false


// not operator

// !


// !true ----------> false
// !false ---------> true




// if(false || false){
//     console.log('true')
// }else{
//     console.log('false')
// }



// let userName = prompt('Enter your user Name')
// let password = prompt('Enter your Password')

// if((userName === 'abc' || userName ===  '778') && password === '1234'){
//     console.log('You are succesfully Login')
// }else{
//     console.log('Unvalid user Name or Password')

// }



// let v = ((userName === 'abc' || userName ===  '778') && password === '1234') ? console.log('You are succesfully Login') : console.log('Unsuccesfully Login')





// if(percentage >= 90 && percentage <=100){
//     console.log('A1')
// }else if(percentage >= 80 && percentage < 90){
    //     console.log('A+')
    // }else if(percentage >= 70 && percentage < 80){
        //     console.log('A')
        // }else if(percentage >= 60 && percentage < 70){
            //     console.log('B')
            // }else if(percentage >= 50 && percentage < 60){
                //     console.log('C')
                // }else if(percentage >= 40 && percentage < 50){
                    //     console.log('D')
                    // }else if(percentage < 40){
//     console.log('F')
// }else{
//     console.log('Kindly enter valid percentage')
// }









// let percentage = prompt('Enter your Percentage')
// let grade;

// // let remarks = prompt('Enter your Remarks')

// if(percentage >= 70 && percentage <= 100){
//     if(percentage >= 90){
//         grade = 'A1'
//         console.log(grade)
        
//     }else if(percentage >= 80){
//         grade = 'A+'
//         console.log(grade)
//     }else if(percentage >= 70){
//         grade = 'A'
//         console.log(grade)
//     }
// }else if(percentage >= 60 && percentage < 70){
//     grade = 'B'
//     console.log(grade)
// }else if(percentage >= 50 && percentage < 60){
//     grade = 'C'
//     console.log(grade)
// }else if(percentage >= 40 && percentage < 50){
//     grade = 'D'
//     console.log(grade)
// }else if(percentage < 40){
//     grade = 'F'
//     console.log(grade)
// }else{
//     console.log('Kindly enter valid percentage')
// }



//     switch (grade) {
//             case 'A1':
//                 console.log('Congratulation your Grade is A1 and you are Pass')
//                 break;
//             case 'A+':
//                 console.log('Congratulation your Grade is A+ and you are Pass')
//                 break;
//             case 'A':
//                 console.log('Congratulation your Grade is A and you are Pass')
//                 break;
//             case 'B':
//                 console.log('Congratulation your Grade is B and you are Pass')
//                 break;
//             case 'C':
//                 console.log('Congratulation your Grade is C and you are Pass')
//                 break;
//             case 'D':
//                 console.log('Congratulation your Grade is D and you are Passk')
//                 break;
//             case 'F':
//                 console.log('Sorry your Grade is F and you are Fail')
//                 break;
//             default:
//                 console.log('Kindly Enter valid grade')
//                 break;
//         }






// let days = prompt('Enter your day')





// switch (days) {
//     case 'Monday':
//         console.log('First Day of the week')
//         break;
//     case 'Tuesday':
//         console.log('Second Day of the week')
//         break;
//     case 'Wednesday':
//         console.log('Third Day of the week')
//         break;
//     case 'Thursday':
//         console.log('Fourth Day of the week')
//         break;
//     case 'Friday':
//         console.log('Fifth Day of the week')
//         break;
//     case 'Saturday':
//         console.log('Sixth Day of the week')
//         break;
//     case 'Sunday':
//         console.log('Seventh Day of the week')
//         break;
//     default:
//         console.log('kindly enter valid day name')
//         break;
// }

let i = 0;

// while (i <= 10) {
//     document.write(`hello ${i} <br>`);
//     i++
// }


do {
    document.write(` ${i} <br>`);
    i++;
    }
 while (i < 10);
