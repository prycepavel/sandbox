"use strict";

// КОНКАТЕНАЦИЯ
console.log('arr' + ' - object');

// Унарный плюс: сложение с помощью оператора + перед строкой
console.log(4 + +'5');

// ИНКРЕМЕНТ И ДЕКРЕМЕНТ
let incr = 10,
    decr = 10;

incr++; // опреатор инкремента, увеличение значения на единицу
decr--; // опреатор декремента, уменьшение значения на единицу

console.log(incr);
console.log(decr);

let deduction = 10,
    addition = 10;

// если в постфиксной форме сразу изменить и посмотреть значение,
// сначало вернётся старое значение, и только потом будет результат сложения или вычетания
console.log(deduction++);
console.log(addition--);

// постфиксная форма записи, когда операторы стоят после значения
deduction++;
addition--;

// префиксная форма записи, когда операторы стоят до значения
++deduction;
--addition;

/* ОСТАТОК ОТ ДЕЛЕНИЯ
// Остаток от деления двух чисел, 5 делиться на 2 столько, сколько это возможно,
// результат остаток от деления
*/
console.log(5 % 2);

// ПРИСВАИВАНИЕ И РАВЕНСТВО
// Присваивание (=)
let assign = 10;

// Проверка равенства (==) по значению
console.log(2 * 4 == 8); // true
console.log(2 * 4 == '8'); // true

// Строгая проверка равенства (===) по типу данных
console.log(2 * 4 === 8); // true
console.log(2 * 4 === '8'); // false

/* ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
В динамической типезаци 0, ''(пустая строка), null, NaN, undefined всегда будут false
Всё остальное всегда будет true
Результатом логических операций является булевое значение
*/
// оператор (И) работает тогда, когда 2 или более значений являются истиными
let isChecked = true,
      isClose = true;
console.log(isChecked && isClose); // true

isChecked = true;
isClose = false;

console.log(isChecked && isClose); // false

// оператор (ИЛИ) работает тогда, когда 1 значение является истиным
console.log(isChecked || isClose); // true

// оператор отрицания (!) правду обращает в ложь и наоборот
console.log(!isChecked || isClose); // false

// порядок выполнения операторов
console.log((2 + 2) * 2 === 8); // скобки указывают приоритетность вычисления

// Примеры
// const hamburger = 5;
// const fries = 0;
// if (hamburger && fries) {
//   console.log('Я сыт');
// }
// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// Если запустить логические операторы с определёнными значениями не true и false,
// они будут возвращать сами значения, если одно или несколько значений будут ложными,
// оператор &&(и) вернёт первое ложное значение, а если все значения будут правдивые,
// оператор вернёт последнее значение на котором он остановился
// console.log(hamburger === 3 && fries);

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log('Все сыты!');
// } else {
//   console.log('Мы уходим!');    
// }

// &&(и) запинается на лжи, а ||(или) на правде
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'string');


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

// оператор ||(или) останавливается на первом значение true
// если все значения false оператор останавливвается на последнем ложном значении
if (hamburger || cola || fries) {
  console.log('Все довольны!');
} else {
  console.log('Мы уходим!');    
}

let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);

// Комбинация операторов
if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
  console.log('Все довольны!');
} else {
  console.log('Мы уходим!');    
}


