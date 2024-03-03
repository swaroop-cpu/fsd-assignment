// 8. Write a function to find the 2nd largest number in a nested array
function findSecondLargest(arr) {
    const flarr = arr.flat();
    const sortedArray = flarr.sort((a, b) => b - a);
    let secondLargest = sortedArray[0];
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] < secondLargest) {
            secondLargest = sortedArray[i];
            break;
        }
    }
    
    return secondLargest
}

const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(findSecondLargest(nestedArray)); 