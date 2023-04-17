"use strict";

//Задача №1. Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
function task_08_01_1() {
	var str1 = ['a', 'b', 'c'];
	var str2 = [1, 2, 3];
	var result = str1.concat(str2);
	document.write(result);
}

//Задача №2. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. Воспользуемся методом push:
function task_08_02_2() {
	var str = ['a', 'b', 'c'];
	str.push(11);
	str.push(12);
	str.push(13);
	document.write(str);
}

// < ===	Работа с concat	===		>

//Задача №1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
function task_08_01() {
	var str1 = [1, 2, 3];
	var str2 = [4, 5, 6];
	document.write(str1.concat(str2));
}

// < ===	Работа с reverse	===		>

//Задача №2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
function task_08_02() {
	var str = [1, 2, 3];
	document.write(str.reverse());
}

// < ===	Работа с push, unshift	===		>

//Задача №3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. Используя метод push
function task_08_03() {
	var str = [1, 2, 3];
	str.push(4);
	str.push(5);
	str.push(6);
	document.write(str);
}

//Задача №4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 14, 15, 16. Используя метод unshift
function task_08_04() {
	var str = [1, 2, 3];
	str.unshift(14);
	str.unshift(15);
	str.unshift(16);
	document.write(str);
}

// < ===	Работа с shift, pop	===		>

//Задача №5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
function task_08_05() {
	var str = ['js', 'css', 'jq'];
	document.write(str.shift());
}

//Задача №6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
function task_08_06() {
	var str = ['js', 'css', 'jq'];
	document.write(str.pop());
}

// < ===	Работа с slice		===		>

//Задача №7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
function task_08_07() {
	var str = [1, 2, 3, 4, 5];
	var result = str.slice(0, 3);
	document.write(result);
}

//Задача №8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
function task_08_08() {
	var str = [1, 2, 3, 4, 5];
	var result = str.slice(3);
	document.write(result);
}

// < ===	Работа с splice		===		>

//Задача №9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
function task_08_09() {
	var str = [1, 2, 3, 4, 5];
	var del = str.splice(1, 2)
	document.write(str);
}

//Задача №10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
function task_08_10() {
	var str = [1, 2, 3, 4, 5];
	var del = str.splice(1, 3)
	document.write(del);
}

//Задача №11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
function task_08_11() {
	let str = [1, 2, 3, 4, 5];
	let del = str.splice(3, 0, 'a', 'b', 'c');
	document.write(str);
}

//Задача №12.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
function task_08_12() {
	let str = [1, 2, 3, 4, 5];
	str.splice(1, 0, 'a', 'b');
	str.splice(6, 0, 'c');
	str.splice(8, 0, 'e');
	document.write(str);
}

// < ===	Работа с sort		===		>

//Задача №13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
function task_08_13() {
	let str = [3, 4, 1, 2, 7];	
	document.write(str.sort());
}

// < ===	Работа с Object.keys		===		>

//Задача №14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
function task_08_14() {
	var obj = {
		js:'test', 
		jq: 'hello', 
		css: 'world'
	};
	var keys = Object.keys(obj);
	document.write(keys);
}

task_08_14();