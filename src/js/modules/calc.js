const calc = (size, material, options, promocode, result) => {
	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionsBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);
    
	let sum = 0;

	const calcFunction = () => {
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
	promocodeBlock.addEventListener('input', calcFunction);

};

export default calc;