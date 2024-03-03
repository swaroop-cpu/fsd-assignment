//1. Find a 2nd maximum and Minimum number in an array 

    

// // 2ndstnd minimum
// function min(){
// let y=[-3,15,27,-11]
// let m=y[0]
// let n=y[1]
// for(i=0;i<y.length;i++)
// {
//     if(y[i]<m){
//         n=m
//         m=y[i]
//     }
//     else if(y[i]<n && y[i]!=m){
//      b=y[i]
// }
// }
// console.log(n)
// }
// min ()



// // 2. Sort an array without using built in methods
// let s=[2,5,6,7,97,1,3]
// let temp=""
// for(i=0;i<s.length;i++){
//     for(j=i;j<s.length;j++){
//         if(s[i]>s[j]){
//             temp=s[i]
//             s[i]=s[j]
//             s[j]=temp
//         }

//     }
// }
// console.log(s)



// 3. write a function to remove the duplicate element from an array
// function rd(){
//         let a=[1,2,3,8,5,1]
//         let res=[]
//         for(let el of a){
//             if(!res.includes(el)){
//                 res.push(el)
//             }
//         }
//         console.log(res)
//     }
//     console.log(rd())



// 4. write a function to remove duplicate elements in a string "HelloWorld"
// let a="swaroop"
// function rmvdup(){
//     let res=""
//     for(let char of a){
//         if(res.indexOf(char)===-1){
//             res=res+char
//         }
//     }
//     return res
// }
// let res=rmvdup(a)
// console.log(res)


// 5. Write function to convert camelCase to snake_case
// let a="imSwaroop"
// function ctos(){
//    let result=``
//     for(i=0;i<a.length;i++)
//     {
//       x=a[i]
//       if(x==x.toUpperCase())
//       {
//         result=result+'_'+ x.toLowerCase()
//       }
//       else{
//         result=result+ x
//       }    
// }   
// console.log(result)
//  }
//  ctos()



// 6. write a function to conver snake_case to camelCase
// function snake(input){
//     let output=``
//     let x=false
//     for(i=0;i<input.length;i++){
//       let y=input[i]
//       if(y=='_'){
//         x=true
//       }
//       else if(x){
//         output+=y.toUpperCase()
//         x=false
//       }
//       else{
//         output+=y
//       }
//     }
//     return output;
//   }
//   console.log(snake('snake_to_camel'))


// 7. write a function to flatten the nested array
// let arr=[1,2,3,[4,5,7],[9,5,6,"abcd","efgh",[7,5,7,"ajay","avinash"]]]
 
// function flarr(arr){ 
//    let res=[]
//    for(i=0;i<arr.length;i++){
//        if(Array.isArray(arr[i])){
//            res.push(...flarr(arr[i]))
//        }
//        else{
//            res.push(arr[i])
//        }
//    }
//    return res
// }console.log(flarr(arr))

// 8. Write a function to find the 2nd largest number in a nested array
// function findSecondLargest(arr) {
//     const flarr = arr.flat();
//     const sortedArray = flarr.sort((a, b) => b - a);
//     let secondLargest = sortedArray[0];
//     for (let i = 1; i < sortedArray.length; i++) {
//         if (sortedArray[i] < secondLargest) {
//             secondLargest = sortedArray[i];
//             break;
//         }
//     }
    
//     return secondLargest
// }

// const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(findSecondLargest(nestedArray));

// 9. write a function to generate below pattern
// 	1
// 	2 9
// 	3 8 10
// 	4 7 11 14
// 	5 6 12 13 15

// function printPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let line = ''; // Initialize an empty string for each line

//         // Print the row number for the first column
//         line += i;

//         // For the second and subsequent rows, print additional numbers based on the pattern
//         if (i > 1) {
//             // Print numbers for the second column
//             if (i === 2) {
//                 line += ' ' + 9;
//             } else if (i === 3) {
//                 line += ' ' + 8 + ' ' + 10;
//             } else if (i === 4) {
//                 line += ' ' + 7 + ' ' + 11 + ' ' + 14;
//             } else if (i === 5) {
//                 line += ' ' + 6 + ' ' + ' ' + 12 + ' ' + 13 + ' ' + 15;
//             }
//         }

//         // Print the completed line
//         console.log(line);
//     }
// }   
	
// // 10. program for adding zeros after 3 values in array	Example: [1, 2,3,4,5,6,6,7,8] Output: [1, 2,3,0,4,5,6,0,6,7,8,0]
// function number(array) {
//     let result = []
    
//     for (let i = 0; i < array.length; i++) {
//         result.push(array[i]);
//         if ((i + 1) % 3 == 0 && i !== array.length - 1) 
//         {
//             result.push(0)
//         }
//     }
    
//     return result
// }

// let input = [1, 2, 3, 4, 5, 6, 6, 7, 8,9]
// console.log(number(input))
// 11. Reverse a string a without using built in method 
// let str="swaroop"
// let rev=``
// for(i=str.length-1;i>=0;i--){
//     rev=rev+str[i]
//     }
//   console.log(rev)

// 12. Write a function to return a fibonacci series
// function fib(n)
// {
//     if(n<=1)
//     {
//         return n 
//     }
//     let fib=[0,1]
//     for(let i=2;i<=n;i++)
//     {
//         fib[i]=fib[i-1]+fib[i-2]

//     }
//     return fib[n]

// }
// console.log(fib(6))



// 13. Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original.
// let originalObject={
//     name:"swaroop",
//     skills:["html","css","js"]
// }
// let deepCopy=JSON.parse(JSON.stringify(originalObject))
// deepCopy.skills.push("nodejs")
// console.log(`the is original object is not effected`,originalObject)
// console.log(`the object is modified`,deepCopy)



// 14. write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'
// function name(arr)
// {
//     let number=[]
//     for(i=0;i<arr.length;i++)
//     {
//         let x=arr[i]
//         if(number[x])
//         {
//             number[x]++
//         }
//         else
//         {
//             number[x]=1
//         }
//     }
//     for(let x in number)
//     {
//         console.log(`${x} repated ${number[x]}times`)
//     }

// }
// let array=[1,2,3,3,5,2,1,7,6,8,7,8]
// let string="aabbjscfl"
// name(array)


// 15. write a function to capitalize the each words first letter to capital Ex : ['abc','def','ghi'] output : ['Abc', 'Def','Ghi"]
// let con=["ind","sri","afg","aun"]
// let con1=con.map(el=>el.charAt(0).toLocaleUpperCase()+el.slice(1).toLocaleLowerCase())
// console.log(con1)
// // })


// 16. write a function to calculate the sum of total marks in an array of objects 
// 	ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]
// let obj=[{sub:'Maths', marks:60},
// {sub:'Science', marks:70},
// {sub:'English', marks:90}]
//  function sum(){
//     let out=obj.reduce((acc,el)=>acc+el.marks,0)
//     return out
// }
// console.log(sum())


	
// 17. Create a TO-do list application add the functionlity to add,remove and edit make sure the application is responsive should have a good styling
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
// </head>
// <body>
//  <div>
//     <input type="text" id="task" placeholder="Enter a action">
//     <button onclick="addTask()">Add a task</button>
//     <button onclick="clearList()">clearList</button>
// <ul id="todo-list">
//     </ul>
// <script>
//     function addTask(){
//         let taskInput=document.getElementById("task")
//         let taskText=taskInput.value.trim();

//         if(taskText!==""){
//            let listItem=document.createElement("li");
//            listItem.textContent=taskText;

//            let deleteButton=document.createElement("button");
//            deleteButton.textContent="delete";
//            deleteButton.onclick=function(){
//             listItem.remove();
//            }
    
//     listItem.appendChild(deleteButton)

//     let todoList=document.getElementById("todo-list")
//     todoList.appendChild(listItem);
//     taskInput.value=""
//  }
//  else{
//     alert("Please enter a task")
//  }
// }
// function clearList(){
//     let todoList=document.getElementById("todo-list")
//     todoList.innerHTML=""
// }

// </script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
// </body>
// </html>


// // 18. Fetch an Api and render few datas on the screen in table format
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Bootstrap demo</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
//   </head>
//   <body>
//     `<table class="table">
//         <thead>
//             <tr>
//                 <th>id</th>
              
//                 <th>title</th>
//                 <th>price</th>
                
//         </tr>
//      <tbody class="div"></div>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
//  <script>
//     let url=`https://fakestoreapi.com/products`
//     fetch(url).then(res=>res.json())
//                .then(json=>{
//                 console.log(json)
//                 let products=document.querySelector(".div")
//                 for(let product of json){
//                     let a=
                      
//                             `<tr>
//                                 <td>${product.id}</td>
                               
//                                 <td>${product.title}</td>
//                                 <td>Rs${product.price}</td></tr>`

//                       products.innerHTML+=a
//                             }})
//  </script>
// </body>
// </html>



// 19. Create a simple search application and implement a debouncing functionality while searching
// <!DOCTYPE html>
// <html lang="en">
// <head>
//  <meta charset="UTF-8">
//  <meta name="viewport" content="width=device-width, initial-scale=1.0">
//  <title>Document</title>
// </head>
// <body>
//  <input type="text" id="enterinput" oninput="handleInput()">
//  <div id="display"></div>
//  <script>
//    let debounceTimer;
//    let throttleTimer;
//    const delay = 3000; 
   
//    function handleInput() {
//      clearTimeout(debounceTimer);
//      clearTimeout(throttleTimer);
//      debounceTimer = setTimeout(search, delay);
     
     
//      throttleTimer = setTimeout(updateSuggestions, 1000)
//    }

//    function search() {
//      let inp = document.getElementById("enterinput").value.toUpperCase();
//      let suggestionList = document.getElementById("display");
//      suggestionList.innerHTML = ``;
//      fetch("https://fakestoreapi.com/products")
//        .then(res => res.json())
//        .then(json => {
//          for (product of json) {
//            let title = product.title.toUpperCase();
//            if (title.startsWith(inp)) {
//              let listitem = document.createElement(`li`);
//              listitem.innerText = title;
//              suggestionList.appendChild(listitem);
//            }
//          }
//        });
//    }

//    function updateSuggestions() {
    
//    }
//  </script>
// </body>
// </html>


// 20. Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
// function rd(){
//      let a = [1,2,3,4,5]
//      b = [5,3,7,8,9]
//       let ab=[...a,...b]
//       let res=[]
//       for(let el of ab){
//           if(!res.includes(el)){
//               res.push(el)
//           }
//       }
//       console.log(res)
//   }
//   console.log(rd())