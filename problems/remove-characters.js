// Remove characters
// Write an algorithm that deletes given characters from a string. For 
// example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" 
// and the characters to be removed are "aeiou", the algorithm should 
// transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not 
// use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

const removeChars = (string, charsToRemove) => {
    // Create new filtered string
    let newStr = '';

    // Function to validate if the character needs to be reoved
    const filterChar = char => {
        for(let i = 0; i < charsToRemove.length; i++) {
            if(char === charsToRemove[i]) {
                return true
            }
        }
        return false;
    }

    // Use new function and iterate over the string
    // to see which characters should be removed
    for(let i = 0; i < string.length; i++) {
        if(!filterChar(string.charAt(i))) {
            newStr += string.charAt(i);
        }
    }
    console.log(newStr);

    return newStr;
}

removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');

