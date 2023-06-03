const accordion = (triggersSelector, itemsSelector) => {
	const btns = document.querySelectorAll(triggersSelector),
		blocks = document.querySelectorAll(itemsSelector);

	//назначаємо кожному блоку анімацію
	blocks.forEach(block => {
		//block.style.display = 'none';
		block.classList.add('animated', 'fadeInDown');
	});

	//для кожної кнопки назначаємо обробник події
	btns.forEach(btn => {
		btn.addEventListener('click', function() {
			//перевірка, чи є кнопка активною. Якщо кнопка не активна активуємо
			if (!this.classList.contains('active')) {
				//всі інші кнопки стають неактивними
				btns.forEach(btn => {
					btn.classList.remove('active', 'active-style');
				});
				//blocks.forEach(block => block.style.display = 'none');			
				
				this.classList.add('active', 'active-style');
				// наступний елемент показуємо				
				//this.nextElementSibling.style.display = 'block';				
			} else {
				this.classList.remove('active', 'active-style');
				// наступний елемент ховаємо				
				//this.nextElementSibling.style.display = 'none';				
			}

		});
	});


	/* //варіант без класу активності, активність на інших блоках не змінюється
	btns.forEach(btn => {
		btn.addEventListener('click', function() {
			//перевірка, чи є кнопка активною. Якщо кнопка не активна активуємо
			if (!this.classList.contains('active')) {
				
				//blocks.forEach(block => block.style.display = 'none');			
				
				this.classList.add('active');
				// наступний елемент показуємо				
				//this.nextElementSibling.style.display = 'block';				
			} else {
				this.classList.remove('active');
				// наступний елемент ховаємо				
				//this.nextElementSibling.style.display = 'none';				
			}

		});
	}); */


	//варіант без css, активність на інших блоках не змінюється (СТИЛІ В css ТРЕБА ВИДАЛИТИ)
	/* btns.forEach(btn => {
		btn.addEventListener('click', function() {
			//перевірка, чи є кнопка активною. Якщо кнопка не активна активуємо
			if (!this.classList.contains('active')) {
				this.classList.add('active');
				// наступний елемент показуємо				
				this.nextElementSibling.style.display = 'block';				
			} else {
				this.classList.remove('active');
				// наступний елемент ховаємо				
				this.nextElementSibling.style.display = 'none';				
			}

		});
	}); */


	//ІНШИЙ ВАРІАНТ АКОРДЕОНА (НЕ ЗАБУТИ ЗМІНИТИ СТИЛІ В СSS - .often-questions .accordion-block)


	/* const btns = document.querySelectorAll(triggersSelector); */

	//при натисканні на 1 елемент інші не ховаються
	/* btns.forEach(btn => {
		btn.addEventListener('click', function() {			
			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content');

			if(this.classList.contains('active-style')) {
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
			} else {
				this.nextElementSibling.style.maxHeight = '0px';
			}
		});
	}); */


	//при натисканні на один елемент, інші ховаються	
	/* btns.forEach(btn => {
		btn.addEventListener('click', function() {
			const isActive = this.classList.contains('active-style');
			
	
			btns.forEach(btn => {
				btn.classList.remove('active-style');
				btn.nextElementSibling.classList.remove('active-content');
				btn.nextElementSibling.style.maxHeight = '0px';
			});
	
			if (!isActive) {
				this.classList.add('active-style');
				this.nextElementSibling.classList.add('active-content');
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
			} else {
				this.nextElementSibling.style.maxHeight = '0px';
			}
		});
	}); */
	
	


};

export default accordion;