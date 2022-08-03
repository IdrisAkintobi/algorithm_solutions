/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
  let rowNum = array[0].length;
  let colNum = array.length;

  const outerArray = [];
  for (let row = 0; row < rowNum; row++) {
    let innerArray = [];
    for (let col = 0; col < colNum; col++) {
      // Inner loop that takes the nth(row) of each columns
      innerArray.push(array[col][row]);
    }
    outerArray.push(innerArray);
  }
  return outerArray;
}

module.exports = transpose;
