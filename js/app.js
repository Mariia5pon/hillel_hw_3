/*
Створити скрипт який повинен виконувати наступне:

    питаємо у користувача, що він хоче зробити (add, sub, mult, div);
    питаємо у користувача перше число;
    запитуємо у користувача друге число;
    виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").
*/

let operation = prompt("Введіть операцію ( + , - , * , / ):");

let firstNumber = parseFloat(prompt("Введіть перше число:"));

let secondNumber = parseFloat(prompt("Введіть друге число:"));

let result;

switch(operation) {
    case '+':
        result = firstNumber + secondNumber;
        break;
    case '-':
        result = firstNumber - secondNumber;
        break;
    case '*':
        result = firstNumber * secondNumber;
        break;
    case '/':
        if (secondNumber !== 0) {
            result = firstNumber / secondNumber;
        } else {
            alert("Ділення на нуль!");
        }
        break;
    default:
        alert("Ви ввели неправильну операцію.");
}

if (result !== undefined) {
    alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
}