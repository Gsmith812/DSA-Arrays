# DSA-Arrays

## Drills

1. Explore the push() method  

Using the Array class you just created above, add an item to the array. Use the following function:
```
function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
}
```
* What is the length, capacity and memory address of your array?  
    * length: 1
    * capacity: 3
    * memory address: 0

* Add the following in the main function and then print the array:
```
    ...
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
```
* What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
    * length: 6, 6 new items were pushed to the array.
    * capacity: 12, because there was enough capacity up until we hit the 3rd push and required more capacity so we used our formula ` (this.length + 1) * Array.SIZE_RATIO ` which equates to ` (3 + 1) * 3 ` which equals `12`.
    * memory address: 3, because the last address that was assigned a block of memory was at the 3rd index of the array.

2. Exploring the pop() method  
Add the following in the main function and then print the array:
```
  ...
  arr.pop();
  arr.pop();
  arr.pop();
```
* What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
    * length: 3, because three items were popped from the end of the array.
    * capacity: 12, because we maintained the capacity that we expanded to last time we ran the program and didn't lose or gain any because we did not increase or need to resize the capacity.
    * memory address: 3, because this was again the nearest start point from the last inserted memory block.

3. Understanding more about how arrays work
    * Print the 1st item in the array arr.  
        `console.log(arr.get(0));` which equals `3`
    * Empty the array and add just 1 item: arr.push("tauhida");
    ```
        for(let i = arr.length - 1; i >= 0; i--) {
        arr.remove(i);
        }
        arr.push('tauhida');
    ```
    * Print this 1 item that you just added. What is the result? Can you explain your result?  
        When printed it returns a NaN which is short for 'Not a Number' because our Array is meant to be filled with float data types, not strings.
    * What is the purpose of the _resize() function in your Array class?  
        The purpose of the _resize() function is to check an make sure there is enough `_capacity` available to insert additional data into the array, if not it will run a method within the memory class to expand the capacity based on our `SIZE_RATIO` parameter we have defined.  

4. URLifying a string

    A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

    Input: tauhida parveen

    Output: tauhida%20parveen

    Input: www.thinkful.com /tauh ida parv een

    Output: www.thinkful.com%20/tauh%20ida%20parv%20een

5. Filtering an array  
* Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

6. Max sum in the array
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

    Input: [4, 6, -3, 5, -2, 1]  
    Output: 12

7. Merge arrays  
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

    Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]  
    Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

8. Remove characters
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

    Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'  
    Output: 'Bttl f th Vwls: Hw vs. Grzny'

9. Products
Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

    Input:[1, 3, 9, 4]  
    Output:[108, 36, 12, 27]

10. 2D array
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
```
Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
```

11. String rotation
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

    Input: amazon, azonma

    Output: False

    Input: amazon, azonam

    Output: true


