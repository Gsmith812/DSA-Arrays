// Merge arrays
// Imagine you have 2 arrays which have already been sorted. Write 
// an algorithm to merge the 2 arrays into a single array, which should 
// also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

const mergeArrays = (arr1, arr2) => {
    let newArr = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;

    // While current value is lower than the index of both arrays
    while(current < (arr1.length + arr2.length)) {
        // Check if no items are left in arr1 & arr2
        let arr1Empty = index1 >= arr1.length;
        let arr2Empty = index2 >= arr2.length;

        // If arr1 isn't empty and arr2 is empty or arr2's value is larger
        if(!arr1Empty && (arr2Empty || (arr1[index1] < arr2[index2]))) {
            //Push arr1 value to newArr
            newArr[current] = arr1[index1];
            //Increase index1
            index1++;
        } else {
            //Push arr2 value to newArr
            newArr[current] = arr2[index2];
            // Increase index2
            index2++;
        }
        // Increase current for each value added
        current++;
    }
    return newArr;
}
mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]);