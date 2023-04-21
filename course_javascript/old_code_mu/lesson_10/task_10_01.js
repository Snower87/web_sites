"use strict";

/*
1. Синтаксис функций пользователя

//'func' - это имя функции, ей передается один параметр param:
function func(param) {

}

//Передаем функции два параметра - param1 и param2:
function func(param1, param2) {

}

//Вообще не передаем никаких параметров:
function func() {

}

function имя_функции(здесь перечисляются параметры через запятую) {
	Здесь написаны команды, которые выполняет функция.
}

2. Как вызвать функцию в коде?

// Мы написали функцию, которая выводит на экран 'Привет, мир!'. Назовем ее 'hello':

function hello() {

	//В этом месте ничего не выведется само по себе, 
	//а выведется только при вызове функции.

	alert('Привет, мир!');
}

// Теперь мы хотим вызвать нашу функцию

hello(); //Вот и все! Функция выведет на экран фразу 'Привет, мир!'.	

3. Подробнее о параметрах

//Зададим нашу функцию:
function hello(text) { //укажем здесь параметр text
	//Выведем на экран значение переменной text:
	alert(text);
}

//Теперь вызовем нашу функцию:
hello('Привет, Земляне!'); //она выведет именно ту фразу, которую мы ей передали

4.1 Инструкция return

//Сделаем теперь так, чтобы функция не выводила что-то на экран, а возвращала текст скрипту, 
//чтобы он смог записать этот текст в переменную и как-то обработать его дальше:

//Зададим функцию:
function hello(text) {

	//Укажем функции с помощью инструкции 'return', 
	//что мы хотим, чтобы она ВЕРНУЛА текст, а не вывела на экран:

	return text;
}

//Теперь вызовем нашу функцию и запишем значение в переменную message:
var message = hello('Привет, Земляне!'); //пока вывода на экран нет

//И теперь в переменной message лежит 'Привет, Земляне!':
alert(message); //убедимся в этом

//Можно не вводить промежуточную переменную message, а сделать так:
alert(hello('Привет, Земляне!'));

4.2 Модернизируем наш пример так, чтобы функция принимала имя человека, 
а выводила строку 'Привет, %имя_человека_переданное_функции%!':

//Зададим функцию:
function hello(name) { //укажем здесь параметр name, в котором будет лежать имя человека
	//Введем переменную text, в которую запишем всю фразу:
	var text = 'Привет, '.name.'!';

	//Укажем функции с помощью инструкции 'return', 
	//что мы хотим, чтобы она ВЕРНУЛА содержимое переменной text:

	return text;
}

//Теперь вызовем нашу функцию и запишем значение в переменную message:
var message = hello('Дима');

//И теперь в переменной text лежит 'Привет, Дима!':
alert(message); //убедимся в этом

//Поздороваемся сразу с группой людей из трех человек:
alert(hello('Вася').' '.hello('Петя').' '.hello('Коля'));

5. Приемы работы с return

function func(param) {

	//	Что делает код:
	//	если param имеет значение true – то в переменную result запишем 'Верно!',
	//	иначе 'Неверно!':

	if (param) {
		var result = 'Верно!'
	} else {
		var result = 'Неверно!';
	}

	//Вернем содержимое переменной result:
	return result;
}
*/

