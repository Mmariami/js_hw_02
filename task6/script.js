const message = 'please enter the number';
let input = prompt(message);
const numbers = [];
let total = 0;

while (input) {
    if(!isNaN(input)){
        numbers.push(input);
        total += parseInt(input);
    } else alert('Было введено не число, попробуйте еще раз');
    input = prompt(message);
}


console.log(`Общая сумма чисел равна ${total}`);