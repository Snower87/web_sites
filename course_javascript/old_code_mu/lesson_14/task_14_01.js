"use strict";

/*
Пример №1. Давайте заполним массив десятью иксами 'x'. Для этого воспользуемся методом push:
var arr = [];
for (var i = 0; i < 10; i++) {
	arr.push('x');
}

alert(arr);

Пример №2. Указать ключи напрямую:
var arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] = 'x';
}

alert(arr);

//Пример №3. Переворот объекта
var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
var result = {};

for (var key in obj) {
	result[obj[key]] = key;
	//document.write(key);
}
console.log(result); //выведет {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}

//Пример №4. Подсчет количества элементов
var arr = ['a', 'b', 'c', 'a', 'a', 'b'];
var count = {a: 0, b: 0, c: 0};

for (var i = 0; i < arr.length; i++) {
	count[arr[i]]++;
}
console.log(count); 

//Пример №5. Пусть объект count формируется автоматически таким образом: если такого элемента в count нет, то ему следует присвоить значение 1, а если есть - просто увеличить значение на единицу:
var arr = ['a', 'b', 'c', 'a', 'a', 'b'];
var count = {};

for (var i = 0; i < arr.length; i++) {
	if (count[arr[i]] === undefined) {
		count[arr[i]] = 1;
	} else {
		count[arr[i]]++;
	}	
}

console.log(count);

//Пример №6. Перебор многомерных массивов
var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
}
*/