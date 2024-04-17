//  1. Create a function that iterates through an array and return the sum of all elements.
// const digitArray = [1,2,3,4,5];
// function sumElements(anyArr){
//   let count = 0 ;
//   anyArr.forEach((item)=>count +=item)
//   return count;
// }
// console.log(sumElements(digitArray));

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

// function maxValue(anyArray){

//   return Math.max(eval(anyArray.join(',')));
// }
// console.log(maxValue(arr));

///////////////////////////////////////////////////////////////////////////////////

// 4. Create a function returns the number of elements in the array.

// let arr= [0,1,2,3,4,5,6,7,8,9,10,11];
// function amountElements(anyArray){
//   return anyArray.length;
// }
// console.log(amountElements(arr));

///////////////////////////////////////////////////////////////////////////////////

// 5. Create a function returns the index of a value in the array.
// let arr = [1,2,3,4,5];
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
// let arr= [0,1,2,3,4,5,6,7,8,9,10,11];
// function evenELments(anyArray){
//  return anyArray.filter(item=> item%2===0 ? item:null)
// }
// console.log(evenELments(arr));


///////////////////////////////////////////////////////////////////////////////////

// 8. Create a function that returns a new array with only the elements from the original array that have a length greater than a specified value.

// let arr= [1,2,3,4,5,6,7,8,9,10];
// function greaterLengthElemArray(anyArray, value){
//   return anyArray.filter(item => item>value? item: null)
// }
// console.log(greaterLengthElemArray(arr, 1));











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

// не уверен что понял чего хотят 
// тоесть вид - кладем в функцию параметр desc - получаем по возрастанию , если кладем acs получаем функцию по убыванию
// я подумал что требуется в параметры  массив , desc , acs для большей вариативности 

// let arr= [ 1,2,3,6,9,90,2,1,34,5,89,]
// function acendingArr(anyArray,desc,acs){
  
//   if(desc)return anyArray.sort((a,b) => a-b); 
//   if(acs) return anyArray.sort((a,b) => b-a);   
// }
// console.log(acendingArr(arr,0,1));

///////////////////////////////////////////////////////////////////////////////////

// 4. Create a program to reverse an array.
// первое что пришло в голову , знаю что он медленный изза переназначения индексов
// вроде можно было unshift использовать но он насколько помню долгий(всмысле переназначение индексов занимает время)
// let arr= [1,2,3,4,5,6,7,8,9,10];
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

// я пытался понять о чем ты говоришь , и вот как я это понял , мол если ты в return  говоришь про -1 ,
// то ты показываешь то что ты ищешь индекс элемента а не сам элемент , а вот так как я сейчас сделал , то тут
//я как бы говорю что мы хотим получить либо --- элемент  ,  либо ответ ---- элемента нет   
// по методу filter я все понял, не подходящий вариант 
// надеюсь я все правильно понял
// let arr= [1,2,3,4,5,6,7,8,9,10,5];
// function greaterLengthElemArray(anyArray ,value){
//   for (let i = 0 ; i < anyArray.length; i++){
//     if(value === anyArray[i]) return anyArray[i]
    
//   }
//   return 'Not exist';
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
// function convert(anyArray){
//      return {...names}

// }
// console.log(convert(names));

///////////////////////////////////////////////////////////////////////////////////


// 5. Write a function that checks if a value is a valid key for an object.


// const name ={}
// const user= {
//   name: 'victor',
//   age:30,
//   car: 'none',
// }

// function checkKey(obj,key){
// return key in obj;
// }
// console.log(checkKey(user, 'name'))

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
//я прям чето запотел на этом вопросе , короче как создать новый обьект со свойствами и значениями исхожного + то что мы передадим я понял , тоесть через оператор расширения ,  но вот как с помощью него напихать в существующий обьект я пока что то не понимаю я пока что понимаю только форму obj[key]= value, вид хоть приблизительно такой ? или вообще иначе ?

// const user= {
//   name: 'victor',
//   age:30,
//   car: false,
  
// }

// function pushPropObj(obj , prop, value){
//     obj = {
//         ...obj,
//         [prop]: value,
//     }
//     return obj
 
// }


// console.log(pushPropObj(user,{'Status':'isAdmin'} ))
// console.log(user)
///////////////////////////////////////////////////////////////////////////////////
