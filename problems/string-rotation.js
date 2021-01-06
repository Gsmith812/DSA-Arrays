// Given 2 strings, str1 and str2, write a program that checks if 
// str2 is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

const stringRotation = (str1, str2) => {
    // Check to ensure the lengths match
    if(str1.length !== str2.length) return false;

    // Doubling the first string will provide all of the possible rotations
    let dblStr1 = str1 + str1;

    // Check if str2 is included in the doubled string
    let result = dblStr1.includes(str2);

    return result;
}
// returns false
stringRotation('amazon', 'azonma');
// returns true
stringRotation('amazon', 'azonam');