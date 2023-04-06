"use strict";

//Задача №1. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
function task_01() {
	var a = 10;
	document.write('Задача №1. ');
	if (a == 10) {document.write('Верно');} else {document.write('Неверно');}
}

//Задача №2. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
function task_02() {
	var min = 25;
	document.write('Задача №2. ');
	if (min >= 0 && min < 15) document.write('1/4');
	if (min >= 15 && min < 30) document.write('2/4');
	if (min >= 30 && min < 45) document.write('3/4');
	if (min >= 45 && min < 60) document.write('4/4');	
}

//Задача №3. Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.

//Решение через 2 if:
function task_03_1() {
	var lang = 'ru';
	if (lang == 'ru') {
		var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'субб', 'вс'];
	}
	if (lang == 'eng') {
		var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday ']
	}
	document.write('Задача №3.1 ' + arr.join(', '));
}

//Решение через switch-case:
function task_03_2() {
	var lang = 'eng';
	switch(lang) {
		case 'ru':
			var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'субб', 'вс'];
		break;
		case 'eng':
			var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '];
		break;		
		default:
		break;
	}
	document.write('Задача №3.2 ' + arr.join(', '));
}

//Решение через многомерный массив:
function task_03_3() {
	var lang = 'ru';
	var arr = {
		'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'субб', 'вс'],
		'eng': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday ']
	}

	document.write('Задача №3.3 ' + arr['ru'].join(', '));
}

task_01();
document.write('<br \/>');
task_02();
document.write('<br \/>');
task_03_1();
document.write('<br \/>');
task_03_2();
document.write('<br \/>');
task_03_3();