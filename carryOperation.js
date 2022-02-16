/*
Task Description
In addition (arithmetic operation), a carry refers to a digit that is transferred
from one column to the adjacent column on the left when the result of the addition
cannot be represented by a single digit. For example:
  55
+ 29
----
  84
In this example, 5 + 9 = 14, which cannot be represented by a single digit, so the 1 is carried
to the column on the left and added to the result of 5 + 2.

Write a function that given two numbers returns the total count of carry operations performed while adding them.
Example:
numberOfCarryOperations(65, 55) // 2
65 + 55 =>
1st column: 5 + 5 = 0 (1 is carried)
2nd column: 6 + 5 + 1 (carried) = 2 (1 is carried)
3rd column: 1 (carried) = 1
=> 120 (2 carry operations)
*/
/*
==== Test Cases =====
numberOfCarryOperations(123, 456) // 0
numberOfCarryOperations(555, 555) // 3
numberOfCarryOperations(900, 11) // 0
numberOfCarryOperations(145, 55) // 2
numberOfCarryOperations(0, 0) // 0
numberOfCarryOperations(1, 99999) // 5
numberOfCarryOperations(999045, 1055) // 5
numberOfCarryOperations(101, 809) // 1
numberOfCarryOperations(189, 209) // 1
*/



function numberOfCarryOperations(num1, num2) {
	//Get the max number, convert all number to string to make it iterable
    let maxNum = Math.max(num1, num2);
    maxNum = String(maxNum);
    num1 = String(num1);
    num2 = String(num2);
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");

    let count = 0;
    let carryOver = 0;
    for (let i = 0; i < maxNum.length; i++) {
        //If there's no value at the current iteration give it the value of 0
		//If there's value, convert it to a number
        let first = (!num1[i]) ? 0 : Number(num1[i]);
        let second = (!num2[i]) ? 0 : Number(num2[i]);
		//carryOver is the remainder
        let ans = carryOver + first + second;
        if (ans >= 10) {
            carryOver = ans - 9;
			count++;
        }
    }
    return count
}