"use strict";

//		 << Практика использования пользовательских функций  >>

//Задача №1: реализуйте функцию inArray, которая будет проверять, есть ли в массиве элемент с таким значением или нет. 
//Первым параметром функция должна принимать значение, а вторым - массив. Если такой элемент есть - функция должна вернуть true, а если нет - false.

function inArray(value, arr) {
	for (var i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				return true;
			}
		}
	return false;	
}
/*
var arr = [1, 2, 3, 4, 5];
alert(inArray(7, arr)); //выведет 3
*/

//Задача №2: реализуйте функцию isSimple, которая параметром будет принимать число и проверять, простое оно или нет. Простое число - это число, которое не делится ни на одно другое число (кроме как на 1 и на само себя - на это делятся все числа). Если число простое - функция должна вернуть true, в противном случае false.

/*
function isSimple(num) {
	if (num % 2 == 0) {
		return true;
	}
	return false;
}

alert("10 is " + isSimple(10)); //выведет true
*/

//Задача №3: реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].


function getDivisors(num) {
	var arr = [];
	for (var i = 1; i < num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}		
	}
	return arr;
}

//alert(getDivisors(24)); //выведет [1, 2, 3, 4, 6, 12, 24]


//Задача №4: реализуйте функцию getIntersection, которая параметрами будет принимать два массива и возвращать массив элементов, которые есть и в одном, и во втором массиве (это называется пересечение массивов). К примеру, getIntersection([1, 2, 3], [2, 3, 4]) должно вернуть [2, 3].


function getIntersection(arr1, arr2) {
	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		if (inArray(arr1[i], arr2)) {
			result.push(arr1[i]);
		}
	}
	return result;
}

//alert(getIntersection([1, 2, 3], [2, 3, 4])); //выведет [2, 3]

//Задача №5: реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать наибольший общий делитель (НОД) этих двух чисел. К примеру, для чисел 12 и 18 НОД равен 6.

function getGreatestCommonDivisor(num1, num2) {
	var divisors = getIntersection(getDivisors(num1), getDivisors(num2)); // ['2', '3', '6']
	return Number(Math.max.apply(null, divisors));
}

//alert(getGreatestCommonDivisor(12, 18)); //выведет 6

//export default { inArray, getIntersection, getGreatestCommonDivisor} 