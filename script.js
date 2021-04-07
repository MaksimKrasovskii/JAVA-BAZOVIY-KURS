
//1. Задание: С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
        
 // Массив от 1 до 100
	let i = [];
	let n = 1;
while (n < 100){

	n++;
	i.push(n);

}
//Удаляем четные
	let v = 2;
	let c = 2;
while (v <= 100){
	v += c;
		i.splice(i.indexOf(v), 1);
}

//Удаляем цифры которые делятся на нечетные
v = 4;
c = 3;
while (v < 100){
	if (v % c ===0 && i.indexOf(v) !== -1){
		i.splice(i.indexOf(v), 1);
	}else {
		v++;
	}
}

v = 6;
c = 5;
while (v < 100) {
	if (v % c === 0 && i.indexOf(v) !== -1) {
		i.splice(i.indexOf(v), 1);
	} else {
		v++;
	}
}

v = 8;
c = 7;
while (v < 100) {
	if (v % c === 0 && i.indexOf(v) !== -1) {
		i.splice(i.indexOf(v), 1);
	} else {
		v++;
	}
}

console.log(i + ' простые числа');


//Задание № 2 Корзина

const basketItems = ['Shirt', 'Pants', 'Vest', 'Socks', 'hat']; 
const ItemsCost = [['Shirt', 999], ['Pants',1999], ['Vest', 2500], ['Socks', 250], ['hat', 1499]];

const getItemPrice = (item, array) => {
	const items = [];
	const costs = [];
	// разбиваем массив на 2 одномерных массива
	for (let i = 0; i < array.length; i++) {
	  items.push(array[i][0]);
	  costs.push(array[i][1]);
	}
	// Получаем индекс товара в массиве с названиями товаров и возвращаем стоимость по этому индексу из массива цен
	return costs[items.indexOf(item)];
  };
 
  const countBasketPrice = (basketArr, costArr) => {
	let totalCost = 0;
	for (let i = 0; i < basketArr.length; i++) {
	  // При итерации массива корзины применяем функцию запроса стоимости одного товара.
	  totalCost += getItemPrice(basketArr[i], costArr);
	}
	return totalCost;
  };
  console.log('Корзина: ' + basketItems);
  console.log('Стоимости товаров: ' + ItemsCost);
  console.log('Полная стоимость корзины: ' + countBasketPrice(basketItems, ItemsCost));

console.log(basketItems +  ItemsCost);

// Ответ на 3 задание *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла: 
for (let g = 0; g <= 9; console.log('Цикл без тела {}: ' + g++)) { /* пусто */ }


// Ответ на 4 задание Нарисовать пирамиду:
i = [];
n = 0;
while (n < 20){
	n++;
	i.push('p');
	console.log(i);
}
	



