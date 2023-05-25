"use strict";

//			 << Использование пользовательских функций >>

//Задача №1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
function isNumberInRange(num) {
	return num > 0 && num < 10 ? true : false;
}
//alert(isNumberInRange(15));

//Задача №2. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

function task_15_02() {
	var arr = [1, 2, 3, 9, -1, -20, 5, 99, 30, 4];
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (isNumberInRange(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	alert(newArr);
}

//Задача №3. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(num) {
	var arrDigitStr = String(num).split(''); //массив строк
	var arrDigitNum = arrDigitStr.map(Number); //массив чисел
/*	
	//Вариант №1
	var sum = 0;
	arrDigitStr.forEach(x => {
		sum += Number(x);
	});
	return sum;

	//Вариант №2
	return arrDigitStr.reduce((a, b) => Number(a) + Number(b), 0);
*/
	//Вариант №3
	return arrDigitNum.reduce(function (x, y) {
		return x +y;
	}, 0);

	//Вариант №4	
	//return arrDigitNum.reduce(Math.sum); // не работает!

	//Вариант №5	

	//return [1,2,3].reduce(Math.sum);
}
//alert(getDigitsSum(123));

//Задача №4. Найдите все года от 1 до 2023, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
function task_15_04() {
	for (var years = 1; years <= 2023; years++) {
		if (getDigitsSum(years) == 13) {
			console.log(years);
		}
	}
}

//Задача №5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven(num) {
	return num % 2 == 0 ? true : false;
}
//alert(isEven(-3));

//Задача №6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
function task_15_06() {
	var arr = [1, 2, 3, 4, 5, 10, 11, 12, 20, 21];
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (isEven(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	console.log(newArr);
}

//Задача №7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors(num) {
	var delimiters = [];
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) {
			delimiters.push(i);
		}
	}
	console.log("делители: " + delimiters);
}

getDivisors(123); //делители: 1,3,41,123
getDivisors(13); //делители: 1,13