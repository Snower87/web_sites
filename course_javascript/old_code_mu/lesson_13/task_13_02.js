"use strict";

//Задача №1. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

function task_13_01() {
	var str = '';
	for (var i = 1; i < 10; i++) {
		str += i;			
	}
	alert(str)
}

//Задача №2. С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.

function task_13_02() {
	var str = '';
	for (var i = 9; i > 0; i--) {
		str += i;			
	}
	alert(str)	
}

//Задача №3. С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.

function task_13_03() {
	var str = '';
	for (var i = 1; i < 10; i++) {
		str += '-' + i;			
	}
	alert(str)
}

/* Задача №4. Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

function task_13_04() {
	for (var i = 0; i < 20; i++) {
		var str = '';
		for (var j = 0; j < i; j++) {
			str += 'x';
		}
		document.write(str + '<br>');
	}
}

/* Задача №5.  С помощью двух вложенных циклов нарисуйте следующую пирамидку:

1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

function task_13_05() {
	for (var i = 1; i < 10; i++) {
		var str = '';
		for (var j = 0; j < i; j++) {
			str += i;
		}
		document.write(str + '<br>');
	}
}

/* Задача №6. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx
*/

function task_13_06() {
	for (var i = 1; i < 6; i++) {
		var str = '';
		for (var j = 0; j < i; j++) {
			str += 'xx';
		}
		document.write(str + '<br>');
	}
}

task_13_06();