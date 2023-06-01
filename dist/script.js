/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");






window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
});

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach(input => {
    //тільки українські літери та числа (але автозаповненням можно ввести англійські)
    input.addEventListener('keypress', function (e) {
      //всі символи від а до я та 0 - 9 в любому регістрі глобально
      if (e.key.match(/[^а-яіїґє 0-9]/ig)) {
        e.preventDefault();
      }
    });

    //тільки українські літери та числа (автозаповненням не можно ввести англійські)
    /* input.addEventListener('input', function(e) {
    	const inputValue = e.target.value;
    	// Заміна всіх іноземних символів на порожній рядок
    	const ukrainianOnlyValue = inputValue.replace(/[^а-яіїґєї 0-9]/gi, '');
    			// Оновлюємо значення інпута з видаленням іноземних символів
    	if (inputValue !== ukrainianOnlyValue) {
    		e.target.value = ukrainianOnlyValue;
    	}
    }); */
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const forms = () => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    upload = document.querySelectorAll('[name="upload"]'),
    textArea = document.querySelectorAll('[name="message"]');
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
    item.addEventListener('submit', e => {
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
      Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');

          //document.body.style.overflow = '';
          //document.body.style.marginRight = '0px';
          //форма закривається
          //windows.forEach(item => {
          //	item.style.display = 'none';							
          //});				
        }, 5000);
      });
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
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
    this.value = matrix.replace(/./g, function (a) {
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
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  //змінна слідкує, чи була натиснута хоча б одна кнопка
  let btnPressed = false;
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    let destroy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]'),
      scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
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
    modal.addEventListener('click', e => {
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
    document.addEventListener('keydown', e => {
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
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= scrollHeight) {
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
    timerId = setTimeout(function () {
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

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  //завантаження статичних карток товару (які сховані на сторінці)
  /* const cards = document.querySelectorAll(styles);
         cards.forEach(card => {
  	    card.classList.add('animated', 'fadeInUp');
  });
  
  btn.addEventListener('click', () => {
  	cards.forEach(card => {
  		card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
  		card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  	});
  	btn.remove();
  }); */

  //завантаження динамічних карток товару (вони приходять з серверу) JSON-SERVER
  btn.addEventListener('click', () => {
    Object(_services_requests__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/styles')
    //обробляємо проміс
    .then(res => {
      createCards(res);
      btn.remove();
    }).catch(error => {
      btn.textContent = 'Нема відповіді від сервера. Неможливо завантажити додаткові стилі.';
      btn.style.color = 'red';
      console.log(error);
      setTimeout(() => {
        btn.textContent = 'Показати ще стилі';
        btn.style.color = ''; // Відновити колір тексту до оригінального значення
      }, 10000);
    });
  });

  //Функція, яка конструює верстку
  function createCards(response) {
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
            <div class="styles-block">
                <img src="${src}" alt="style">
                <h4>${title}</h4>
                <a href="${link}">Подробнее</a>
            </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  } catch (e) {}

  //функція, яка включає автопереключення слайдів
  function activateAnimation() {
    //функція для напряму переключення слайдів
    if (direction === 'vertical') {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.add('slideInUp');
      }, 10000);
    } else {
      paused = setInterval(function () {
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
/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
//Функція відправки запиту на сервер
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};

//Функція для отримання карток товару
const getResource = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ });
//# sourceMappingURL=script.js.map