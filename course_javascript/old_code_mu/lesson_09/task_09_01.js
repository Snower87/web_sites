"use strict";

//Задача №1. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения. 
function task_09_01() {
	var str = "привет, пользователь";
	var arr = str.split('');
	var Result = arr[0].toUpperCase() + str.substr(1, str.length);
	document.write(Result);
}

//Задача №2. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
function task_09_02() {
	var str = "123456";
	var result = str.split('').reverse();
	document.write(result.join(''));
}

//Задача №3. Проверьте, что строка начинается на http://
function task_09_03() {
	var str = "http://web-course.ru/index.html";
	var contains = str.includes("http://");
	var ind = str.indexOf("http://");
	if (contains) {
		document.write("Да, " + ind + " символ");
	} else {
		document.write("Нет, не содержит");
	}	
}

//Задача №4. Проверьте, что строка заканчивается на .html
function task_09_04() {
	var str = "http://web-course.ru/index.html";
	var contains = str.includes(".html");
	var ind = str.indexOf(".html");
	if (contains && (ind == str.length - ".html".length)) {
		document.write("Да, заканчивается на " + ind + " символ");
	} else {
		document.write("Нет, не заканчивается");
	}	
}

task_09_04();