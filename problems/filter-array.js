// Imagine you have an array of numbers. Write an algorithm to remove all 
// numbers less than 5 from the array. DO NOT use Array's built-in .filter() 
// method here; write the algorithm from scratch.

const filterArray = array => {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= 5) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}