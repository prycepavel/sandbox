"use strict";

// старый формат объединения (конкатенация)
const category = 'toys';
console.log('http//someurl.com/' + category);

// интерполяция
console.log(`http//someurl.com/${category}/5`);

const user = 'Ivan';

alert(`Привет, ${user}`);