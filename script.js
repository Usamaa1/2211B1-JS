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



let percentage = prompt('Enter your Percentage')


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











if(percentage >= 70 && percentage <= 100){
    if(percentage >= 90){
        console.log('A1')
    }else if(percentage >= 80){
        console.log('A+')
    }else if(percentage >= 70){
        console.log('A')
    }
}else if(percentage >= 60 && percentage < 70){
        console.log('B')
    }else if(percentage >= 50 && percentage < 60){
        console.log('C')
    }else if(percentage >= 40 && percentage < 50){
        console.log('D')
    }else if(percentage < 40){
        console.log('F')
    }else{
        console.log('Kindly enter valid percentage')
    }