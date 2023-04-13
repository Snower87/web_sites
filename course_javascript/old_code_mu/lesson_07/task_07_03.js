"use strict";
//=== Работа с регистром символов ===
//Задача №1. Дана строка 'js'. Сделайте из нее строку 'JS'.
//Понадобятся следующие методы: toUpperCase, toLowerCase.
function task_07_01() {
	var str = 'js';
	document.write(str.toUpperCase());
}

//Задача №2. Дана строка 'JS'. Сделайте из нее строку 'js'.
function task_07_02() {
	var str = 'js';
	document.write(str.toLowerCase());	
}

//=== Работа с length, substr, substring, slice. Работа с indexOf ===
//Понадобятся следующие методы: length, substr, substring, slice, indexOf.
//Задача №3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
function task_07_03() {
	var str = 'я учу javascript!';
	document.write(str.length);
}

//Задача №4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
function task_07_04() {
	var str1 = 'я учу javascript!';
	//1. Через substr
	str1.substr(2, 3) //от куда + сколько
	str1.substr(5, 10);
	//2. Через substring
	str1.substring(2, 5); //от куда, до куда
	str1.substring(5, 16);
	//3. Через slice
	str1.slice(2, 5); //от куда, до куда
	str1.slice(5, 16); //от куда, до куда
	document.write(str1.slice(5, 16));
}

//Задача №5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
function task_07_05() {
	var str = 'я учу javascript!';
	var index = str.indexOf('учу');
	document.write(index);
}

//Задача №6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
function task_07_06(n) {
	var str = 'Введите кол-во символов';
	if (str.length > n) {
		document.write(str.substr(0, n) + '...');
	} else {
		document.write(str);
	}	
}

//=== Работа с replace ===
//Задача №7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
function task_07_07() {
	var str = 'Я-учу-javascript!';
	document.write(str.replace(/-/g, '!'));
}

//=== Работа с split ===
//Задача №8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
function task_07_08() {
	var str = 'я учу javascript!';
	var arr = str.split(' ');
	document.write(arr);
}

//Задача №9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
function task_07_09() {
	var str = 'я учу javascript!';
	var arr = str.split('');
	for (var i = 0; i < arr.length; i++) {
		document.write(arr[i] + '</br>');
	}	
}

//Задача №10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
function task_07_10() {
	var str = '2025-12-31';
	var arr = str.split('-');
	var result = arr[2] + '.' + arr[1] + '.' + arr[0];
	document.write(result);
}

//=== Работа с join ===
//Задача №11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
function task_07_11() {
	var arr = ['я', 'учу', 'javascript', '!'];
	var str = arr.join('+');
	document.write(str);
}

//=== Задачи ===
//Задача №12. Преобразуйте первую букву строки в верхний регистр.
function task_07_12(str) {
	var arr = str.split('');
	var strWithFirstChAtUpperCase = arr[0].toUpperCase() + str.slice(1, str.length);
	return strWithFirstChAtUpperCase;
}

//Задача №13. Преобразуйте первую букву каждого слова строки в верхний регистр.
function task_07_13(str) {
	var arr = str.split(' ');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = task_07_12(arr[i]);
	}
	return arr.join(' ');
}

//Задача №14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
function task_07_14(str) {
	var arr = str.split('_');
	for (var i = 1; i < arr.length; i++) {
		arr[i] = task_07_12(arr[i]);
	}
	return arr.join('');
}

//document.write(task_07_12('введите')); // -> Введите
//document.write(task_07_13('мама мыла раму')); // -> Мама Мыла Раму
//document.write(task_07_14('var_test_text')); // -> varTestText
