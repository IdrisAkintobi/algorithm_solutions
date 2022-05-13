const MORSE_CODE = {
    "-.-.--": "!",
    ".-..-.": '"',
    "...-..-": "$",
    ".-...": "&",
    ".----.": "'",
    "-.--.": "(",
    "-.--.-": ")",
    ".-.-.": "+",
    "--..--": ",",
    "-....-": "-",
    ".-.-.-": ".",
    "-..-.": "/",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    "..--..": "?",
    ".--.-.": "@",
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "..--.-": "_",
    "...---...": "SOS",
};

Object.freeze(MORSE_CODE);

function convWord(code) {
    let realWord = code.split(" ").map((char) => MORSE_CODE[char.trim()]);
    return realWord.join("")
}

function morse(text) {
    if (typeof text != "string") throw new Error("Please provide a morse string")
    if (text.indexOf("   ") >= 0) { //       If there's space, then split to words
        text = text.split("   ");
        const realSentence = text.reduce((sentence, word) => { //      On each words invoke convWord to decode each word
            if (convWord(word.trim())) { //      If it not all whitespace add it to the sentence else make it a space and add.
                return sentence = sentence + convWord(word.trim()) + " ";
            } else { return sentence += " " }
        }, "");
        return realSentence.trim()
    } else return convWord(text)
}
module.exports = morse;