const Array = require('./array-class');

function main() {
    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
    console.log(arr.get(0));
    for(let i = arr.length - 1; i >= 0; i--) {
        arr.remove(i);
    }
    arr.push('tauhida');
    console.log(arr.get(0));
}

main();