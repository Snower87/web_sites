"use strict";

/* Пример 1. Возведение числа в куб
function cube($num) {
	return $num * $num * $num
}

alert(cube(2));
*/

//Задача №1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function task_10_01(n) {
	return n * n;	
}
//alert(task_10_01(3));

//Задача №2. Сделайте функцию, которая возвращает сумму двух чисел.
function task_10_02(a, b, c) {
	return a + b + c;
}
//alert(task_10_02(1, 2, 3));

//Задача №3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function task_10_03(n1, n2, n3) {
	return ((n1 - n2) / n3);
}
//alert(task_10_03(10, 2, 2));

//Задача №4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function task_10_04(num_nedeli) {
	var str_nedeli;
	switch(num_nedeli) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			str_nedeli = num_nedeli + ", будни (1..5)";
			break;
		case 6:
		case 7:
			str_nedeli = num_nedeli + ", выходные (6..7)";
			break;
		default:
			str_nedeli = num_nedeli + ", введите 1-7 числа";
			break;		
	}
	return str_nedeli;
}
//alert(task_10_04(10));