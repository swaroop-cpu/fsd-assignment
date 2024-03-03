// 15. write a function to capitalize the each words first letter to capital Ex : ['abc','def','ghi'] output : ['Abc', 'Def','Ghi"]
let con=["ind","sri","afg","aun"]
let con1=con.map(el=>el.charAt(0).toLocaleUpperCase()+el.slice(1).toLocaleLowerCase())
console.log(con1)