"use strict";

// === Работа с % ===
 //Задача №1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b. Показать решение.
function task_06_01() {
	var a = 10;
	var b = 3;
	document.write(a % b);
}

 //Задача №2. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления. Показать решение.
function task_06_02() {
	var a = 9;
	var b = 3;
	if (a % b == 0) {
		document.write('Делится');
	} else {
		document.write('НЕ Делится! без остатка');
	}
}

// === Работа со степенью и корнем ===
//Для решения задач данного блока вам понадобятся следующие методы: Math.pow, Math.sqrt.
// Math.pow(число, степень)
// Пример: Math.pow(3, 4) = 81
// Math.sqrt(положительное число)
// Пример: Math.sqrt(4) = 2

//Задача №3. Возведите 2 в 10 степень. Результат запишите в переменную st.
function task_06_03() {
	document.write(Math.pow(2, 10));
}

//Задача №4. Найдите квадратный корень из 245.
function task_06_04() {
	document.write(Math.sqrt(245));
}

//Задача №5.  Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
function task_06_05() {
	var arr = [4, 2, 5, 19, 13, 0, 10];
	var rsl = 0;
	for (var i = 0; i < arr.length; i++) {
		rsl += Math.sqrt(arr[i]);
	}
	document.write(rsl);
}

// === Работа с функциями округления ===
//Для решения задач данного блока вам понадобятся следующие функции: Math.round, Math.ceil, Math.floor, toFixed, toPrecision.
//Math.round выполняет округление до ближайшего целого числа по правилам математического округления.
//Math.round(6.4) = 6
//Math.floor производит округление числа до целых всегда в меньшую сторону.
//Пример: Math.floor(2.9999) = 2
//Math.ceil производит округление дробного числа до целого всегда в большую сторону.
//Пример: Math.ceil(3.00001) = 4

//Метод toFixed производит округление числа до указанного знака в дробной части.
//Количество знаков указывается параметром. Если число знаков не указано, то по умолчанию берется 0 знаков, то есть округление до целого числа.
//Пример 1:
//let num = 1.1119;
//console.log(num.toFixed(3)); // -> 1.112
//Пример 2:
//let num = 1.111;
//console.log(num.toFixed()); // -> 1
//Пример 3:
//let num = 1.1111;
//console.log(num.toFixed(6)); // -> 1.111100

//Задача №6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
function task_06_06() {
	var num = 379;
	var sqrt = Math.sqrt(num);
	document.write('num = ' + num + '</br>');
	document.write('sqrt = ' + sqrt  + '</br>');
	document.write('num. = ' + num.toFixed() + '</br>');
	document.write('num.1 = ' + num.toFixed(1) + '</br>');
	document.write('num.10 = ' + num.toFixed(2) + '</br>');
}	

//Задача №7. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
function task_06_07() {
	var num = 587.1;
	var obj = {
		'num': num,
		'floor': 0,
		'ceil': 0
	};
	var sqrt = Math.sqrt(num);
	obj['floor'] = Math.floor(num);
	obj['ceil'] = Math.ceil(num);
	document.write('num = ' + num + '</br>');	
	document.write('sqrt = ' + sqrt  + '</br>');
	document.write('floor = ' + obj['floor']  + '</br>');
	document.write('ceil = ' + obj['ceil']  + '</br>');
}

// === Нахождение максимального и минимального числа ===
//Для решения задач данного блока вам понадобятся следующие методы: Math.max, Math.min.

//Задача №8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
function task_06_08() {
	var arr = [4, -2, 5, 19, -130, 0, 10];
	document.write('max ' + Math.max(...arr) + '</br>');
	document.write('min ' + Math.min.apply(null, arr) + '</br>');
}

// === Работа с рандомом ===
//Для решения задач данного блока вам понадобятся следующие методы: Math.random.
/*
//Получение случайного дробного числа между min и max:
function getRandomArbitary(min, max) {
	return Math.random() * (max - min) + min;
}

//Получение случайного целого числа между min и max:
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

//Задача №9. Выведите на экран случайное целое число от 1 до 100.
function task_06_09(min, max) {
	var random = Math.floor(Math.random() * (max - min + 1)) + min;
	document.write(random);
}

//Задача №10. Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). Показать решение.
function task_06_10(min, max) {
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
		document.write(arr[i] + '</br>');
	}
}

// === Работа с модулем ===
//Для решения задач данного блока вам понадобятся следующие методы: Math.abs.

//Задача №11. Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
function task_06_11(a, b) {
	document.write(Math.abs(a - b));
}

//Задача №12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
function task_06_12(a, b) {
	var c = Math.abs(a - b)
	document.write(c);
}

// === Задачи ===

//Задача №13. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
function task_06_13() {
	var arr = [12, 15, 20, 25, 59, 79];
	var summa = arr.reduce((sum, current) => sum + current, 0);
	document.write(summa / arr.length);
}

//Задача №14. Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
function task_06_14(n) {
	var factorial = 1;
	while(n > 1) {
		factorial *= n;
		n--;
	}
	document.write(factorial);
}

task_06_06();