"use strict";

//Задача №1. Выведите столбец чисел от 1 до 50.
function task_01() {
	var i = 1;
	while (i <= 50) {
		document.write(i + '</br>');
		i++;
	}
}

//Задача №2. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
function task_02() {
	var arr = [11, 12, 13, 14, 15];
	for (var i = 0; i < arr.length; i++) {
		document.write(arr[i] + '</br>');
	}
}

//Задача №3. Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.
function task_03() {
	var arr = [2, 3, 4, 5];
	var multipl = 1;
	for (var i = 0; i < arr.length; i++) {
		multipl = multipl * arr[i];
	}
	document.write(multipl);
}	

//Задача №4. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
function task_04() {
	var obj = {
		 'Минск': 'Беларусь', 
		 'Москва': 'Россия',
		 'Киев': 'Украина'	
	}
	for (var key in obj) {
		document.write(key + ' это ' + obj[key] + '</br>');
	}
}

task_04();