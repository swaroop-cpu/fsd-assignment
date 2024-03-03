
// 14. write a function to find how many times an elements are repeated in an array [1,2,3,3,5,2,1,7,6,8,7,8] and in string "abcdaabdlfjl'

function name(arr)
{
    let number=[]
    for(i=0;i<arr.length;i++)
    {
        let x=arr[i]
        if(number[x])
        {
            number[x]++
        }
        else
        {
            number[x]=1
        }
    }
    for(let x in number)
    {
        console.log(`${x} repated ${number[x]}times`)
    }

}
let array=[1,2,3,3,5,2,1,7,6,8,7,8]
let string="aabbjscfl"
name(array)