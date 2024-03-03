// 16. write a function to calculate the sum of total marks in an array of objects 
	ex : [{sub:'Maths', marks:60},{sub:'Science', marks:70},{sub:'English', marks:90}]
let obj=[{sub:'Maths', marks:60},
{sub:'Science', marks:70},
{sub:'English', marks:90}]
 function sum(){
    let out=obj.reduce((acc,el)=>acc+el.marks,0)
    return out
}
console.log(sum())