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

// let i = 0;





// while (true) {
//     document.write(`hello ${i} <br>`);

// }


// do {
//     document.write(` ${i} <br>`);
//     i++;
//     }
//  while (i < 10);



// let j = true

// for(; true; j++){
//     document.write(`${j} <br>`)
// }










// for(i=0; i<100; i++){
//     if(i%2===1){
//         document.write(`${i} <br>`)
     
//     }
//     if(i == '22'){
//         document.write(`${i} <br>`)
//     }
// }







// for(i=0; i<100; i++){
//     if(i != 3){
//         document.write(`${i} <br>`)
//     }
// }


// let i = prompt('enter starting number')
// let k = prompt('enter ending number')



// for(i=1; i<=k; i+=10){

//     // document.write(`outerloop: ${i} <br>`)

//     for(j=i; j<i+10; j++){
//         document.write(` ${j} `)
//     }
//     document.write(`<br>`)
// }




// for(i=1; i<=5; i++){

//     for(j=1; j<=i; j++){
//         document.write(`${i}`)
//     }

//     document.write('<br>')

// }








// let a = 10;


// let b;

// b = a;

// console.log(b)
// console.log(a)



// b = 30;

// console.log(a)
// console.log(b)





// let products = ['Headphone','Earphones','Keyboard','Mouse',9000,3.4,true,false,null,undefined,NaN]

// let products2;



// products2 = products



// console.log(`Products 1: ${products}`)
// console.log(`Products 2: ${products2}`)





// products2 = [300,434,9000,89]



// products2.push('hello','World',808098)


// products2.pop()






// delete products2[2]





// console.log(products2)












// document.write(products)
// document.write(products2)

// console.log(a)


// a= 20


// console.log(a)


// console.log(products)




// products[4] = 5000

// console.log(products)





// document.write(products)

// console.log(products[0])




// for(i=0; i<products.length; i++){
//     console.log(products[i])
//     document.write(products[i] + '<br>')
    
// }







// 2,3,5


// .push(4)


// 2,3,5,4


// .unshift(1)

// 2,3,5,4

















// let arrays = [2,3,5,'hello',4,9,4,'hello',7,8]


// console.log(arrays)


// arrays.push(9000)

// console.log(arrays)


// arrays.pop()     //delete end values


// console.log(arrays)




// arrays.unshift(1)
// console.log(arrays)



// arrays.shift(1)      //delete first values
// console.log(arrays)
// document.write(arrays.pop())


// delete arrays[1]


// console.log(arrays)
// document.write(arrays)


// arrays[1] = 45
// arrays[2] = 25


// console.log(arrays)





// let b = arrays.slice(0,4)

// console.log(b)



// arrays.splice(2,4,'hello')
// console.log(arrays)








// console.log(arrays.indexOf('hello'))
// console.log(arrays.lastIndexOf('hello'))



// let c = 3;

// let d = c
// console.log(c)
// console.log(d)


//  d= 9;





// console.log(c)
// console.log(d)






// let a = [1,2,3,4,5]



// let b = [...a]    //cloning


// console.log(`before change a: ${a}`)
// console.log(`before change b: ${b}`)



// b[2] = 'hello'

// console.log(`after change a: ${a}`)
// console.log(`after change b: ${b}`)





// let a = [2,3,5,9,77,8,99,76]



// let b = a.slice(1,4)



// console.log(b)

// a.splice(2,4, 'hello','bye','hi')



// console.log(a)






   


// let num1 = 23;


// let num2 = num1;




// console.log(num1)
// console.log(num2)





// num2 = 90;




// console.log(num1)
// console.log(num2)






// let arrays = [3,4,6,7]



// let copy = arrays;



// console.log('arrays: ' + arrays)
// console.log('copy: ' + copy)





// copy[0] = 'hello'


// console.log('arrays second: ' + arrays)
// console.log('copy second: ' + copy)

 

// let arrays1 = [2,3,4]
// let arrays2 = [5,6,7]
// let arrays3 = [8,9,0]
// let arrays3 = ['hello','how are', 'you?']





// let a = arrays1.concat(arrays2,arrays3)

// console.log(a)


// let a = arrays3.join('-')

// console.log(a)








