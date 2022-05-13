function removeDuplicates(obj) {
    const allKeys = Object.keys(obj).reverse();
    const row = allKeys.length;
    let newAllValues = [];
    let checker = "";
    let result = {};
    for (let i = 0; i < row; i++) {
        let times = obj[allKeys[i]].length;
        let tempArray = []; //Temporary Array for each iteration
        for (let j = 0; j < times; j++) {
            let currentLetter = obj[allKeys[i]][j]; //Current Letter to be checked
            if (checker.includes(currentLetter)) { //If it is in the checker, do nothing
                continue
            } else {
                tempArray.push(currentLetter); // If not in checker push to tempArray and add to checker
                checker += currentLetter;
            }
            newAllValues.push(tempArray); //After the inner iteration push to array of new values
        }
        result[allKeys[i]] = tempArray; //Create new value for the key in the result array
    }
    return result
}

module.exports = removeDuplicates;