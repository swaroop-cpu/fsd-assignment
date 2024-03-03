// 4. write a function to remove duplicate elements in a string "HelloWorld"
let a="swaroop"
function rmvdup(){
    let res=""
    for(let char of a){
        if(res.indexOf(char)===-1){
            res=res+char
        }
    }
    return res
}
let res=rmvdup(a)
console.log(res)