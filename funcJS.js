//  1. Create a function that iterates through an array and return the sum of all elements.
// let arr = [ 1,2,3,4,5];
// function sumElements(arr){
//   let count= 0; 
//   for(let i = 0 ; i<arr.length; i++){
//     count += arr[i];
//   }
// return count;
// }
// console.log(sumElements(arr));

///////////////////////////////////////////////////////////////////////////////////

// 2. Do the same using .reduce()

// let arr = [ 1,2,3,4,5];
// function sumElements(arr){
//   return arr.reduce((acum , item)=> acum+=item)
// }
// console.log(sumElements(arr));

///////////////////////////////////////////////////////////////////////////////////

// 3. Create a function that returns the maximum value in the array.

// let arr = [1,2,3,4,5];

// function maxValue(arr){
//   let max= arr[0];
//   for (i = 1; i < arr.length; ++i) {
//       if (arr[i] > max) max = arr[i];
      
//   }
//   return max;
// }
// console.log(maxValue(arr));

///////////////////////////////////////////////////////////////////////////////////

// 4. Create a function returns the number of elements in the array.

// let arr= [0,1,2,3,4,5,6,7,8,9,10,11];
// function amountElements(arr){
//   return arr.length;
// }
// console.log(amountElements(arr));

///////////////////////////////////////////////////////////////////////////////////

// 5. Create a function returns the index of a value in the array.
// let arr = [1,2,3,4,5];
// function valIndex(arr,value){
// return arr.indexOf(value);
// }
// console.log(valIndex(arr, 5));

///////////////////////////////////////////////////////////////////////////////////

// 6. Create a function that returns a new array with every element in the array multiplied by two.
// let arr = [1,2,3,4,5];
// function multiplyArray(arr){
//   let newArr = arr.map(item=>item*2);
//   return newArr;
// }
// console.log(multiplyArray(arr));
///////////////////////////////////////////////////////////////////////////////////

// 7. Create a function returns a new array with only the even elements from the original array.
// let arr= [0,1,2,3,4,5,6,7,8,9,10,11];
// function evenELments(arr){
//   let newArray =[];
//   for(let i = 1 ; i<arr.length; i++){
//     if (arr[i]%2==0) newArray.push(arr[i]);
//   }
//   return newArray;
// }
// console.log(evenELments(arr));


///////////////////////////////////////////////////////////////////////////////////

// 8. Create a function that returns a new array with only the elements from the original array that have a length greater than a specified value.

// let arr= [1,2,3,4,5,6,7,8,9,10];
// function greaterLengthElemArray(arr, value){
//    let newArr = [] 
//    for( let item of arr){
//     if(item>value) newArr.push(item);
//    }
//   return newArr;
// }
// console.log(greaterLengthElemArray(arr, 5));











// 1. Create a program that takes an array as an argument and returns a new array with all duplicate elements removed.
// let arr = [1,2,4,4,5,2,1,5,67,7];
// function uniqArrayElements(arr){
//   let newArr=[];
//   for(let element of arr){
//     if(!newArr.includes(element)) newArr.push(element);
//   }

//   return newArr;

// }
// console.log(uniqArrayElements(arr));

///////////////////////////////////////////////////////////////////////////////////

// 2. Create a program to determine if an array contains a given value.
// let arr = [9,6,43,'petya', 'egor',1,2,3,4,5,6,7]
// function detectOfElements(arr, value){
//   return arr.includes(value);

// }
// console.log(detectOfElements(arr, 6));
///////////////////////////////////////////////////////////////////////////////////

// 3. Create a program to sort an array in ascending or descending order.
// let arr= [ 1,2,3,6,9,90,2,1,34,5,89,]
// function acendingArr(arr){

//   // ascending
//   return arr.sort((a,b) => a-b);  
//   //descending 
//   return arr.sort((a,b) => b-a);   
// }
// console.log(acendingArr(arr));

///////////////////////////////////////////////////////////////////////////////////

// 4. Create a program to reverse an array.

// let arr= [1,2,3,4,5,6,7,8,9,10];
// function greaterLengthElemArray(arr){
   
//   return arr.reverse();
// }
// console.log(greaterLengthElemArray(arr));

///////////////////////////////////////////////////////////////////////////////////

// 5. Create a program to perform a linear search on an array.

// let arr= [1,2,3,4,5,6,7,8,9,10,5];
// function greaterLengthElemArray(arr ,value){
//   for (let i = 0 ; i < arr.length; i++){
//     if(value === arr[i]) return arr[i]
    
//   }
//   return -1;

//   // return arr.filter(item => item == value);  ----> первый вариант был таким , так как тоже вроде проходит по всем элементам от начала до конца
  
// }
// console.log(greaterLengthElemArray(arr, 100));

///////////////////////////////////////////////////////////////////////////////////

// 6. Create a constructor function and use it to create 3 instances of the same object.
// function UserInfo(name, surname , age){
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
// }

// let userJohn = new UserInfo('John' , 'Smith' , 19);
// let userBoris = new UserInfo('Boris' , 'Bybkin' , 27);
// let userDavid = new UserInfo('David' , 'Colins' , 43);
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
//   let value1 = Object.keys(obj);
//   let value2 = Object.keys(obj2);
//   (value1.length== value2.length)? console.log('Equal'):console.log ('Not equal');
  

// }
// numOfProp(user1 , user2)

///////////////////////////////////////////////////////////////////////////////////


// 4. Create a function that converts an array to an object.

// const names = [ 'petya', 'vasya', 'kolya', 'uri']
// function convert(arr){
//   result= {};
//   for(let i= 0 ; i< arr.length; i++){
//     const item = arr[i];
//     result[i]= item
//   }
//  return result;
// }
// console.log(convert(names));

// вариант через reduce:

// const names = [ 'petya', 'vasya', 'kolya', 'uri']
// function convert(arr){
  
//  return arr.reduce((initValue, item , i)=>{
//   initValue[`${i+1}`]=item;
//   return initValue;
//  },{})
 
// }
// console.log(convert(names));

///////////////////////////////////////////////////////////////////////////////////


// 5. Write a function that checks if a value is a valid key for an object.

// const user= {
//   name: 'victor',
//   age:30,
//   car: 'none',
// }

// function checkKey(obj,key){
//   return Object.keys(obj).includes(key)
// }
// console.log(checkKey(user, 'age'))

///////////////////////////////////////////////////////////////////////////////////


// 6. Create a function that counts the number of properties in an object.

// const user= {
//   name: 'victor',
//   age:30,
//   car: 'none',
// }
// function numOfProp(obj){
//   return Object.values(obj).length;
// }
// console.log(numOfProp(user))

///////////////////////////////////////////////////////////////////////////////////


// 7. Create a function that merges two objects and returns a new object.

// тут сам себе усложнил задачу , не подумал про простой вариант с разными именами свойств и подумал что подвох в этом но пусть будет как пример

// const user= {
//   name: 'victor',
//   age:30,
//   car: false,
// }
// const user2= {
//   name: 'maksim',
//   age:30,
//   car: true,
// }

// function mergesObj(obj1, obj2){
  
//   const sumArrayEntries= [];
//   const sumEntriesObjects = sumArrayEntries.concat(Object.entries(obj1),Object.entries(obj2));
//   const result = sumEntriesObjects.reduce((res, item, i)=> {
//     res[`${i+1}`] = item;
//     return res;
//   },{})
//   return result;
  
// }

// тут вариант с более простыми условиями где свойства с разными именами
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
//   return Object.assign({}, obj1, obj2);
// }
// console.log(mergesObj(user,user2));

// console.log(mergesObj(user,user2))
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

// function pushPropObj(obj ,nameProp, prop){

//   obj[nameProp] = prop;

// }
// pushPropObj(user, 'status', 'isAdmin')
// console.log(user)
///////////////////////////////////////////////////////////////////////////////////






