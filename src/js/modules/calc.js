import { getResource } from '../services/requests';

const calc = (size, material, options, promocode, result) => {
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);
    
	let sum = 0;

	//Статичний калькулятор
	/* const calcFunction = () => {
		//формула розрахунку
		sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

		//якщо користувач не ввів нічого в перше або друге поле сповіщаємо користувача про це
		if (sizeBlock.value == '' && materialBlock.value == '') {
			resultBlock.textContent = 'Для расчета нужно выбрать размер и материал картины';
			//також перевіряємо промокод
		} else if (sizeBlock.value == '') {
			resultBlock.textContent = 'Для расчета нужно выбрать размер картины';
		} else if (materialBlock.value == '') {
			resultBlock.textContent = 'Для расчета нужно выбрать материал картины';
		} else if (promocodeBlock.value === 'IWANTPOPART') {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else {
			resultBlock.textContent = sum;
		}
	};

	//кожен раз при виборі якоїсь опції буде виконуватися одна і та ж функція
	sizeBlock.addEventListener('change', calcFunction);
	materialBlock.addEventListener('change', calcFunction);
	optionsBlock.addEventListener('change', calcFunction);
	promocodeBlock.addEventListener('input', calcFunction); */






	//динамічний калькулятор !ВАЖЛИВО! В HTML обов'язково повинен бути атрибут value (без значення) у кожного option
	const calcFunction = () => {
		//формула розрахунку
		sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

		//якщо користувач не ввів нічого в перше або друге поле сповіщаємо користувача про це
		if (sizeBlock.value == ''  && materialBlock.value == '') {
			resultBlock.textContent = 'Для расчета нужно выбрать размер и материал картины';
			//також перевіряємо промокод
		} else if (sizeBlock.value == '') {
			resultBlock.textContent = 'Для расчета нужно выбрать размер картины';
		} else if (materialBlock.value == '') {
			resultBlock.textContent = 'Для расчета нужно выбрать материал картины';
		} else if (promocodeBlock.value.trim().toLowerCase() === 'iwantpopart') {
			resultBlock.textContent = Math.round(sum * 0.7);
		} else {
			resultBlock.textContent = sum;
		}
	};


	//Функція по назначенню обробника подій для option	
	const watchChanges = (option, arrayName) => {
		option.addEventListener('change', () => {
			Array.from(option.children).forEach((item, i) => {
				getResource('http://localhost:3000/prices')
					.then(res => {
						const arr = res[0][arrayName]; // динамічна назву масиву, береться вказаний массив з db.json
						if (item.value === option.value) {
							/* console.log(arr[i]); */ 
							item.setAttribute('value', arr[i]);
							calcFunction();
						}
					})
					.catch(error => console.log(error));
			});
		});
	};
	
	watchChanges(sizeBlock, 'sizes');
	watchChanges(materialBlock, 'material');
	watchChanges(optionsBlock, 'option');
	promocodeBlock.addEventListener('input', calcFunction);
	

	

	

	/* sizeBlock.addEventListener('change', () => {
		Array.from(sizeBlock.children).forEach((item, i) => {			
			getResource('http://localhost:3000/prices')
				.then(res => {
					const sizes = res[0].sizes;
      
					if (item.value === sizeBlock.value) {
						console.log(sizes[i]); // Вивести відповідне значення
						item.setAttribute('value', sizes[i]);
						calcFunction();
					}
				})
				.catch(error => console.log(error));
			
		});
	}); */


	/* materialBlock.addEventListener('change', () => {
		Array.from(materialBlock.children).forEach((item, i) => {			
			getResource('http://localhost:3000/prices')
				.then(res => {
					const material = res[0].material;
      
					if (item.value === materialBlock.value) {
						console.log(material[i]); // Вивести відповідне значення
						item.setAttribute('value', material[i]);
						calcFunction();
					}
				})
				.catch(error => console.log(error));
			
		});
	}); */


	/* optionsBlock.addEventListener('change', () => {
		Array.from(optionsBlock.children).forEach((item, i) => {
			
			getResource('http://localhost:3000/prices')
				.then(res => {
					const option = res[0].option;
      
					if (item.value === optionsBlock.value) {
						console.log(option[i]); // Вивести відповідне значення
						item.setAttribute('value', option[i]);
						calcFunction();
					}
					
				})
				.catch(error => console.log(error));
			
		});
	}); */

	
	
};

export default calc;