 // 7. write a function to flatten the nested array
 let arr=[1,2,3,[4,5,7],[9,5,6,"abcd","efgh",[7,5,7,"ajay","avinash"]]]
 
 function flarr(arr){ 
    let res=[]
    for(i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res.push(...flarr(arr[i]))
        }
        else{
            res.push(arr[i])
        }
    }
    return res
}console.log(flarr(arr))
