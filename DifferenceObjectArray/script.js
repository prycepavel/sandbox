"use strict";

// Объект
// в свойствах могут содержаться любые типы данных
// формат записи свойств "ключ: значение"
const obj = {
  name: 'John',
  age: 25,
  isMarried: false
};

// чтобы получить доступ к свойствам объекта нужно использовать .(точку) или [](квадратные скобки), рекомендовано через точку
console.log(obj.name);
console.log(obj['age']); // свойство обязательно нужно заключить в строку

const object = { a: 1, b: 2 }; // храенение данных ключ/значение, порядок не имеет значения

// свойство Anna записаное без кавычек, также является строкой, как 'Alice'
const salary = {
  Anna: 500,
  'Alice': 800
};

const arrObj = {
  0: 'a',
  1: 'b',
  2: 'c',
  // создание вложенной структуры
  abc: {
    df: [{}, [], {}],
    def: {
    
    }
  }
};

// если в качестве свойств стоят числа или кирилица, обратиться к нужному свойству можно через arrObj[0](квадратные скобки)
console.log(arrObj[0]);

// если объявить переменную, её можно добавить в качестве свойства в объект, такое свойство является динамическим
const s = 'с';

// создание нового свойства внутри объекта
arrObj.a = '1234';
arrObj['b'] = '1234';
arrObj[s] = [1, 2]; // при добавлении переменной свойством объекта, станет содержимое переменной, а значения свойства будут присвоены

console.log(arrObj['a']);
console.log(arrObj.b);
console.log(arrObj.с);

// Массив
// может хранить любые типы данных
// является частным случаем объекта, используется для хранения данных идущих строго по порядку
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 7, {}, []];

// чтобы обратиться к каждому элементу массива по порядку, нужно указать номер(индекс) элемента(значения), номерация начинается с 0
console.log(arr[1]);

// массив в качестве ключа(свойства) использует номер(индекс) элемента(значения) по порядку
//              0    1    2
const array = ['a', 'b', 'c']; // хранение элементов по порядку

console.log(arr[1]);



const arrObjTest = {
  a: 'a',
};

const m = 's';


arrObjTest[m] = '1234';

console.log(arrObjTest.s);