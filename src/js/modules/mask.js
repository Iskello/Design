const mask = (selector) => {

	//встановлюємо позицію курсора у елемента форми
	let setCursorPosition = (pos, elem) => {
		elem.focus();
		//перевіряє чи є метод та встановлює діапазон виділення тексту
		if (elem.setSelectionRange) {
			elem.setSelectionRange(pos, pos);
			//перевіряємо інший метод для старіших версій IE
		} else if (elem.createTextRange) {
			let range = elem.createTextRange();

			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};

	//основна функція створення маски
	function createMask(event) {
		//шаблон маски
		let matrix = '+38 (___) ___-__-__',
			i = 0,
			//видаляються всі нецифрові значення 
			def = matrix.replace(/\D/g, ''),
			val = this.value.replace(/\D/g, '');

		if (def.length >= val.length) {
			val = def;
		}

		//використовуємо заміну кожного елементу
		this.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
		});

		if (event.type === 'blur') {
			//якщо нічого не написано, ставимо в початкову позицію
			if (this.value.length == 2) {
				this.value = '';
			}
		} else {
			//ставимо в позицію курсору
			setCursorPosition(this.value.length, this);
		}
	}

	let inputs = document.querySelectorAll(selector);

	inputs.forEach(input => {
		input.addEventListener('input', createMask);
		input.addEventListener('focus', createMask);
		input.addEventListener('blur', createMask);
	});
};

export default mask;