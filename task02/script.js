const calculateEngravingPrice = function (message, pricePerWord) {
    let splitArr = message.split(" ");
    message = splitArr.length

    return message * pricePerWord
}


let sentence = 'Mariam will become front-end Developer'
console.log (calculateEngravingPrice(sentence,10));

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis',20));