// 2. Sort an array without using built in methods
let s=[2,5,6,7,97,1,3]
let temp=""
for(i=0;i<s.length;i++){
    for(j=i;j<s.length;j++){
        if(s[i]>s[j]){
            temp=s[i]
            s[i]=s[j]
            s[j]=temp
        }

    }
}
console.log(s)