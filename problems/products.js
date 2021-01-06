// Given an array of numbers, write an algorithm that outputs an array 
// where each index is the product of all the numbers in the input array 
// except for the number at each current index. See the following example 
// input and output.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

const productOfArray = arr => {
    // Set new array for sum of array numbers
    let sumArr = [];

    // Iterate through the array
    for(let i = 0; i < arr.length; i++) {
        // Set base product
        let product = 1;
        // Iterate again so that we can compare the values to the current index i
        for(let j = 0; j < arr.length; j++) {
            if(i !== j) {
                // Multiply other numbers together
                product *= arr[j];
            }
        }
        sumArr.push(product);
    }
    return sumArr; 
}

productOfArray([1, 3, 9, 4]);