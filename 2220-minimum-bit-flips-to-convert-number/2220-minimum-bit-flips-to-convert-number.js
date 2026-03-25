var minBitFlips = function(start, goal) {
    let diff = start ^ goal;
    let count = 0;

    while (diff > 0) {
        count += diff & 1;  // check last bit
        diff >>= 1;         // shift right
    }

    return count;
};