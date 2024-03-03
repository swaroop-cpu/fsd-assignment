//1. Find a 2nd maximum and Minimum number in an array 
//2nd maximum
function max(){
let y=[-3,15,27,-11]
let m=y[0]
let n=y[1]
for(i=0;i<y.length;i++)
{
    if(y[i]>m){
        n=m
        m=y[i]
    }
    else if(y[i]>n && y[i]!=m){
     b=y[i]
}
}
console.log(n)
}
max ()
    

// // 2nd minimum
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