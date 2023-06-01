import { postData } from '../services/requests';

const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		upload = document.querySelectorAll('[name="upload"]'),
		textArea = document.querySelectorAll('[name="message"]'),
		windows = document.querySelectorAll('[data-modal]');


		
	const message = {
		loading: 'Йде відправка',
		success: 'Дякуємо за заявку! Невдовзі ми з Вами зв\'яжемось!',
		failure: 'Упс! Щось пішло не так...',
		spinner: 'assets/img/spinner.gif',
		ok: 'assets/img/ok.png',
		fail: 'assets/img/fail.png'
	};


	//шляхи, куди будемо відправляти дані (для звичайної форми один шлях, для форми замовлення - інший)
	const path = {
		designer: 'assets/server.php',
		question: 'assets/question.php'
	};
	

	//Очищення полів форми
	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});	
		//очищуємо поле upload (назва завантаженої картинки)
		upload.forEach(item => {
			item.previousElementSibling.textContent = 'Файл не выбран';
		});
		textArea.forEach(item => {
			item.value = '';
		});
	};

	//Назва завантаженої картинки обрізається до 10 символів перед розширенням файлу
	upload.forEach(item => {
		item.addEventListener('input', () => {
			console.log(item.files[0]);
			let dots;
			//розбиваємо рядок з ім'ям на 2 частини
			// 'name.jpg' => [name , jpg]
			const arr = item.files[0].name.split('.');
			//звертаємося до першої частини, якщо довжина більше 10 символів то далі пишемо три крапки
			arr[0].length > 9 ? dots = '...' : dots = '.';
			//ім'я файлу з 0 по 10 символ, крапка/трикрапки, друга частина імені (розширення)
			const name = arr[0].substring(0, 9) + dots + arr[1];
			//отримуємо елемент "файл не вибран" - це попередній елемент до 
			item.previousElementSibling.textContent = name;
		});
	});

	//Перебір форм і назначення обробника подій
	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			//створюємо версткою блок сповіщення, який вставляється замість форми
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.parentNode.appendChild(statusMessage);

			//ховаємо форму для відображення сповіщення
			item.classList.add('animated', 'fadeOutUp');
			setTimeout(() => {
				item.style.display = 'none';
			}, 400);

			//відображуємо статус відправки (в картинці) - спіннер
			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.spinner);
			statusImg.classList.add('animated', 'fadeInUp');
			statusMessage.appendChild(statusImg);

			//відображуємо статус відправки (в тексті)
			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			//збираємо дані з форми
			const formData = new FormData(item);
			//формуємо динамічний шлях для відправки
			let api;
			//шукаємо блок popup-design вище по ієрархії або класс calc_form, при знаходженні посилаємо на адресу дизайнера, в інших випадках на іншу адресу
			item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
			console.log(api);

			// відправляємо запит на сервер
			postData(api, formData)
				.then(res => {
					console.log(res);
					statusImg.setAttribute('src', message.ok);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', message.fail);
					textMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();					
					setTimeout(() => {
						statusMessage.remove();	
						item.style.display = 'block';
						item.classList.remove('fadeOutUp');
						item.classList.add('fadeInUp');

						document.body.style.overflow = '';
						document.body.style.marginRight = '0px';
						//форма закривається
						windows.forEach(item => {
							item.style.display = 'none';				
						});				
					}, 5000);
				});
		});
	});
};

export default forms;