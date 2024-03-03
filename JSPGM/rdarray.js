// 3. write a function to remove the duplicate element from an array
function rd(){
        let a=[1,2,3,8,5,1]
        let res=[]
        for(let el of a){
            if(!res.includes(el)){
                res.push(el)
            }
        }
        return res
    }
    console.log(rd())