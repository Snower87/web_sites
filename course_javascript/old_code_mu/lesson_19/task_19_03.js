"use strict";

//		 << Основы работы с DOM в JavaScript  >>

var i_glob = 0;

//Задача №18. Счетчик нажатия на кнопку:
function task_19_18(elem) {
	elem.value = ++i_glob;
}

//Задача №19. Работа через классButton: обтекание справа, слева
function task_19_19() {
	var elem = document.getElementById('input_id_19');
	elem.value = 'Теперь я плаваю справа!';
	if (elem.style.cssFloat == 'right') {
		elem.style.cssFloat = 'left';
	} else {
		elem.style.cssFloat = 'right';	
	}	
}

//Задача №20. Работа через класс
function task_19_20() {
	var elem = document.getElementById('input_id_20');
	elem.value = 'Мои css классы: '+ elem.className;
}
