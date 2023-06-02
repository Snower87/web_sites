"use strict";

//		 << Основы работы с DOM в JavaScript  >>

//Задача №1. Алерт по нажатию на кнопку:
function task_19_01() {
	alert('Привет! Вариант 2');	
}

//Задача №2. Изменение текста в инпуте
function task_19_02() {
	var input = document.getElementById('input_19_02');
	input.value = '!!121!';
}

//Задача №3. Вывод содержимого инпута
function task_19_03() {
	var input = document.getElementById('id_3_input');
	alert(input.value);
}

//Задача №4. Квадрат содержимого инпута
function task_19_04() {
	var input = document.getElementById('id_4_input');
	var number = Number(input.value);
	var square = number * number;
	input.value = square;
	alert(square);
}

//Задача №5. Обмен содержимым между инпутами
function task_19_05() {
	var input1 = document.getElementById('id_5_1');
	var input2 = document.getElementById('id_5_2');
	var value1 = input1.value;
	var value2 = input2.value;
	input1.value = value2;
	input2.value = value1;
}

//Задача №6. По нажатию на кнопку меняется ее текст
function buttonClick(elem) {
	elem.value = "Задача 6 - поменял текст!";
}

var numColor = 1;

//Задача №7. Работа с CSS. Поменять цвет
function buttonClick7() {
	if (numColor == 4) {numColor = 1;}

	//Вариант №1
	var input = document.getElementById('id_7_input');
	input.style.color = 'red';

	//Вариант №2 - в одну строку
	document.getElementById('id_7_input').style.color = 'blue';

	//Вариант №3
	switch(numColor) {
		case 1:
			document.getElementById('id_7_input').style.color = 'red';
		break;
		case 2:
			document.getElementById('id_7_input').style.color = 'green';
		break;
		case 3:
			document.getElementById('id_7_input').style.color = 'blue';
		break;				
	}
	numColor++;
}

var block = true;

//Задача №8. Блокирование полей ввода
function setBlock(block) {
	var input = document.getElementById('id_8_input');
	input.disabled = block;
}