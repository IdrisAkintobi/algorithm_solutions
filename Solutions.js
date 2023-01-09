//
// function WordSplit(strArr) {
//   let word = strArr[0];
//   let fragments = strArr[1].split(",");
//   for (let i = 0; i < word.length; i++) {
//     let left = word.slice(0, i);
//     let right = word.slice(i);
//     if (fragments.includes(left) && fragments.includes(right)) {
//       return `${left},${right}`;
//     }
//   }
//   return "not possible";
// }

function MovingMedian(arr) {
  const window = arr[0];
  const result = arr.slice(1, 2);
  function getMedian(input) {
    const median = Math.floor(input.length / 2);
    const arr = [...input].sort((a, b) => a - b);
    if (arr.length % 2 === 0) {
      return Math.round((arr[median - 1] + arr[median]) / 2);
    } else {
      return arr[median];
    }
  }
  for (let i = 2; i < arr.length; i++) {
    // const start = window >= i ? 1 : i + 1 - window;
    // const end = window >= i ? i + 1 : start + window;
    if (i <= window) {
      const chunk = arr.slice(1, i + 1);
      result.push(getMedian(chunk));
    } else {
      const chunk = arr.slice(i - window + 1, i);
      result.push(getMedian(chunk));
    }
    // const chunk = arr.slice(start, end);
    // result.push(getMedian(chunk));
  }
  return result.join(",");
}

// console.log(MovingMedian([3, 1, 2]));
// console.log(MovingMedian([5, 2, 4, 6]));
// console.log(MovingMedian([3, 0, 0, -2, 0, 2, 0, -2]));
// console.log(MovingMedian([3, 5, 87, 16, 4, 6, 8]));
// console.log(MovingMedian([9, 5, 87, 16, 4, 6, 8]));

// const delay = ms => new Promise ((resolve, reject) => setTimeout(resolve("Done"), ms))
// delay(4000)

// const ar = [667, 5, 44, 92, 16];

// function bubbleSorter(arr) {
//   for (let i = arr.length-1; i > 0; i--) {
//     for (let j = i; j >= 0; j--) {
//       if (arr[j-1] > arr[j]) {
//         [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
//       }
//     }
//   }
//   return arr
// }
// sorter(ar)

// function insertion(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let curr = arr[i];
//     for (var j = i - 1; j >= 0; j--) {
//       if (arr[j] > curr) {
//         arr[j + 1] = arr[j];
//       } else break;
//     }
//     arr[j + 1] = curr;
//   }
//   return arr;
// }

// insertion(ar)

// function tops(msg) {
//   let [result, steps] = ["", 1];
//   for (let i = 1; i < msg.length; [i++, steps++]) {
//     result = msg[i] + result;
//     i += (steps*4);
//   }; return result
// }
// function tops(msg) {
//   let [result, i, s] = ["", 0, 0];

//   while (msg[i += (4*s++)+1]) {
//     result = msg[i] + result
//   }; return result
// }

// tops("abcdefghijklmnopqrstuvwxyz1234");

// function factorial(num) {
//   if (num == 2) return 2;
//   return num * factorial(num - 1);
// }

// factorial(8);

// function reverse(s){
//   let reversed = "";
//   for(let i = 0; i < s.length; i++){
//     reversed = s[i] + reversed
//   }
//   return reversed
// }
// reverse("look") //

// function palindrome(s) {
//   if (typeof s !== "string") return "Not a string";
//   const len = Math.floor(s.length / 2);
//   for (let i = 0; i < len; i++) {
//     if (s[i] !== s[s.length - 1 - i]) return false;
//   }
//   return true;
// }
// palindrome("boob"); //

// function fizzBuzz(num) {
//   const result = [];
//   for (let i = 2; i <= num; i++) {
//     if (i % 6 === 0) {
//       result.push("Fizz Buzz");
//     } else if (i % 3 === 0) {
//       result.push("Buzz");
//     } else if (i % 2 === 0) {
//       result.push("Fizz");
//     }
//   }
//   return result;
// }
// fizzBuzz(12); //

// function maxChar(s) {
//   const acc = {};
//   let curMax = 0;
//   let MaxLetter = "";
//   for (let char of s) {
//     acc[char] = acc[char] + 1 || 1;
//     if (acc[char] > curMax) {
//       curMax = acc[char];
//       MaxLetter = char;
//     }
//   }
//   return MaxLetter;
// }
// maxChar("chocolate");

// function anagram(s, w) {
//   if (s.length !== w.length) return false;
//   let compare = [...w];
//   for (let char of s) {
//     if (w.indexOf(char) === -1) return false;
//     compare.splice(compare.indexOf(char), 1);
//   }
//   return compare.length === 0;
// }

// anagram("hello world", "world hello");

// function countVowels(s) {
//   const vowels = "aeiou";
//   let count = 0;
//   for (let char of s.toLowerCase()) {
//     if (vowels.includes(char)) count++;
//   }
//   return count;
// }
// countVowels("chocolate");

// function chunkArray(arr, num) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += num) {
//     result.push(arr.slice(i, i + num));
//   }
//   return result;
// }
// chunkArray([1,2,3,4,5], 3)

// function reverseArray(arr){
//   const result = [];
//   for(let item of arr){
//     result.unshift(item)
//   }
//   return result
// }
// reverseArray([9,1,4])

// function reversePhrase(phrase) {
//   const reverseWord = (w) => {
//     let reversed = "";
//     for (let i = 0; i < w.length; i++) {
//       reversed = w[i] + reversed;
//     }
//     return reversed;
//   };
//   let splitted = phrase.split(" ");
//   for (let i = 0; i < splitted.length; i++) {
//     splitted[i] = reverseWord(splitted[i]);
//   }
//   return splitted.join(" ");
// }

// reversePhrase("Allah is the greatest");

// function capitalize(w) {
//   return w[0].toUpperCase() + w.slice(1);
// }
// capitalize("foster");

// function cipher(s, n) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let output = "";
//   for (let i = 0; i < s.length; i++) {
//     const idx = alphabet.indexOf(s[i].toLowerCase());
//     if (idx === -1) {
//       output += s[i];
//     } else {
//       const newLetter = alphabet[(idx + n) % alphabet.length];
//       output +=
//         s[i].toUpperCase() === s[i] ? newLetter.toLocaleUpperCase() : newLetter;
//     }
//   }
//   return output;
// }

// cipher("I love JavaScript", 100);

// function ransomNote(note, magazine) {
//   const noteArr = note.split(" ");
//   const magArr = magazine.split(" ");
//   for (const word of noteArr) {
//     if (magArr.indexOf(word) === -1) return false;
//   }
//   return true;
// }

// ransomNote("oak is big", "big mono is oak");

// class MMM {
//   static mean(numArr) {
//     return numArr.reduce((acc, item) => acc + item) / numArr.length;
//   }
//   static median(arr) {
//     const numArr = arr.sort((a, b) => a - b);
//     const mid = ~~(numArr.length / 2);
//     if (numArr.length % 2 === 0) {
//       return (numArr[mid - 1] + numArr[mid]) / 2;
//     }
//     return numArr[mid];
//   }
//   static mode(numArr) {
//     const result = {};
//     let highestVal = 0;
//     let highestOccurrence = "";
//     for (const num of numArr) {
//       result[num] = result[num] + 1 || 1;
//       if (result[num] > highestVal) {
//         highestVal = result[num];
//         highestOccurrence = num;
//       }
//     }
//     return highestOccurrence;
//   }
// }
// MMM.mode([4, 5, 6, 10, 88, 6]);

function twoSum(arr, num) {
  const result = [];
  const checked = new Set();
  const target = new Set();
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (checked.has(curr)) continue;
    const diff = num - curr;
    if (target.has(curr)) {
      result.push([curr, diff]);
      checked.add(diff);
    } else {
      target.add(diff);
    }
    checked.add(curr);
  }
  return result;
}
// console.log(twoSum([4, 9, 2, 4, 1, 5, -3], 6)); //

// function flatten(arr) {
//   const clonedArr = [...arr];
//   const output = new Set();
//   while (clonedArr.length) {
//     const lastItem = clonedArr.pop();
//     if (Array.isArray(lastItem)) {
//       clonedArr.push(...lastItem);
//     } else {
//       output.add(lastItem);
//     }
//   }
//   return [...output].sort((a, b) => a - b);
// }
// flatten([[12, 14], 13, [18, 10, [100, 4]]]);

// function flatten(arr) {
//   let output = [];
//   function helper(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         helper(arr[i]);
//       } else {
//         output.push(arr[i]);
//       }
//     }
//   }
//   helper(arr);
//   return output.sort((a, b) => a - b);
// }

// function debounce(func, timeout) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   };
// }
// const throttle = (callback, delay) => {
//   let throttleTimeout = null;
//   let storedEvent = null;

//   const throttledEventHandler = (event) => {
//     storedEvent = event;

//     if (!throttleTimeout) {
//       callback(storedEvent);

//       storedEvent = null;

//       throttleTimeout = setTimeout(() => {
//         throttleTimeout = null;

//         if (storedEvent) {
//           throttledEventHandler(storedEvent);
//         }
//       }, delay);
//     }
//   };

//   return throttledEventHandler;
// };

// setTimeout(() => console.log("In 0 seconds"), 0);

// setImmediate(() => console.log("Ran immediately"));

// function currying(...a) {
//   const reduce = (arr) => {
//     return arr.reduce((a, b) => a + b, 0);
//   };
//   return function helper(...b) {
//     if (!b.length) return a[0];
//     return currying(reduce(a) + reduce(b));
//   };
// }
// console.log(currying(5, 2, 12)(6)(21)(5, 2, 12)(6)(4451)()); //
// console.log(currying(5, 2, 12)(6)(4451)(5, 2, 12)(6)(21)()); //

// class myArray {
//   constructor() {
//     this.data = {};
//     this.length = 0;
//   }

//   push(val) {
//     this.data[this.length] = val;
//     this.length++;
//   }
//   list() {
//     return Object.values(this.data);
//   }
// }

// const newArray = new myArray();
// newArray.push("One");
// newArray.push("Two");
// console.log(newArray.list());

// class hashTable {
//   constructor() {
//     this.table = new Array(10);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.table.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     const hashKey = this._hash(key);
//     if (this.table[hashKey]) {
//       if (this.table[hashKey][0][0] === key) {
//         this.table[hashKey][0][1] = value;
//       } else {
//         this.table[hashKey].push([key, value]);
//       }
//     } else {
//       this.table[hashKey] = [[key, value]];
//     }
//   }
// }

// const myTable = new hashTable();
// myTable.set("first", 10);
// myTable.set("first", 100);
// myTable.set("first", 1004);
// console.log(myTable.table);

// function getAllPrime(num) {
//   //@params number
//   //@return Array
//   const result = [];
//   outer: for (let i = 2; i < num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) continue outer;
//     }
//     result.push(i);
//   }
//   return result;
// }

// getAllPrime(10); //

// function direction_reduction(arr) {
//   const locMap = { NORTH: "SOUTH", SOUTH: "NORTH", WEST: "EAST", EAST: "WEST" };
//   const clonedArr = [...arr];
//   for (let i = 0; i < clonedArr.length - 1; i++) {
//     if (locMap[clonedArr[i]] === clonedArr[i + 1]) {
//       clonedArr.splice(i, 2);
//       i -= 2;
//     }
//   }
//   return clonedArr;
// }

// direction_reduction(["SOUTH", "WEST", "EAST", "NORTH", "WEST"]); //

// const cache = {};
// function fibonacci(num) {
//   //param number
//   //return number
//   let val = num;

//   if (val <= 2) return 1;
//   if (cache[val]) return cache[val];
//   const result = fibonacci(val - 1) + fibonacci(val - 2);
//   cache[val] = result;
//   return result;
// }

// function fibonacci(num) {
//   const table = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     table[i] = table[i - 2] + table[i - 1];
//   }
//   return table[table.length - 1];
// }

// fibonacci(8); //

// function makeStep(num) {
//   //params number;
//   //return string;
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += `${"#".repeat(i)} \n`;
//   }
//   return result;
// }

// makeStep(3);

// function pyramid(len) {
//   //params number
//   //return string

//   let result = "";
//   let count = 1;
//   for (let i = 1; i <= len; i++) {
//     result += `${"#".repeat(count)} \n`;
//     count += 2;
//   }
//   return result;
// }

// pyramid(3);

// function firstOccur(arr) {
//   const store = {};
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (store[item]) return item;
//     store[item] = true;
//   }
//   return "Unique Array";
// }

// firstOccur([2, 11, 3, 4, 19, 11, 12, 9, 23]); //

// function burbleSort(arr) {
//   if (arr.length < 2) return arr;
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//       }
//     }
//   }
//   return arr;
// }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curr;
  }
  return arr;
}
// console.log(selectionSort([4, 3, 1, 5, 9, 2]));
// console.time("Sorting");
// console.log(selectionSort(new Array(20000).fill().map(() => Math.random())));
// console.timeEnd("Sorting");

const movePivot = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
};
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = movePivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([3, 6, 8, 0, 9, 4, 2, 1]));
// }

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (j < arr2.length) result.push(...arr2.slice(j));
  if (i < arr1.length) result.push(...arr1.slice(i));
  return result;
}
// console.log(merge([3, 4, 5, 6, 007, 09], [1, 2, 3, 006, 8]));

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(right), mergeSort(left));
}

// console.log(mergeSort([4, 2, 0, -2, 99, 004]));

// function isAnagram(first, second) {
//   if (first.length != second.length) return false;
//   return [...first].sort().join("") === [...second].sort().join("");
// }

// console.log(isAnagram("sane", "sean"));

// function sherlockAndAnagrams(s) {
//   // Write your code here
//   let count = 0;
//   let hash = {};

//   for (let i = 0; i < s.length; i++) {
//     for (j = i; j < s.length; j++) {
//       const str = [...s.substring(i, j + 1)].sort().join("");
//       if (hash[str]) count += hash[str];
//       hash[str] = hash[str] + 1 || 1;
//     }
//   }
//   // console.log(count);
//   return count;
// }

// console.log(sherlockAndAnagrams("ifailuhkqq")); //3
// console.log(sherlockAndAnagrams("kkkk")); //10
// console.log(sherlockAndAnagrams("cdcd")); //5
// console.log(sherlockAndAnagrams("abba")); //4

function lcsRec(str1, str2) {
  function helper(n, m) {
    if (n < 0 || m < 0) return 0;
    if (str1[n] === str2[m]) return 1 + helper(n - 1, m - 1);
    return Math.max(helper(n - 1, m), helper(n, m - 1));
  }
  return helper(str1.length - 1, str2.length - 1, str1, str2);
}
// console.log(lcsRec("cool", "close"));

// Lowest common subsequence
function lcs(str1, str2) {
  const rowLen = str1.length;
  const colLen = str2.length;

  const arr = new Array(rowLen + 1)
    .fill()
    .map(() => new Array(colLen + 1).fill(0));

  for (let row = 1; row <= rowLen; row++) {
    for (let col = 1; col <= colLen; col++) {
      if (str1[row - 1] === str2[col - 1]) {
        arr[row][col] = 1 + arr[row - 1][col - 1];
      } else {
        arr[row][col] = Math.max(arr[row][col - 1], arr[row - 1][col]);
      }
    }
  }
  return arr[rowLen][colLen];
}

//
//
//
//
//
//
function subStr(str1, str2) {
  const [minStr, maxStr] =
    str1.length < str2.length ? [str1, str2] : [str2, str1];
  const maxMap = [...maxStr].reduce((a, e) => {
    a[e] = true;
    return a;
  }, {});
  for (let char of minStr) {
    if (maxMap[char]) return true;
  }
  return false;
}

// console.log("First");
// setImmediate(() => console.log("Second"));
// setTimeout(() => console.log("Third"), 155);
// setImmediate(() => console.log("Fourth"));

// const obj = {
//   _name: "Adejare",
//   talk: function () {
//     console.log(this._name, "from here");
//   },
// };

// const talker = obj.talk;
// talker();

const promise = new Promise((res, rej) => setTimeout(res, 500, "Oh my oh!"));
// promise.then(console.log);
// setTimeout((arg) => console.log(arg), 500, "Awesome ");
