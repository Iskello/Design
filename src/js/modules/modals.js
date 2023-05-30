const modals = () => {
	//змінна слідкує, чи була натиснута хоча б одна кнопка
	let btnPressed = false;

	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll();

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				//зараховується, що кнопка натиснена
				btnPressed = true;

				//трігер, у якого destroy = true після спрацювання видаляємо зі сторінки
				if (destroy) {
					item.remove();
				}

				//при відкритті нового модального вікна, старі всі закриваються
				windows.forEach(item => {
					item.style.display = 'none';
					item.classList.add('animated', 'fadeIn');
				});

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
				clearTimeout(timerId);
			});
		});

		//закриття на хрестик
		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
			});

			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = '0px';
		});

		//закриття по кліку на оверлей
		modal.addEventListener('click', (e) => {
			if (e.target && e.target === modal) {
				windows.forEach(item => {
					item.style.display = 'none';
				});

				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = '0px';
			}
		});

		//закриття на Esc
		document.addEventListener('keydown', (e) => {
			if (e.code === 'Escape' && modal.style.display === 'block') {
				windows.forEach(item => {
					item.style.display = 'none';
				});

				modal.style.display = 'none';
				document.body.style.overflow = '';
				document.body.style.marginRight = '0px';
			}
		});


	}


	//Функція, яка показує модальне вікно при долистуванні до низу,, якщо не натиснена жодна кнопка.
	function openByScroll(selector) {
		window.addEventListener('scroll', () => {

			//для різних режимів браузера (стандартний і частково стандартний) - для оптимізації під старі браузери
			let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

			if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
				document.querySelector(selector).click();
			}
		});
	}

	
	//код, який перевіряє, чи відкрито модальне вікно. Якщо ні, показує модальне по таймеру
	/* function showModalByTime(selector, time) {
		setTimeout(function() {
			let display;

			document.querySelectorAll('[data-modal]').forEach(item => {
				if(getComputedStyle(item).display !== 'none') {
					display = 'block';
				}
			});

			if (!display) {
				document.querySelector(selector).style.display = 'block';
				document.body.style.overflow = 'hidden';
			}
			
		}, time);
	} */


	//старий код по таймеру
	let timerId;
	function showModalByTime(selector, time) {
		timerId = setTimeout(function() {			

			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
			let scroll = calcScroll();
			document.body.style.marginRight = `${scroll}px`;
		}, time);
	}


	//функція яка рахує ширину скролла
	function calcScroll() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		//отримуємо ширину прокрутки (віднімаємо від повної ширини ширину контенту)
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}


	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
	openByScroll('.fixed-gift');
	

	/* showModalByTime('.popup-consultation', 120000); */
};

export default modals;