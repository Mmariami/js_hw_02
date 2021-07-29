const formatString = (str) => {
    if (str.length < 40) {
        return str;
    }
    return `${str.substr(0, 40)} ...`
}

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
