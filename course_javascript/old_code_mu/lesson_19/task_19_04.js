"use strict";

//		 << Основы работы с DOM в JavaScript  >>

var i_glob = 0;

//Задача №21. Поменять местами зн-я в input
function task_19_21() {
	var elem1 = document.getElementById('input_id_1_1');
	var elem2 = document.getElementById('input_id_1_2');
	var temp = elem1.value;
	elem1.value = elem2.value;
	elem2.value = temp;
}

//Задача №22. Квадрат числа
function task_19_22() {
	var elem1 = document.getElementById('input_id_2_1');
	var result = document.getElementById('input_id_2_2');
	var square = elem1.value * elem1.value;
	result.value = square;
}

//Задача №23. Квадрат числа с проверкой
function task_19_23() {
	var elem1 = document.getElementById('input_id_3_1');
	var result = document.getElementById('input_id_3_2');
	var value = elem1.value;
	if (isNaN(value)) {
		alert('Введите число! а не текс');
	} else {
		var square = elem1.value * elem1.value;
		result.value = square;				
	}
}