'use strict';
(function () {
// объявление констант
  const {validationCheck, formElement, openForm, numberOfRooms} = window.form;
  const {itemDisplay} = window.data;
  const {clonedAds} = window.map;

  // Нашли шаблон метки
  const readyTemplatePin = document.querySelector(`#pin`)
  .content
  .querySelector(`.map__pin`);
  const blockForDrawing = document.querySelector(`.map__pins`);

  const map = document.querySelector(`.map`);

  // добавьте обработчик события mousedown на элемент .map__pin--main
  const pinMain = document.querySelector(`.map__pin--main`);
  pinMain.addEventListener(`mousedown`, function (evt) {
    if (evt.button === 0) {
      activatePage();
    }
  });

  // перевод страницы в активный режим с клавиатуры: установить обработчик keydown для метки
  // и если пользователь нажал Enter — перевести страницу в активный режим.
  pinMain.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      activatePage();
    }
  });

  // функция для активации страницы в доступный режим
  const activatePage = function () {
    const active = function (elements) {
      elements.forEach(function (element) {
        element.removeAttribute(`disabled`, `disabled`);
      });
    };
    active(formElement);
    map.classList.remove(`map--faded`);
    openForm.classList.remove(`ad-form--disabled`);
    blockForDrawing.appendChild(clonedAds(itemDisplay, readyTemplatePin));
    numberOfRooms.addEventListener(`change`, function () {
      validationCheck();
    });
  };
})();
