// Write an algorithm which searches through a 2D array, and whenever it
//  finds a 0 should set the entire row and column to 0.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

const twoDArr = arr => {
    // Set length for rows and columns
    let colHeight = arr.length;
    let rowLength = arr[0].length;

    //Set up base for any null rows or columns
    let nullCols = new Array(colHeight).fill(0);
    let nullRows = new Array(rowLength).fill(0);

    //Iterate through arrays to see if the rows/columns contain 0
    arr.map((col, i) => {
        let nullCol = false;
        col.map((_, c) => {
            if(arr[c][i] === 0) {
                nullCol = true;
                nullRows[c] = 1;
            }
        });

        // If col contains 0, nullCol index marked true
        if(nullCol) {
            nullCols[i] = 1;
        } else {
            nullCols[i] = 0;
        }
    });

    // Create a new array to preserve our original array
    let newArr = arr;

    // Iterate over the original array
    arr.map((col, i) => {
        col.map((_, c) => {
            // For each cell in array check to see if the value should be 0
            if(nullCols[i] || nullRows[c]) {
                newArr[i][c] = 0;
            } else {
                newArr[i][c] = 1;
            }
        });
    });
    return newArr;
}

twoDArr([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]);
