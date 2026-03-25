var mostWordsFound = function(sentences) {
    let max = 0;
    for (let s of sentences) {
        max = Math.max(max, s.split(" ").length);
    }
    return max;
};