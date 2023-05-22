"use strict";

//Задача №1. Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
function task_11_01() {
	var arr = [1, 2, 3, 10, 20, 5];
	var flag = false;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 5) {
			flag = true;
		}
	}
	return flag;
}

//Задача №2. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', а если делится - выведите 'true'.

function task_11_02(num) {
	var result = false;
	for (var i = 2; i <= num; i++) {
		if (num % i == 0) {result = true}
	}
	var str = 'false, не делится';
	if (result) {str = 'true, делится'}
	return str;
}
//alert(task_11_02(3));

//Задача №3.  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
function task_11_03(in_mass) {
	var result = 'длина массива меньше 2х элементов';

	//1. Проверка на длину массива 
	if (in_mass.length < 2) {return result;}		

	result = 'нет, не одинаковые';
	//2. Проверка со 2го элемента
	for (var i = 1; i < in_mass.length; i++) {
		var pred_elem = in_mass[i - 1];
		var this_elem = in_mass[i];

		if (this_elem == pred_elem) {
			result = 'да, одинаковые';
		}
	}
			

	return result;
}

var mass = [1, 2, 3, 10, 11, 20, 21, 22];
alert(task_11_03(mass));