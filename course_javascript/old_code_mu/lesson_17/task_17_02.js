"use strict";

//Задача №1: Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл. Показать решение.

var myArr = [1, 5, 10, 22, 17, 84, 125, 37, 80];

function task_17_01(arr) {
	document.write(arr.shift() + '<br>');

	if (arr.length != 0) {
		task_17_01(arr);
	}
}

//task_17_01(myArr);


//Задача №2: Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

var myNum = 1233112359;
var i = 0;
var num9 = 0;

function task_17_02(num) {
	var strCh = String(myNum).split('');
	var ch = String(num).charAt(i);
	if (num9 + Number(ch) <= 9) {
		//var ch = String(num).charAt(i++);
		document.write(ch + '<br>');
		num9 += Number(ch);
		i++;
		task_17_02(num);
	}
}

task_17_02(myNum);