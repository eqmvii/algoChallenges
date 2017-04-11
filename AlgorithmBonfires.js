// Algorithim bonfires from Free Code Camp
// All ~150 hours of Free Code Camp algorithim challenges completed by E. Martin 
// Last challenge completed: 4/11/2017 @ 3:54 p.m. eastern
// Algorithims only output to console and have hard-coded input, should work within any HTML script tag

console.log("Begin algorithm testing");

/*// find pairs, sum the locations of the pairs, avoid duplicates, follow other silly rules
function pairwise(arr, arg) {
    var result = 0;    
    var blackout = []; // easy array of used indices to test w/ indexOf to avoid number re-use
    for (var i = 0; i < arr.length; i++)
    {
        for (var j = i + 1; j < arr.length; j++)
        {
            // make sure you have found a match and haven't re-used any numbers
            if (arr[i] + arr[j] === arg && blackout.indexOf(j) < 0 && blackout.indexOf(i) < 0)
            {
                // update list of indices to avoid
                blackout.push(i);
                blackout.push(j);
                // track i and j
                result += i + j;
                i += 1; // i cannot be reused, so no need to linger in the loop
            }
        }
    }
    return result;
}
console.log(pairwise([1, 1, 1], 2));*/

/*// Map the debris
// Return a new array that transforms the element's average altitude into their orbital periods
function orbitalPeriod(arr) {
    var GM = 398600.4418; // km^3 / s^2
    var earthRadius = 6367.4447; // km
    var res = [];
    // T = 2 * Pi * sqrt ( a ^ 3 / GM )
    // a = orbit's semi-major axis in meters
    // GM = the above constant (gravitation constant * mass of the more massive body)
    for (var i = 0; i < arr.length; i++)
    {
        var nobject = {};
        nobject.name = arr[i].name;
        nobject.orbitalPeriod = calculon(GM, earthRadius, arr[i].avgAlt);
        res.push(nobject);
    }
    return res;
}

// formula for the orbital radius, passes constants only because of free code camp variable limitations
var calculon = function (GM, earthRadius, avgAlt)
{
    var chunka = 2 * Math.PI;
    var chunkb = Math.pow(earthRadius + avgAlt, 3) / GM;
    chunkb = Math.pow(chunkb, 0.5);
    return Math.round(chunka * chunkb, 0);
}
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));*/

/*
// Everything has to be private because why not
// This seems not at all like what one would want to do, especially in ES6, but lol idk
var Person = function (firstAndLast) {
    var fullName = firstAndLast;    
    this.getFullName = function () {
        return fullName;
    };
    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };
    this.getLastName = function () {
        return fullName.split(" ")[1];
    };
    this.setFirstName = function (fname) {
        fullName = fname + " " + fullName.split(" ")[1];
    };
    this.setLastName = function (lname) {
        fullName = fullName.split(" ")[0] + " " + lname;
    };
    this.setFullName = function (name) {
        fullName = name;
    };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.fullName);*/

/*// THIS ONE WAS REALLY HARD
// Return the total number of permutations of the string without repeated consecutive letters, assuming all characters are each unique.
// functions declared within function because of issues using global variables with Free Code Camp's testing suite
function permAlone(str) {
    // Build all of the permutations of the string
    // Once built, test for repetition anywhere in the resulting string
    var recur = function (str_arr, test) {
        if (str_arr.length > 1) {
            for (var i = 0; i < str_arr.length; i++) {
                var temparr = str_arr.slice();
                temparr.splice(i, 1);
                recur(temparr, test + str_arr[i]);
            }
        }
        if (str_arr.length === 1) {
            if (repTest(test + str_arr[0])) {
                counter++; // add 1 each time a string with no repetition is made from the permutation generating algorithm
            }
        }
    };

    var repTest = function (testString) {
        for (var j = 1; j < testString.length; j++) {
            if (testString[j] === testString[j - 1]) {
                return false; // there was repetition in the permutation, so don't count it
            }
        }
        return true;
    };

    var counter = 0;
    var str_arr = str.split("");
    var test = "";
    recur(str_arr, test);
    return counter;
}
console.log(permAlone('aab'));*/

/*// Inventory Update: update inventory array based on a new array of inventory
// Using some ES6 features
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let itemsArr = [];
    // create a flattened array of items in inventory for testing
    for (let i = 0; i < arr1.length; i++)
    {
        itemsArr.push(arr1[i][1]);
    }
    
    for (let i = 0; i < arr2.length; i++)
    {
        // See if arr1 has the item in arr2
        let item = itemsArr.indexOf(arr2[i][1]);
        //console.log(item);
        if (item >= 0) // if so, update inventory
        {
            arr1[item][0] += arr2[i][0]; // add inventory amounts
            // TODO: If result is 0, remove item from array
        }
        else // if not, add it to the array
        {
            arr1.push(arr2[i]);
        }       
    }
    // sort the resulting array
    arr1.sort(function (a, b) {
        //console.log(a[1] + " and " + b[1]);
        let ta = a[1].toUpperCase();
        let tb = b[1].toUpperCase();
        if (ta > tb)
        {
            return 1;
        }
        if (ta < tb) {
            return -1;
        }
        else
        {
            return 0;
        }
    });
    return arr1; // return the updated inventory
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];
console.log(updateInventory(curInv, newInv));*/

/*// Exact change: A cash register function that takes price/cash in drawer/payment and returns change
function checkCashRegister(price, cash, cid) {
    var simpleChange = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    var changeArray = [];
    // count in pennies to avoid floating point drama
    price *= 100; 
    cash *= 100;
    var change = cash - price; // calculate change to give in pennies    
    // Sanitize cid to avoid floating point drama
    cid[0][1] *= 100;
    cid[1][1] *= 20;
    cid[2][1] *= 10;
    cid[3][1] *= 4;
    cid[5][1] /= 5;
    cid[6][1] /= 10;
    cid[7][1] /= 20;
    cid[8][1] /= 100;
    console.log(cid);
    // Use an algorithim to determine change to give
    while (change > 0)
    {
        if (change >= (100*100) && cid[8][1] > 0) // one hundered
        {            
            cid[8][1] -= 1;
            simpleChange[8] += 1;
            change -= (100 * 100);
        }
        else if (change >= (20 * 100) && cid[7][1] > 0) // twenty
        {
            cid[7][1] -= 1;
            simpleChange[7] += 1;
            change -= (20 * 100);
        }
        else if (change >= (10 * 100) && cid[6][1] > 0) // ten
        {
            cid[6][1] -= 1;
            simpleChange[6] += 1;
            change -= (10 * 100);
        }
        else if (change >= (5 * 100) && cid[5][1] > 0) // five
        {
            cid[5][1] -= 1;
            simpleChange[5] += 1;
            change -= (5 * 100);
        }
        else if (change >= (100) && cid[4][1] > 0) // one
        {
            cid[4][1] -= 1;
            simpleChange[4] += 1;
            change -= (100);
        }
        else if (change >= (25) && cid[3][1] > 0) // quarter
        {
            console.log(change);
            cid[3][1] -= 1;
            simpleChange[3] += 1;
            change -= (25);
            console.log(change);
        }
        else if (change >= (10) && cid[2][1] > 0) // dime
        {
            cid[2][1] -= 1;
            simpleChange[2] += 1;
            change -= (10);
        }
        else if (change >= (5) && cid[1][1] > 0) // nickel
        {
            cid[1][1] -= 1;
            simpleChange[1] += 1;
            change -= (5);
        }
        else 
        {
            if (change > cid[0][1])
            {
                return "Insufficient Funds";
            }
            else 
            {
                simpleChange[0] = change;
                cid[0][1] -= change;
                change = 0;                
            }
        }
    }
    console.log(simpleChange);
    // Check to see if we close the drawer
    for (var i = 0; i < cid.length; i++)
    {
        if (cid[i][1] > 0)
        {
            break; // stop checking if we have any money in any bin
        }
        return "Closed"; // if none of the bins have money, return this string instead of the correct answer
    }
    // build and return the array of change
    if (simpleChange[8] > 0)
    {
        changeArray.push(["ONE HUNDRED", simpleChange[8] * 100]);
    }
    if (simpleChange[7] > 0) {
        changeArray.push(["TWENTY", simpleChange[7] * 20]);
    }
    if (simpleChange[6] > 0) {
        changeArray.push(["TEN", simpleChange[6] * 10]);
    }
    if (simpleChange[5] > 0) {
        changeArray.push(["FIVE", simpleChange[5] * 5]);
    }
    if (simpleChange[4] > 0) {
        changeArray.push(["ONE", simpleChange[4]]);
    }
    if (simpleChange[3] > 0) {
        changeArray.push(["QUARTER", simpleChange[3] * 0.25]);
    }
    if (simpleChange[2] > 0) {
        changeArray.push(["DIME", simpleChange[2] * 0.10]);
    }
    if (simpleChange[1] > 0) {
        changeArray.push(["NICKEL", simpleChange[1] *0.5]);
    }
    if (simpleChange[0] > 0) {
        changeArray.push(["PENNY", simpleChange[0] *0.01]);
    }

    return changeArray;
}
// Example cash-in-drawer array:
// [["PENNY", 1.01], (0)
// ["NICKEL", 2.05], (1)
// ["DIME", 3.10], (2)
// ["QUARTER", 4.25], (3)
// ["ONE", 90.00], (4)
// ["FIVE", 55.00], (5)
// ["TEN", 20.00], (6) 
// ["TWENTY", 60.00], (7)
// ["ONE HUNDRED", 100.00]] (8)
//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));*/

/*// Symmetric Difference of n arrays
function sym() {
    // remove duplicates from each array
    for (var a = 0; a < arguments.length; a++)
    {
        for (var b = 1; b < arguments[a].length; b++)
        {
            if (arguments[a].indexOf(arguments[a][b]) !== b)
            {
                console.log("MERGE at position " + b);
                arguments[a].splice(b, 1);
                b -= 1;
            }

        }
        console.log("Cleaned up: " + arguments[a]);
    }
    // dif the arrays
    var dif = arguments[0].slice();
    for (var i = 1; i < arguments.length; i++)
    {
        for (var j = 0; j < arguments[i].length; j++)
        {
            console.log(dif);
            if (dif.indexOf(arguments[i][j]) >= 0)
            {
                dif.splice(dif.indexOf(arguments[i][j]),1);
            }
            else
            {
                console.log("Pushing " + arguments[i][j]);
                dif.push(arguments[i][j]);
            }
        }
    }
    // sort the resulting array
    dif.sort(function (a, b) {
        return a - b;
    });
    return dif;
}
console.log("Result: " + sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));*/

/*// Record collection: 
// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
          "Let It Rock",
          "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
          "1999",
          "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    if ((prop !== "tracks") && (value !== "")) {
        collection[id][prop] = value;
    }
    else if ((prop == "tracks") && !(collection[id].hasOwnProperty("tracks"))) {
        var newArray = [];
        newArray.push(value);
        collection[id][prop] = newArray;

    }
    else if ((prop === "tracks") && (collection[id].hasOwnProperty("tracks")) && (value !== "")) {
        collection[id][prop].push(value);
    }
    else if (value === "") {
        delete collection[id][prop];
    }
    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");*/

/*// return true if the string is a valid US phone number, otherwise return false.
// Expect many variants
// I (and everyone) hate(s) regexp
function telephoneCheck(str) {
    // Good luck!
    var re = /^1?([\s\-)])?[\s\-)?]?(\d\d\d|\(\d\d\d\))[\s\-]?\d\d\d[\s\-]?\d\d\d\d$/;
    if (re.test(str)) {
        return true;
    }
    return false;
}
console.log(telephoneCheck("a555-555-5555"));*/

/*// sum two arguments, or if one argument, return a rfunction that expects an argument and returns the sum
function addTogether() {
    var c; // use this undefined variable to allow undefined to be returned. ugly; perhaps there is a better way?
    if (arguments.length > 2)
    {
        return "DO NOT DO THIS";
    }
    else if (arguments.length === 2)
    {
        if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number")
        {
            return c;
        }
        return arguments[0] + arguments[1];
    }
    else if (arguments.length === 1)
    {
        console.log(typeof arguments[0]);
        if (typeof arguments[0] !== "number")
        {
            return c;
        }
        var that = arguments[0];
        var respFunc = function (a) {
            if (typeof a !== "number")
            {
                return c;
            }
            return a + that;
        };
        return respFunc;
    }
    else
    {
        return "massive error idk";
    }
    return false;
}
console.log(addTogether(2)([3]));*/

/*// Check if arg 2 is true on all elements of first arg
function truthCheck(collection, pre) {
    // Is everyone being true?
    for (var i = 0; i < collection.length; i++)
    {
        console.log(collection[i][pre]);
        if(!collection[i][pre])
        {
            return false;
        }
    }
    return true;
}
truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");*/

/*// Binary Agents: Return an english translated sentenced of the passed binary string
function binaryAgent(str) {
    var chunk, letter, msg;
    msg = "";
    for (var i = 0; i < str.length; i += 9)
    {
        chunk = str.slice(i, i + 8);
        letter = parseInt(chunk, 2);
        msg += String.fromCharCode(letter);

    }
    console.log(msg);
    return msg;
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");*/

/*// Flatten a nested array
function steamrollArray(arr) {
    var new_arr = [];    
    for (var i = 0; i < arr.length; i++)
    {
        if (!Array.isArray(arr[i]))
        {
            console.log("Pusing " + arr[i]);
            new_arr.push(arr[i]);
        }
        else
        {
            console.log("RECUR");
            new_arr = new_arr.concat(steamrollArray(arr[i]));
        }
    }
    return new_arr;
}
//console.log(steamrollArray([1, [2], [3, [[4]]]]));
steamrollArray([1, [2], [3, [[4]]]]);*/

/*// Drop the element of an array until the second argument is true
function dropElements(arr, func) {
    // Drop them elements.
    var new_arr = arr.slice();
    for (var i = 0; i < arr.length; i++)
    {
        if (!func(arr[i]))
        {
            new_arr.shift();

        }
        else
        {
            console.log(new_arr);
            return new_arr;
        }
    }
    console.log("lol idk");
    return new_arr;
}
dropElements([1, 2, 3, 4], function (n) { return n >= 3; });*/

/*// Look through an array (arg 1) and return the first element that passes a truth test (arg 2)
function findElement(arr, func) {
    for (var i = 0; i < arr.length; i++)
    {
        if (func(arr[i]))
        {
            return arr[i];
        }
    }

    return undefined;
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });*/

/*//noprotect
// Smallest Common Multiple: Find the smallest common multiple 
// that can be evenly divided by both, 
// and also by all sequential numbers in the range between them
function smallestCommons(arr) {
    var lcm, low, high, test;
  
    lcm = 0;
    // figure out which element is high and which is low
    if (arr[0] > arr[1])
    {
        high = arr[0];
        low = arr[1];
    }
    else
    {
        high = arr[1];
        low = arr[0];
    }

    test = low * high;

    // hunt for the least common multiple
    while (lcm === 0)
    {
        for (var i = low; i <= high; i++)
        {
            if (test % i !== 0)
            {
                break; // break if one number in sequence is non-divisible
            }
            if (i === high)
            {
                // we haven't broken and the loop is over, so we have found the LCM
                lcm = test;
            }
        }
        test += 1;
        if (test > 1000000000)
        {
            lcm = test;
            console.log("Gave up");
        }
    }   

    console.log(lcm);
    return lcm;
}
smallestCommons([23, 18]);*/

/*// Sum All Primes: Sum all the prime numbers up to an including the provided number
function sumPrimes(num) {
    if (num < 1)
    {
        return 0;
    }
    var sum = 0;
    for (var i = 2; i <= num; i++)
    {
        if (isPrime(i))
        {
            //console.log(i + " is prime! Adding it!");
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}
var isPrime = function(number)
{
    //console.log(" I was called with " + number);
    if (number === 2 || number === 3)
    {
        return true;
    }
    for (var a = 2; a < number; a++)
    {
        if (number % a === 0)
        {
            return false;
        }
    }
    return true;
}
sumPrimes(977);*/

/*// Sum all odd fibonacci numbers less than num
// This is an illegant solution, but it is a solution! 
function sumFibs(num) {
    if (num < 1)
    {
        return 0;
    }
    if (num === 1 || num === 2)
    {
        return num;
    }
    var fibs = [1, 1];
    var sum = 2;
    for (var i = 2; i < num; i++) // for loop when I thought num was the number of fibonnaci numbers, not the number of the highest fib number
    {
        
        var new_fib = fibs[i - 1] + fibs[i - 2];
        if (new_fib > num)
        {
            break;
        }
        else
        {
            fibs[i] = new_fib;
        }
        if (fibs[i] % 2 !== 0)
        {
            sum += fibs[i];
        }
    }
    console.log(sum);
    return sum;
}
sumFibs(1000);*/

/*// Convert a string to dashes and all lowecase from... something different
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var sanity = 1;
    //First, undo camel case: add a space before every capital letter
    for (var i = 1; i < str.length; i++)
    {
        //console.log("str[i]:" + str[i] + "|upper:" + str[i].toUpperCase() + "|");
        sanity += 1; // stop infinite loops before they start
        // this is ugly but so is the challenge so I don't care:
        if (str[i] === str[i].toUpperCase() && str[i].toLowerCase() !== str[i].toUpperCase() && str[i] != " " && str[i - 1] != " " && str[i - 1] != "_" && str[i - 1] != "-")
        {
            str = str.slice(0, i) + " " + str.slice(i);
        }
        if (sanity > 100)
        {
            break;
        }
    }

    //Next, make everything lowercase
    str = str.toLowerCase();

    //finally, replace underscores and spaces with single dashes
    str = str.replace(/\s|_/g, "-");
    console.log(str);
    return str;
}
spinalCase("The_Andy_Griffith_Show");*/

/*// Convert characters in a string into corresponding HTML entries
function convertHTML(str) {
    var myreg = /&/g;
    new_str = str.replace(myreg, "&amp;");
    myreg = /</g;
    new_str = new_str.replace(myreg, "&lt;");
    myreg = />/g;
    new_str = new_str.replace(myreg, "&gt;");
    myreg = /"/g;
    new_str = new_str.replace(myreg, "&quot;");
    myreg = /'/g;
    new_str = new_str.replace(myreg, "&apos;");
    console.log(new_str);
    return new_str;
}
convertHTML("Hamburgers < Pizza < Tacos");*/

/*//Sorted Union: function takes 2+ arrays and returns unique numbers in a new array in the order provided by original array
function uniteUnique(arr) {
    var new_array = arguments[0];
    console.log(arguments.length);
    for (var i = 1; i < arguments.length; i++)
    {
        var cur_arr_len = arguments[i].length;
        for (var j = 0; j < cur_arr_len; j++)
        {
            if(!new_array.includes(arguments[i][j]))
            {
                new_array.push(arguments[i][j]);
            }
        }
    }
    console.log(new_array);
    return new_array;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);*/

/*//Boo who: check is value is a boolean primitive, return true or false
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if (typeof bool === 'boolean') {
        return true;
    }
    return false;
    // shorter: return typeof bool === 'boolean';
}
console.log(booWho(null));*/

/*//Missing letters: find missing letters from the ordered alphabet
//Could also use an array, .map and a callback function here
function fearNotLetter(str) {
    var start = str.charCodeAt(0); // UTC code of first char
    var end = str.charCodeAt(str.length - 1); // UTC code of last char
    var bonus = "";
    var offset = 1; // tracks through the characters that should be in the alphabet
    for (var i = 1; i < str.length; i++) {
        while (str[i] !== String.fromCharCode(start + offset)) { //add missing letters
            bonus += String.fromCharCode(start + offset);
            offset++;
        }
        offset++;
    }
    if (!bonus) { return undefined; }
    return bonus;
}
console.log(fearNotLetter("abcdef"));*/

/*//DNA Pairing: return matched array of DNA pair arrays
//Alternate method: create a base pair dictionary as an object and push to your new array in the loop by looking up key/pair in object
function pairElement(str) {
    var strArray = str.split("");
    console.log(strArray);
    var matchedArray = [];
    for (var i = 0; i < strArray.length; i++)
    {
        var temp = [];
        temp.push(strArray[i]);
        if (strArray[i] === 'G') { temp.push('C'); }
        else if (strArray[i] === 'C') { temp.push('G'); }
        else if (strArray[i] === 'A') { temp.push('T'); }
        else (temp.push('A'))
        matchedArray.push(temp);
    }
    return matchedArray;
}
console.log(pairElement("GCG"));*/

/*//Pig Latin doing function
function translatePigLatin(str) {
    var modStr = str;
    function startVowel(testStr) {
        var tester = testStr.substring(0,1).toLowerCase();
        //console.log(tester);
        return tester === 'a' || tester === 'e' || tester === 'i' || tester === 'o' || tester === 'u' || tester === 'y' || false;
    }
    if (startVowel(str))
    {
        modStr = str + "w";
    }
    else
    {
        while (!startVowel(modStr)) {
            modStr = modStr.substring(1) + modStr.substring(0, 1);
        }
    }
    modStr += "ay";
    return modStr;
}
console.log(translatePigLatin("glove"));*/

/*//Search and replace:
function myReplace(str, before, after) {
    console.log(str);

    //Check to see if you need to uppercase the first letter
    if (before[0] === before[0].toUpperCase())
    {
        //console.log("You're in trouble mister");
        var first = after[0].toUpperCase();
        var second = after.substring(1);
        after = first + second;
        //console.log(after);
    }
    str = str.replace(before, after);
    //console.log(str);
    return str;
}
myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");*/

/*//Wherefore art thou: return matching properties from an array 
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var propsToTest = Object.keys(source);
    console.log(propsToTest);
    var colLength = collection.length;
    var propsLength = propsToTest.length;
    var rejector = 0;

    //Loop through the array of objects to test
    for (var a = 0; a < colLength; a++)
    {
        //loop through the array of keys in the testing object
        for (var b = 0; b < propsLength; b++) 
        {
            if (collection[a][propsToTest[b]] !== source[propsToTest[b]])
            {
                console.log("It's not a hit!");
                rejector++; // signal rejection if a match fails
                b = (propsLength - 1);
            }
            if (b === (propsLength - 1))
            {
                if (rejector === 0)
                {
                    arr.push(collection[a]);
                }
                rejector = 0;
            }
        }
    }
    console.log("Arr is: " + arr);
    // Only change code above this line
    return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });*/

/*//Roman Numberal Converter: Convert a number into a roman numeral (because of reasons it will always be 3,999 or less)
function convertToRoman(num) {
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

// Basic algorithim bonfires from Free Code Camp below this line

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

console.log("Algorithm testing concluded. Have a nice day!");