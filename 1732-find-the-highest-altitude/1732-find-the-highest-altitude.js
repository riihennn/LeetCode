var largestAltitude = function(gain) {
    let max = 0, curr = 0;

    for (let g of gain) {
        curr += g;
        if (curr > max) max = curr;
    }

    return max;
};