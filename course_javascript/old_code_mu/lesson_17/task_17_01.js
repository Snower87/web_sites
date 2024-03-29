"use strict";

//		 << Продвинутая работа с пользовательскими функциями  >>

//Значения по умолчанию:

function defaultValue(num) {
	//Способ №1. Первый способ - проверить переменную на undefined и, если она равна ему, записать в нее нужно значение

	//if (num === undefined) {
	//	num = 3;
	//}

	//Способ №2. Второй способ заключается в использовании логического ||
	num = num || 2;

	return num * num;
}

//Параметр не передали
//alert(defaultValue()); //хотим, чтобы вывело 9

//Параметр передали
//alert(defaultValue(4)); //выведет 16

//Область видимости переменных:
/*
1) А сейчас та переменная test, которая находится вне функции, это не та переменная test, которая находится внутри нее:
var test = 'Тест!';
function func() {
var test = 'Локальная!';	alert(test); //выведет 'Локальная!'
}
func();

2) А вот если внутри функции переменная не объявлена через var - она будет считаться глобальной:
var test = 'Тест!';
function func() {
	alert(test); //выведет 'Тест!'
}
func();

*/

//Строгий режим
/*
1) В следующем примере мы забыли поставить var и затерли глобальную переменную test:

var test = 'Привет!';

function func() {
	test = 'Тест!';
}
func();

alert(test); //выведет 'Тест!', а не 'Привет!'

2) А если включить строгий режим, то скрипт просто выдаст ошибку, которую мы сможем заметить в консоли:

'use strict';

var test = 'Привет!';

function func() {
	test = 'Тест!'; //будет ошибка, нет var
}
func();

alert(test);
*/

//Глобальные переменные через window
//Давайте еще раз поговорим про глобальные переменные: все переменные, написанные вне функций, являются глобальными, то есть потенциально видны в любом месте.

/*
Однако, это еще не все: все глобальные переменные являются свойствами объекта window:

var test = 'Тест!';
alert(window.test); //выведет 'Тест!'

И наоборот:

var window.test = 'Тест!';
alert(test); //выведет 'Тест!'

Такую особенность можно использовать для обмена данными между функциями:

function func1() {
	window.test = 'Тест!';
}

function func2() {
	alert(window.test); //выведет 'Тест!'
}

func1(); //<--- без этого вызова не сработает
func2();
*/

//Рекурсия

/*
В программировании есть такое понятие, как рекурсия - это когда функция вызывает сама себя.

Давайте разберемся с этим понятием на следующем примере: выведем все элементы массива с конца с помощью рекурсии (для примера, цикл тут эффективнее).

Для этого мы будем использовать метод pop, который забирает из массива последний элемент (массив при этом уменьшается). Затем будем проверять, осталось ли что в массиве с помощью empty.

Если осталось, опять запускаем эту же функцию last, которая забирает последний элемент, проверяет осталось ли что в массиве и запускает саму себя при необходимости:
*/

var arr = [1, 2, 3, 4, 5];

last(arr);

function last(arr) {
	document.write(arr.pop() + '<br>'); ////выводим последний элемент массива

	if (arr.length != 0) {
		last(arr);
	}
}