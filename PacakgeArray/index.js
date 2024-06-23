function sumArray(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Input should be an array');
    return arr.reduce((sum, num) => sum + num, 0);
}



function removeDuplicates(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Input should be an array');
    return [...new Set(arr)];
}


module.exports = {
    sumArray,
    removeDuplicates
};