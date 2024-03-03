
// 13. Implement a deep clone(copy) function in JavaScript that creates a copy of a nested object or array without any reference to the original.
let originalObject={
    name:"swaroop",
    skills:["html","css","js"]
}
let deepCopy=JSON.parse(JSON.stringify(originalObject))
deepCopy.skills.push("nodejs")
console.log(`the is original object is not effected`,originalObject)
console.log(`the object is modified`,deepCopy)