// 20. Write a function to remove the duplicate from 2 arrays, let a = [1,2,3,4,5] let b = [5,3,7,8,9]
function rd(){
    let a = [1,2,3,4,5]
    b = [5,3,7,8,9]
     let ab=[...a,...b]
     let res=[]
     for(let el of ab){
         if(!res.includes(el)){
             res.push(el)
         }
     }
     console.log(res)
 }
 console.log(rd())