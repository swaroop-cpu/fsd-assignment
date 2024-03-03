// 6. write a function to conver snake_case to camelCase
function snake(input){
    let output=``
    let x=false
    for(i=0;i<input.length;i++){
      let y=input[i]
      if(y=='_'){
        x=true
      }
      else if(x){
        output+=y.toUpperCase()
        x=false
      }
      else{
        output+=y
      }
    }
    return output;
  }
  console.log(snake('snake_to_camel'))