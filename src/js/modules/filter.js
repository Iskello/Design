const filter = () => {
	const menu = document.querySelector('.portfolio-menu'),
		items = menu.querySelectorAll('li'),

		wrapper = document.querySelector('.portfolio-wrapper'),
		markAll = wrapper.querySelectorAll('.all'),		
		no = document.querySelector('.portfolio-no');


	//Загальна функція по фільтрації елементів
	const typeFilter = (markType) => {
		//ховаємо всі елементи
		markAll.forEach(mark => {
			mark.style.display = 'none';
			mark.classList.remove('animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('animated', 'fadeIn');

		//якщо ми передаємо в функцію аргумент markType, показуємо відповідні елементи, якщо елементів при фільтрації нема - показуємо .portfolio-no
		if (markType.length > 0) {
			markType.forEach(mark => {
				mark.style.display = 'block';
				mark.classList.add('animated', 'fadeIn');
			});
		} else {
			no.style.display = 'block';
			no.classList.add('animated', 'fadeIn');
		}
	};

	//Функція по зміні класу активності для кнопок
	/* const btnActive = (btn) => {
		items.forEach(item => {
			item.classList.remove('active');
			item.classList.remove('animated', 'fadeIn');
		});

		btn.classList.add('active');
		btn.classList.add('animated', 'fadeIn');
	}; */

	//Функція по зміні класу активності для кнопок З ДЕЛЕГУВАННЯМ ПОДІЙ
	menu.addEventListener('click', (e) => {
		let target = e.target;
    
		if (target && target.tagName == 'LI') {
			items.forEach(btn => btn.classList.remove('active'));
			target.classList.add('active');
		}
	});

	//Загальна функція по навішуванню обробників події
	const btnSwitch = (selector) => {
		const btn = menu.querySelector(selector),
			mark = wrapper.querySelectorAll(selector);

		btn.addEventListener('click', () => {
			typeFilter(mark);
			/* btnActive(btn); */
		});
	};



	btnSwitch('.all');
	btnSwitch('.lovers');
	btnSwitch('.girl');
	btnSwitch('.guy');
	btnSwitch('.chef');
	btnSwitch('.grandmother');
	btnSwitch('.granddad');
	
};

export default filter;