"use strict";

//			 << Заполнение массивов >>

//Задача №1. Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

function task_14_01() {
	var mass = [];
	//Вариант №1
	/*
	for (var i = 0; i < 10; i++) {
		mass[i] = i;
		console.log(mass[i]);
	}
	*/
	//Вариант №2
	for (var i = 0; i < 10; i++) {
		mass.push(i);
		console.log(mass[i]);
	}	
}

//Задача №2. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.
function task_14_02() {
	var arr = [];
	for (var i = 1; i < 6; i++) {
		//arr[i] = ('' + i + 1).repeat(i + 1);
		var str = '';
		for (var j = 0; j < i; j++) {
			str += i;				
		}
		arr[i] = str;
		document.write(arr[i] + '<br>');
	}	
}

//Задача №3. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. Показать решение.
function task_14_03(ch, number_ch) {
	var arr = [];
	for (var i = 0; i < number_ch; i++) {			
		arr[i] = ch;
	}
	document.write(arr + '<br>');
}
//task_14_03('ab', 5);

//Задача №4. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
function task_14_04() {
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var summ = 0;
	var index = 0;
	for (var i = 0; i < arr.length; i++) {
		if (summ + arr[i] > 10) {
			break;
		} else {
			summ += arr[i];
			index = i;
		}					
	}
	document.write('индекс = ' + index + ', а элемент = ' + arr[index]);			
}

//			 << Переворот массива >>

//Задача №5.  Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
function task_14_05() {
	var arr = [1, 2, 3, 4, 5];
	var temp = [];
	for (var i = arr.length - 1; i >= 0 ; i--) {
		temp.push(arr[i]);
	}
	arr = temp;
	document.write(arr);
}

//			 << Многомерные массивы >>

//Задача №6. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
function task_14_06() {
	var arr = [[1, 2, 3], [4, 5], [6]];
	var summ = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			summ += arr[i][j];
		}
	}
	document.write(summ);
}

//Задача №7. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

task_14_06();