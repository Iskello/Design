const scrolling = (upSelector) => {
	const upElem = document.querySelector(upSelector);

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 1650) {
			upElem.classList.add('animated', 'fadeIn');
			upElem.classList.remove('fadeOut');
		} else {
			upElem.classList.add('fadeOut');
			upElem.classList.remove('fadeIn');
		}
	});

	//Pure JS scrolling
	/* const element = document.documentElement,
		body = document.body;

	const calcScroll = () => {
		upElem.addEventListener('click', function(event) {
			// Отримуємо поточне значення, скільки вже відлистали
			let scrollTop = Math.round(body.scrollTop || element.scrollTop);

			if(this.hash !== '') {
				event.preventDefault();
				// Знаходимо елемент з відповідним хешем
				let hashElement = document.querySelector(this.hash),
					hashElementTop = 0;

				//перебирає всіх батьків елемента і обчислює висоту, на яку треба прокрутити сторінку
				while (hashElement.offsetParent) {
					hashElementTop += hashElement.offsetTop;
					hashElement = hashElement.offsetParent;
				}

				hashElementTop = Math.round(hashElementTop);
				// Викликаємо функцію для плавного скроллу
				smoothScroll(scrollTop, hashElementTop, this.hash);
			}
		});
	};

	const smoothScroll = (from, to, hash) => {
		let timeInterval = 1,
			prevScrollTop,
			speed;

		// Визначаємо швидкість прокрутки залежно від значень from і to
		if (to > from) {
			speed = 30;
		} else {
			speed = -30;
		}

		let move = setInterval(function() {
			// Отримуємо поточне значення прокрутки сторінки
			let scrollTop = Math.round(body.scrollTop || element.scrollTop);

			// Перевіряємо, чи досягнуто бажаного значення прокрутки або напрямок прокрутки змінився
			if (prevScrollTop === scrollTop || 
                (to > from && scrollTop >= to) || 
                (to < from && scrollTop <= to)) {
				// Очищаємо інтервал і оновлюємо URL-адресу з хешем
				clearInterval(move);
				history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
			} else {
				// Змінюємо значення прокрутки сторінки з врахуванням швидкості
				body.scrollTop += speed;
				element.scrollTop += speed;
				prevScrollTop = scrollTop;
			}
		}, timeInterval);
	};
	// Викликаємо функцію для обробки кліку на елемент upElem
	calcScroll(); */



	// Scrolling with Request Animation Frame

	//шукаємо всі посилання,, які починаються з # (локальні посилання)
	let links = document.querySelectorAll('[href^="#"]'),
		speed = 0.3;

	links.forEach(link => {
		link.addEventListener('click', function(event) {
			event.preventDefault();

			let widthTop = document.documentElement.scrollTop,
				hash = this.hash,
				//верхня межа елемента, куди буду скролити
				toBlock = document.querySelector(hash).getBoundingClientRect().top,
				start = null;

			requestAnimationFrame(step);

			function step(time) {
				//дізнаємося, чи перший раз запускається анімація
				if (start === null) {
					start = time;
				}

				let progress = time - start,
					r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

				document.documentElement.scrollTo(0, r);

				//функція буде сама себе рекурсивно запускати, поки не виконається умова і зупиниться анімація
				if (r != widthTop + toBlock) {
					requestAnimationFrame(step);
				} else {
					location.hash = hash;
				}
			}
		});
	});
};

export default scrolling;