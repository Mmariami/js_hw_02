// // Задание 1
// // Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого 
// элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
// // Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с 
// индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// // const logItems = function(array) {
// //   // твой код
// // };
// // /*
// //  * Вызовы функции для проверки работоспособности твоей реализации.
// //  */
// // logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// // logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


let fruitsArr = ['Mango', 'Apple' , 'Papaya' , 'Dragonfruit' , 'Pear'];
let numArr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function logItems(someArr) {
   
    for (let i=0 ; i<someArr.length; i++) {
        console.log(`${i+1} element - ${someArr[i]}`)
    } 
}

logItems(fruitsArr);
logItems(numArr);