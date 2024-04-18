//  1. Create a function that iterates through an array and return the sum of all elements.
//я хз, вот в одну строку могу так , но без обьявления переменной с последующим возвратом как итог я непонимаю *_*  как посчитать и вывести результат
//прочел комент , не создавай переменную с присвоеным 0 и последующим возвращением
// тоесть мой ответ должен выглядеть arr.forEach(и тут чтото просто волшебное что даст мне сумму масива) ----это такой вопрос к тебе

//как заставить этот метод дать такой результат как дал reduce я не понимаю да еще и нельзя обьявить переменную в которую я бы сложил элемент массива  , может я както не так понял условия

// let digitArray = [1,2,3,4,5];
// const sumElements = anyArray => { let sum = 0; anyArray.forEach(num => sum += num); return sum; }
// console.log(sumElements(digitArray));
// console.log(digitArray);


///////////////////////////////////////////////////////////////////////////////////

// 2. Do the same using .reduce()

// const arr = [ 1,2,3,4,5];
// function sumElements(anyArray){
//   return anyArray.reduce((acum , item)=> acum+=item)
// }
// console.log(sumElements(arr));

///////////////////////////////////////////////////////////////////////////////////

// 3. Create a function that returns the maximum value in the array.

// const arr = [1,2,3,4,5];

// function maxValue(anyArray){

//   return Math.max(eval(anyArray.join(',')));
// }
// console.log(maxValue(arr));

///////////////////////////////////////////////////////////////////////////////////

// 4. Create a function returns the number of elements in the array.

// const arr= [0,1,2,3,4,5,6,7,8,9,10,11];
// function amountElements(anyArray){
//   return anyArray.length;
// }
// console.log(amountElements(arr));

///////////////////////////////////////////////////////////////////////////////////

// 5. Create a function returns the index of a value in the array.
// const arr = [1,2,3,4,5];
// function valIndex(anyArray,value){
// return anyArray.indexOf(value);
// }
// console.log(valIndex(arr, 5));

///////////////////////////////////////////////////////////////////////////////////

// 6. Create a function that returns a new array with every element in the array multiplied by two.
// const arr = [1,2,3,4,5];
// function multiplyArray(anyArray){
//   return anyArray.map(item=>item*2);
 
// }
// console.log(multiplyArray(arr));
///////////////////////////////////////////////////////////////////////////////////

// 7. Create a function returns a new array with only the even elements from the original array.
// const arr= [0,1,2,3,4,5,6,7,8,9,10,11];
// function evenELments(anyArray){
//  return anyArray.filter(item=> item%2===0 ? item:null)
// }
// console.log(evenELments(arr));


///////////////////////////////////////////////////////////////////////////////////

// 8. Create a function that returns a new array with only the elements from the original array that have a length greater than a specified value.

// const arr= [1,2,3,4,5,6,7,8,9,10];
// function greaterLengthElemArray(anyArray, value){
//   return anyArray.filter(item => item>value? item: null)
// }
// console.log(greaterLengthElemArray(arr, 1));











// 1. Create a program that takes an array as an argument and returns a new array with all duplicate elements removed.
// const arr = [1,2,4,4,5,2,1,5,67,7];
// function uniqArrayElements(anyArray){
//   let newArr=[];
//   for(let element of anyArray){
//     if(!newArr.includes(element)) newArr.push(element);
//   }

//   return newArr;

// }
// console.log(uniqArrayElements(arr));

///////////////////////////////////////////////////////////////////////////////////

// 2. Create a program to determine if an array contains a given value.
// const arr = [9,6,43,'petya', 'egor',1,2,3,4,5,6,7]
// function detectOfElements(anyArray, value){
//   return anyArray.includes(value);

// }
// console.log(detectOfElements(arr, 6));
///////////////////////////////////////////////////////////////////////////////////

// 3. Create a program to sort an array in ascending or descending order.

// let arr= [ 1,2,3,6,9,90,2,1,34,5,89,]
// function acendingArr(anyArray,a){
  
//   if(a==='ascending')return anyArray.sort((a,b) => a-b); 
//   if(a==='descending') return anyArray.sort((a,b) => b-a); 
//   else return 'Enter array and sort type(ascending or descending)'
// }
// console.log(acendingArr(arr,ascending));

///////////////////////////////////////////////////////////////////////////////////

// 4. Create a program to reverse an array.
// первое что пришло в голову , знаю что он медленный изза переназначения индексов
// вроде можно было unshift использовать но он насколько помню долгий(всмысле переназначение индексов занимает время)
// const arr= [1,2,3,4,5,6,7,8,9,10];
// function greaterLengthElemArray(anyArray){
//     const newArr= [];
//    for(let i=anyArray.length-1; i>=0; i--){
//      newArr.push(anyArray[i]);
//    }
//   return newArr;
// }
// console.log(greaterLengthElemArray(arr));

///////////////////////////////////////////////////////////////////////////////////

// 5. Create a program to perform a linear search on an array.


// const arr= [1,2,3,4,5,6,7,8,9,10,5];
// function greaterLengthElemArray(anyArray ,value){
//   for (let i = 0 ; i < anyArray.length; i++){
//     if(value === anyArray[i]) return anyArray.indexOf(anyArray[i])
    
//   }
//   return 'Not exist';
// }
// console.log(greaterLengthElemArray(arr, 3))



///////////////////////////////////////////////////////////////////////////////////

// 6. Create a constructor function and use it to create 3 instances of the same object.
// function UserInfo(name, surname , age){
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }

// const userJohn = new UserInfo('John' , 'Smith' , 19);
// const userBoris = new UserInfo('Boris' , 'Bybkin' , 27);
// const userDavid = new UserInfo('David' , 'Colins' , 43);
// console.log(userJohn);
// console.log(userBoris);
// console.log(userDavid);
///////////////////////////////////////////////////////////////////////////////////








// 1. Create a function that checks if an object is empty.

// const user ={};
// const user2 = {
//   name: 'Andrei'
// };

// function checkEmpty(obj){
// if(Object.keys(obj).length == 0) console.log('Обьект пуст');
// else console.log('Обьект не пуст')
// }
// console.log(checkEmpty(user));
// console.log(checkEmpty(user2));
///////////////////////////////////////////////////////////////////////////////////


// 2. Create and call a function that returns the longest property name of an object.
// const nameList = {
//   name: 'Vasiliy',
//   surname: 'Cvirko',
//   nickName: 'BoogieMan199934959'
// }

// function longestNameProp(obj){
//  let nameProperties= (Object.keys(obj)); 
// //  если нужно по длинне значения свойств let nameProperties= (Object.values(obj)); 
//  nameProperties.sort((a,b) => b.length-a.length);
//  return nameProperties[0]
//  }
 

// console.log(longestNameProp(nameList))

///////////////////////////////////////////////////////////////////////////////////


// 3. Write a function that checks if two objects have the same number of properties.
// const user1 ={
//   name: 'Mira',
//   age: 25,
// }
// const user2 ={ 
//   name: 'Fern',
//   age: 23,
//   surname: 'Maang'
// }

// function numOfProp(obj , obj2){
//   const value1 = Object.keys(obj);
//   const value2 = Object.keys(obj2);
//   (value1.length== value2.length)? console.log('Equal'):console.log ('Not equal');
  

// }
// numOfProp(user1 , user2)

///////////////////////////////////////////////////////////////////////////////////


// 4. Create a function that converts an array to an object.


// вот я и попался , а как раз в первой пачке комментов обсуждалось)


// const names = [ 'petya', 'vasya', 'kolya', 'uri',];
// function convert(anyArray){
//      return {...anyArray};
// };
// console.log(convert(names));

///////////////////////////////////////////////////////////////////////////////////


// 5. Write a function that checks if a value is a valid key for an object.
// эксперементальное решение , опциональной цепочкой особо не пользовался
// const c = {}
// const name ={}
// const user= {
//   name: 'victor',
//   age:30,
//   car: 'none',
//   c: 'nadeus eto to chto nado'
// }

// function checkKey(obj,key){
// return obj?.[key] ? 'valid': 'invalid'
// }
// console.log(checkKey(user, 'c'))



///////////////////////////////////////////////////////////////////////////////////


// 6. Create a function that counts the number of properties in an object.

// const user= {
//   name: 'victor',
//   age:30,
//   car: 'none',
// }
// function numOfProp(obj){
//   return Object.values(obj).length
// }
// console.log(numOfProp(user))

///////////////////////////////////////////////////////////////////////////////////


// 7. Create a function that merges two objects and returns a new object.


// const user= {
//   name2: 'victor',
//   age2:30,
//   car2: false,
// }
// const user2= {
//   name: 'maksim',
//   age:30,
//   car: true,
// }

// function mergesObj(obj1,obj2){
//   return {
//     ...obj1,
//     ...obj2,
//   }
// }
// console.log(mergesObj(user,user2));


///////////////////////////////////////////////////////////////////////////////////


// 8. Write a function that checks if an object has a given property.


// const user= {
//   name: 'victor',
//   age:30,
//   car: false,
// }
// function checkProp(obj , prop){
//   return obj.hasOwnProperty(prop)
// }
// console.log(checkProp(user, 'name'))
///////////////////////////////////////////////////////////////////////////////////


// // 9. Create a function that checks if an object has a given method.

// const user= {
//   name: 'victor',
//   age:30,
//   car: false,
//   sayHi:()=>{
//     console.log(`Hello + ${user.name}`)
//   }
// }
// function checkProp(obj , fn){
//   return obj.hasOwnProperty(fn)
// }
// checkProp(user, sayHi)

///////////////////////////////////////////////////////////////////////////////////


// 10. Create a function that adds a given property to an object.

// const user= {
//   name: 'victor',
//   age:30,
//   car: false,
// }

// function pushPropObj(obj , prop, value){
//     return {...obj, [prop]: value,};
// }

// console.log(pushPropObj(user,'Status','isAdmin'))

///////////////////////////////////////////////////////////////////////////////////



