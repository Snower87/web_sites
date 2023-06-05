"use strict";

//		 << Основы работы с DOM в JavaScript  >>

//Задача №1. Алерт по нажатию на кнопку:
function task19_01() {
	alert('Привет. Задача №1');
}

//Задача №5. Отображение текста из input
function task19_5() {
	var elem = document.getElementById('input_text_5');
	alert(elem.value);
}	

//Задача №6. Передача текста в input
function task19_6() {
	var elem = document.getElementById('input_text_6');
	elem.value = 'Ой, я поменял свой текст!';
}	

//Задача №7. Передача по ссылке, через this
function task19_7(elem) {
	elem.value = "Ссылка сработала на баттоне";
}	