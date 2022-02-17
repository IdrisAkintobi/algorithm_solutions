/*
Write the function camelize(str) that changes dash-separated words like “my-short-string”
into camel-cased “myShortString”.
That is: removes all dashes, each word after dash becomes uppercased.

Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

*/

//Using regular for loop
const camelize = (str) => {
    strArr = str.split("-");
    ans = [];
    ans.push(strArr[0]);
    for (let i = 1; i < strArr.length; i++) {
        newWord = strArr[i][0].toUpperCase() + strArr[i].slice(1);
        ans.push(newWord)
    }
    return ans.join("")
}

//Using Es6 methods
const _camelize = (str) => {
    ans = str.split("-")
        .map((word, index, arr) => word == arr[0] ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
    return ans
}