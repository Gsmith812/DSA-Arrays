// Max sum in the array
// You are given an array containing positive and negative integers. 
// Write an algorithm which will find the largest sum in a continuous 
// sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

const maxSum = arr => {
    let currentMax = 0;
    let accMax = 0;

    for(let i = 0; i < arr.length; i++) {
        currentMax = Math.max(0, currentMax + arr[i]);
        accMax = Math.max(currentMax, accMax);
    }

    return accMax;
}