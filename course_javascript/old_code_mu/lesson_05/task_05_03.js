"use strict";

// === Циклы while и for ===

//Задача №1. Выведите столбец чисел от 1 до 100.
function func_05_01() {
	for (var i = 0; i <= 100; i++) {
		document.write(i + '</br>');
	}
}

//Задача №2. Выведите столбец чисел от 11 до 33.
function func_05_02() {
	for (var i = 11; i <= 33; i++) {
		document.write(i + '</br>');
	}
}

//Задача №3. Выведите столбец четных чисел в промежутке от 0 до 100.
function func_05_03() {
	for (var i = 0; i <= 100; i++) {
		if ((i % 2) == 0) {
			document.write(i + '</br>');
		}		
	}
}

//Задача №4. С помощью цикла найдите сумму чисел от 1 до 100.
function func_05_04() {
	var summ = 0;
	for (var i = 0; i <= 100; i++) {
		summ += i;
	}
	document.write('Сумма равна = ' + summ);
}

// === Работа с for для массивов ===

// === Работа с for-in ===

// === Задачи ===

func_05_04();