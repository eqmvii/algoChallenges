// intermediate algorithim bonfires from Free Code Camp below this line

console.log("Begin algorithm testing");
console.log();

//Roman Numberal Converter: Convert a number into a roman numeral (because of reasons it will always be 3,999 or less)

/*function convertToRoman(num) {
    if (num > 3999 || num < 1)
        return "I can't convert this number.";
    var answer = "";
    var stringNum = num.toString();
    var length = stringNum.length;
    var onedict = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tendict = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var hundict = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thodict = ["", "M", "MM", "MMM", "I can't count that high, I am sorry."]
    var dictionary = [onedict, tendict, hundict, thodict];

    for (var a = 0; a < length ; a++) {
        var intDigit = parseInt(stringNum[a]);
        console.log("A is: " + a + " intDigit is: " + intDigit);
        console.log("Now adding: " + dictionary[length - (a + 1)][intDigit]);
        answer += dictionary[length - (a + 1)][intDigit];
        console.log(answer);
    }
    console.log("Answer is below: ");
    return answer;
}
console.log("Answer is below: ");
console.log(convertToRoman(2450));*/

/*//Diff Two Arrays - compare two arrays and return unique hits 

function diffArray(arr1, arr2) {
    var newArr = arr1.filter(function (value) {
        if (arr2.indexOf(value) === -1) {
            console.log(value);
            return true;
        }
        else return false;
    })
    var holster = arr2.filter(function (value) {
        if (arr1.indexOf(value) === -1) {
            console.log(value);
            return true;
        }
        else return false;
    })
    newArr = newArr.concat(holster);
    // Same, same; but different.
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));*/


/*//Sum All Numbers in a Range - take an array of two numbers, return the sum of those two numbers and all numbers inbetween them

function sumAll(arr) {
    var total = 0;
    var large = Math.max(arr[0], arr[1]);
    var small = Math.min(arr[0], arr[1]);
    for (var a = small; a <= large; a++)
    {
        total += a;
    }
    return total;
}
console.log(sumAll([1, 4]));*/

//
// All 16 basic algorithim bonfires from Free Code Camp below this line
//



/*// where do I go - insertion sort logic
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) { return a - b; });
    console.log(arr);
    for (var a = 0; a < arr.length; a++) {
        //answer the problem
        if (num <= arr[a]) {
            return a;
        }
    }
    return (arr.length); // if num is larger than every item in the array, it must go at the end
};
console.log(getIndexToIns([10,20,30,40,50],35));*/

/*
// Seek and destroy: array + any number of arguments. Remove elements matching any argument.
function destroyer(arr) {
    var passedArguments = Array.prototype.slice.call(arguments);
    passedArguments.shift();
    console.log(passedArguments);
    console.log(arr);
    fixedArray = [];
    for (var a = 0; a < arr.length; a++) {
        for (var b = 0; b < passedArguments.length; b++) {
            if (arr[a] == passedArguments[b]) {
                b = passedArguments.length;
                console.log("Found a match. Maxing out loop variable.");
            }
            else if (b == (passedArguments.length - 1)) {
                console.log("No matches found. Element may stay.");
                fixedArray.push(arr[a]);
            }
        }
    }
    return fixedArray;
}
console.log(destroyer([1, 2, 3, 4, 1, 2, 3], 2, 3)); */

/*
// Falsy bouncer: removes all falsy values from an array 
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
    var loopControl = arr.length;
    var cleanArray = []
    for (var a = 0; a < loopControl; a++) {
        if (arr[a]) {
            cleanArray.push(arr[a]);
        }
    }
        return cleanArray;
}
console.log(bouncer([7, "ate", "", false, 9]));*/

/*
// Mutations: Return true if the string in the first element of 
// the array contains all of the letters of the string in 
//the second element of the array.
function mutation(arr) {
    host = arr[0].toLowerCase(); // the first string
    test = arr[1].toLowerCase(); // the string you're comparing to the first string 
    hostLength = host.length;
    testLength = test.length;
    magicGemBag = 0; // counts one each time a match is found between test and host. 
    //This will loop more than it has to for duplicate letters, but this keeps the code simpler.
    for (var a = 0; a < testLength; a++) {
        for (var b = 0; b < hostLength; b++) {
            if (test[a] == host[b]) {
                magicGemBag++;
                b = hostLength;
            }
        } // close nested for loop
    } // close main for loop
    console.log(magicGemBag);
    if (magicGemBag == testLength) {
        return true;
    }
    else return false; 
}
console.log(mutation(["Alien", "line"]));*/

/*
// Slasher Flick: Remove the beginning of an array up to n elements and return that which is left
function slasher(arr, howMany) {
    for (var a = 0; a < howMany; a++) {
        arr.shift();
    }   
    return arr;
}
console.log(slasher([1, 2, 3], 2)); */

/*
//Write a function that splits an array 'arr' into groups of 'size' length,
//and returns them as a two-deimensional array
function chunkArrayInGroups(arr, size) {
    smallArr = [];
    newArr = [];

    while (arr.length > size) {

    for (var a = 0; a < size; a++) {
        smallArr.push(arr.shift());
    };
    //console.log("Pushing to new array: " + smallArr);
    newArr.push(smallArr);
    smallArr = [];
    } // end while loop
    console.log("Finished first loop. Remaining array length: " + arr.length);
    smallArr = [];
    cruncher = arr.length;
    for (var b = 0; b < cruncher; b++) {
        //console.log("Small arr is:" + smallArr + " and Arr is " + arr + " and b is " + b);
        smallArr.push(arr.shift());
        //console.log("Small arr is:" + smallArr + " and Arr is " + arr + " and b is " + b);
    }
    //console.log("Pushing to new array: " + smallArr);
    newArr.push(smallArr);
    smallArr = [];
    return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
*/

/*// Truncate: Truncate string then add ...
function truncateString(str, num) {
    if (num >= str.length) {
        return str;
    }
    var trunc = 0;
    var truncated = "";
    if (num <= 3) {
        trunc = num;
    }
    else if (num > 3) {
        trunc = num - 3;
    }
      for (var a = 0; a < trunc; a++) {
        truncated += str[a];
    };
    truncated += "...";
    return truncated;
}
console.log(
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
*/

/*
// Repeat a given string (first argument) num times (second argument). 
//Return an empty string if num is negative.
function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return "";
    }
    var multiString = "";
    for (var a = 0; a < num; a++) {
        multiString += str;
    }
    return multiString;
}
console.log(repeatStringNumTimes("abc", 3));*/

/*
//Title case a sentence - return the string with the first letter of each word capitalized. Keep everything else lowercase.
//For this exercise, also capitalize connecting works like "the" and "of"
function titleCase(str) {
    str = str.toLocaleLowerCase();
    stringArray = str.split(" ");
    var newWord = "";
    var firstLetter = "";
    var newStringArray = [];
    for (var a = 0; a < stringArray.length; a++) {
        newWord = stringArray[a];
        firstLetter = newWord[0].toUpperCase();
        newWord = firstLetter + newWord.substring(1);
        newStringArray.push(newWord);
        //console.log(newWord);
    };
    var newString = newStringArray.join(" ");
    //console.log(newString);
    str = newString;
    return str;
};
titleCase("I'm a little tea pot");*/

/*
//Find the longest word in a string
function findLongestWord(str) {
    //var maxLength = 0;
    var longestWord = "";
    var strArray = str.split(" ");
    //console.log("The split up array is: " + strArray)
    var longestWord = "";
    for (var a = 0; a < strArray.length; a++) {
        if (strArray[a].length > longestWord.length) {
            longestWord = strArray[a];
        };
    };
    return longestWord.length;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));*/

/*
//Caesars Cipher - ROT13 encoding. All letters will be uppercase. Do not transform spaces/punctuation, but do pass them on. Shift letters 13 places.
function rot13(str) { // LBH QVQ VG!
    codeArray = [];
    var newString = "";
    for (var a = 0; a < str.length; a++) {
        codeArray.push(str.charCodeAt(a));
    }
    console.log(codeArray);
    for (var b = 0; b < codeArray.length; b++) {
        if (codeArray[b] >= 65 && codeArray[b] <= 90) {
            codeArray[b] += 13;
            if (codeArray[b] > 90) {
                codeArray[b] -= 26;
            }
        };
        newString += String.fromCharCode(codeArray[b]);
    };
    console.log(codeArray);
    //newString = "";
    //for (var c= 0; c < codeArray.lengthString.fromCharCode(codeArray);
    console.log(newString);
    //console.log(String.fromCharCode(65, 66, 67));
    return newString;
}//close function
console.log(rot13("SERR CVMMN!"));
*/

/* 
// Ends With - checks to see if string string ends with string target
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    targetLength = target.length;
    strLength = str.length;
    startCheck = str.length - targetLength;
    for (var a = startCheck; a < str.length; a++) {
        if (str[a] != target[(a - startCheck)]) {
            return false;
        }
    }

    return true;
}

console.log(confirmEnding("Kitten", "ten"));*/

/*
//Check for palindromes after removing all spaces and special characters, ignore string case
function palindrome(str) {
    var re = /\W|-|_/gi;
    str = str.replace(re, "");
    str = str.toLowerCase();
    console.log("Processed string:" + str);
    for (var a = 0; a < (str.length / 2); a++) {
        if (str[a] != str[(str.length - (a+1))]) {
            console.log("a is: " + a + ". letter break: " + str[a] + " against " + str[(str.length - (a + 1))]);
            return false;
    };
};
    return true;
}

testString = "My ag#@e is 0, 0 si eg![a ym.";
//palindrome(testString);
console.log(palindrome(testString));*/

/*
// Factorialize a number
function factorialize(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * factorialize(num -1);
    }
    
}

factorialize(5);
console.log(factorialize(5));*/

/*
//String Reverser: Reverse a string 
function reverseString(str) {
    var flipString = "";
    for (var a = (str.length -1); a >= 0; a--) {
        flipString += str[a];
    }
    return flipString;
}

reverseString("hello")
console.log(reverseString("hello"));*/

/*
function largestOfFour(arr) {
    holster = []; //new array to hold the largest values
    localMax = 0;
    for (var a = 0; a < arr.length; a++) { // loop over the main array
        for (var b = 0; b < arr[a].length; b++) { //loop over each internal array
            if (b == 0) { localMax = arr[a][b]; } // On the first run, assume first item is the largest
            else {
                if (arr[a][b] > localMax) {
                    localMax = arr[a][b]; // store a number if it's larger
                }
                if ((b + 1) == arr[a].length) {
                    holster.push(localMax); // once you've reached the end of the subarray, push whatever the largest number you found was to that array
                }
            }
        }

    } // close first loop 
    arr = holster;
    console.log(arr);
    return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);*/

console.log();
console.log("Algorithm testing concluded. Have a nice day!");