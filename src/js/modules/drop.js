import { postData } from '../services/requests';

const drop = () => {
	//drag *
	//dragend *
	//dragenter - об'єкт входить в dropArea
	//dragexit *
	//dragleave - об'єкт за межами dropArea
	//dragover - об'єкт над dropArea
	//dragstart *
	//drop - об'єкт скидується в зону перетягування

	const fileInputs = document.querySelectorAll('[name="upload"]');

	//на кожні inputs повісити обробники подій. Так як подій багато, створюємо масив з подіями і перебираємо його
	['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, preventDefaults, false);
		});
	});

	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	//індикатор, що користувач перетаскує елемент над областю
	function highlight(item) {
		//ми працюємо з input, а нам треба підсвітити батьківський елемент
		item.closest('.file_upload').style.border = '5px solid yellow';
		item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
	}

	function unhighlight(item) {
		//ми працюємо з input, а нам треба підсвітити батьківський елемент
		item.closest('.file_upload').style.border = 'none';
		if (item.closest('.calc_form')) {
			item.closest('.file_upload').style.backgroundColor = '#fff';
		} else {
			item.closest('.file_upload').style.backgroundColor = '#ededed';
		}
	}

	['dragenter', 'dragover'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => highlight(input), false);
		});
	});

	['dragleave', 'drop'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => unhighlight(input), false);
		});
	});

	fileInputs.forEach(input => {
		input.addEventListener('drop', (e) => {
			//dataTransfer - об'єкт з файлом, який ми переміщуємо
			input.files = e.dataTransfer.files;
			console.log(input.files[0]);

			//Функціонал, коли велике ім'я, то показує ...
			let dots;
			//розбиваємо рядок з ім'ям на 2 частини
			// 'name.jpg' => [name , jpg]
			const arr = input.files[0].name.split('.');
			//звертаємося до першої частини, якщо довжина більше 10 символів то далі пишемо три крапки
			arr[0].length > 9 ? dots = '...' : dots = '.';
			//ім'я файлу з 0 по 10 символ, крапка/трикрапки, друга частина імені (розширення)
			const name = arr[0].substring(0, 9) + dots + arr[1];
			//отримуємо елемент "файл не вибран" - це попередній елемент до 
			input.previousElementSibling.textContent = name;	
            


			//ВІДПРАВКА ФАЙЛУ НА СЕРВЕР ВІДРАЗУ ПРИ ПЕРЕТЯГУВАННІ
			// Отримуємо файл з події перетягування
			const file = e.dataTransfer.files[0];
			//Посилаємо його на сервер відразу
			const formData = new FormData();
			formData.append('file', file);
			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
				})
				.catch((error) => {
					console.error(error);
				});
			
		});

		
	});
};

export default drop;