"use strict";

/*
1. Флаг - это специальная переменная, которое может принимать только два значения: true и false. С помощью флагов можно решать задачи, проверяющие отсутствие чего-либо: к примеру, можно проверить, что в массиве нет элемента с определенным значением. 

2. Пример №1 работы с флагами:
var arr = ['a', 'b', 'c', 'd', 'с'];
var flag = false; //считаем, что элемента 'c' нету в массиве

for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 'c') {
		flag = true; //элемент есть - переопределим переменную flag
		break;
	}
}

if (flag === true) {
	alert('Есть');
} else {
	alert('Нет');
}

3. Флаги в функции:

function hasElem(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 'c') {
			return true;
		}
	}

	return false; //элемент 'c' не найден
}
var arr = ['a', 'b', 'c', 'd', 'с'];
alert(hasElem(arr));
*/

