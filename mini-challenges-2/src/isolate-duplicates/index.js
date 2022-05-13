function isolateDuplicates(text) {
    let newAns = "";
    let multiple = {};
    let count = 0;
    // If text is not a string throw an error
    if (typeof text !== "string") throw new Error("Please enter a valid string")

    const str = text.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (str[i].repeat(2) === str[i - 2] + str[i - 1]) {
            // Condition runs if the two char before this is same as twice of this
            if (!multiple[str[i]]) {
                multiple[str[i]] = text[i]; // if !this Create this in Object(multiple)
            } else { multiple[str[i]] += text[i] } // Add this to the value of Object(multiple)[str[i]]
            if (str[i] !== str[i + 1]) {
                newAns += "[" + multiple[str[i]] + "]";
                count += 1; // Count the number of occurence
                multiple = {}; // Reset to avoid conflict in repeated chr
            }
        } else { newAns += text[i]; }
    }
    return [newAns, count]
}
module.exports = isolateDuplicates;