//"use strict";

//import { inArray } from './task_16_01.js';
//import expObject from './task_16_01.js';

//			 << Практика использования пользовательских функций >>

//Задача №1: Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

function ucfirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);;
}

//var str = 'hello, task';
//alert(ucfirst(str));

//Задача №2: Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
function task_16_02(str ) {
	var masStr = str.split('_');
	var result = "";
	for (var i = 0; i < masStr.length; i++) {
		if (i == 0) {
			result += masStr[i];
		} else {
			result += ucfirst(masStr[i]);			
		}		
	}
	return result;
}

//var str = 'var_text_hello';
//alert(task_16_02(str));

//Задача №3: Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

function inArray2(elem, arr) {
	inArray(elem, arr);
}

//inArray2();

//var arr = [1, 2, 3, 4, 5];
//alert(inArray(7, arr)); //выведет 3

//Задача №4: Дана строка, например, '123456'. Сделайте из нее '214365'.
function swap(a, b) {
	return b + a;
}

function task_16_04(str) {
	var arr = str.split('');
	var rslt = '';
	var length = str.length;
	for (var i = 0; i < length; i = i + 2) {
		rslt += swap(arr[i], arr[i + 1]);
	}
	return rslt;
}

var str = '123456';
alert(task_16_04(str));