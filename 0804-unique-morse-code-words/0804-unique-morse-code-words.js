var uniqueMorseRepresentations = function(words) {
    const morse = [
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
        "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-",
        "..-","...-",".--","-..-","-.--","--.."
    ];

    let set = new Set();

    for (let word of words) {
        let code = "";
        for (let ch of word) {
            code += morse[ch.charCodeAt(0) - 97];
        }
        set.add(code);
    }

    return set.size;
};