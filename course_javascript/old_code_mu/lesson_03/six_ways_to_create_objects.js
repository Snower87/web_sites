"use strict";

//from sites:
//https://skryvets.com/blog/2018/08/01/6-ways-to-create-a-javascript-object/

//Ways:
//1. Object literal notation

var pizza1 = {
	name: 'Margherita',
	size: 'medium',
	isVegetarian: true
}

//2. The "new()" keyword
var pizza2 = new Object();
pizza2.name = 'Margherita';
pizza2.size = 'medium';
pizza2.isVegetarian = true;

//3. The Object.create(...) method
var anotherPizza3 = Object.create(pizza1);

/*
  console.log(anotherPizza)
  {
    name: 'Margherita',
    size: 'medium',
    isVegetarian: true
  }
*/

//4. Constructor function
function Pizza() {
	this.name = 'Margherita',
	this.size = 'medium',
	this.isVegetarian = true;
}

var pizza4 = new Pizza();

//5. The object.assign(...) method
var anotherPizza5 = Object.assign(pizza1, {
    name: 'Capricciosa',
    isVegetarian: false
})

//6. The JSON.parse(JSON.stringify(object)) method
var pizza6 = {
  name: 'Margherita',
  size: 'medium',
  isVegetarian: true
}

var anotherPizza6 = JSON.parse(JSON.stringify(pizza6));