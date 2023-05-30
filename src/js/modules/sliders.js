const sliders = (slides, direction, prev, next) => {
	let slideIndex = 1,
		paused = false;
	const items = document.querySelectorAll(slides);
		



	//функція по показу слайдів
	function showSlides(n) {
		//щоб слайдер перелистувався з кінця на початок
		if (n > items.length) {
			slideIndex = 1;
		} else if (n < 1) {
			//щоб слайдер перелистувався з початку на кінець
			slideIndex = items.length;
		}

		//ховаємо всі слайди
		items.forEach(item => {
			item.classList.add('animated');
			item.classList.remove('show');
			item.classList.add('hide');
		});

		//відображуємо теперішній слайд
		items[slideIndex - 1].classList.remove('hide');
		items[slideIndex - 1].classList.add('show');

	}


	//первісна ініціалізація - включення слайдеру при загрузці сторінки
	showSlides(slideIndex);


	//функція перелистування слайдів
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	//так як є 1 слайдер з кнопками і 1 без кнопок, щоб не було помилки обертаємо в try catch
	try {
		const prevBtn = document.querySelector(prev),
			nextBtn = document.querySelector(next);

		//перелистуємо слайд назад/вперед в залежності від кнопки
		prevBtn.addEventListener('click', () => {
			plusSlides(-1);
			items[slideIndex - 1].classList.remove('slideInLeft');
			items[slideIndex - 1].classList.add('slideInRight');
		});

		nextBtn.addEventListener('click', () => {
			plusSlides(1);
			items[slideIndex - 1].classList.remove('slideInRight');
			items[slideIndex - 1].classList.add('slideInLeft');
		});

	} catch(e){}

    

	//функція, яка включає автопереключення слайдів
	function activateAnimation() {
		
		//функція для напряму переключення слайдів
		if (direction === 'vertical') {
			paused = setInterval(function() {
				plusSlides(1);
				items[slideIndex - 1].classList.add('slideInUp');
			}, 10000);
		} else {
			paused = setInterval(function() {
				plusSlides(1);
				items[slideIndex - 1].classList.remove('slideInRight');
				items[slideIndex - 1].classList.add('slideInLeft');
			}, 10000);
		}
	}

	activateAnimation();

	//коли користувач наводить на слайдер, відключаємо автопереключення слайдів
	items[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused);
	});
	//коли користувач убирає мишку зі слайдера, включаємо автопереключення слайдів
	items[0].parentNode.addEventListener('mouseleave', () => {
		activateAnimation();
	});


};

export default sliders;