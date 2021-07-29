const findLongestWord = function (string) {
    let splitArr = string.split(" "); 
    let longest = '';
    for (let index in splitArr) {
        let word = splitArr[index];
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestWord('May the force be with you'))
console.log(findLongestWord('lorem ipsum dolor sit'))