const checkTextInputs = (selector) => {
	const textInputs = document.querySelectorAll(selector);

	textInputs.forEach(input => {
		//тільки українські літери та числа (але автозаповненням можно ввести англійські)
		/* input.addEventListener('keypress', function(e) {
			//всі символи від а до я та 0 - 9 в любому регістрі глобально
			if (e.key.match(/[^а-яіїґє 0-9]/ig)) {
				e.preventDefault();
			}
		}); */

		//тільки українські літери та числа (автозаповненням не можно ввести англійські)
		input.addEventListener('input', function(e) {
			const inputValue = e.target.value;
			// Заміна всіх іноземних символів на порожній рядок
			const ukrainianOnlyValue = inputValue.replace(/[^а-яіїґєї 0-9]/gi, '');

			// Оновлюємо значення інпута з видаленням іноземних символів
			if (inputValue !== ukrainianOnlyValue) {
				e.target.value = ukrainianOnlyValue;
			}
		});
	});
};

export default checkTextInputs;