//5. Write function to convert camelCase to snake_case
let a="imSwaroop"
function ctos(){
   let result=``
    for(i=0;i<a.length;i++)
    {
      x=a[i]
      if(x==x.toUpperCase())
      {
        result=result+'_'+ x.toLowerCase()
      }
      else{
        result=result+ x
      }    
}   
console.log(result)
 }
 ctos()
