'use strict';
// модуль, который работает с формой объявления.
(function () {
  const MIN_NUMBER_SYMBOLS = 30;
  const MAX_NUMBER_SYMBOLS = 100;
  const MAX_PRICE = 1000000;
  // добавить через DOM-операции самим полям или fieldset, которые их содержат, атрибут disabled.
  // Добавляет disabled
  const disabled = function (elements) {
    elements.forEach(function (element) {
      element.setAttribute(`disabled`, `disabled`);
    });
  };
  const section = document.querySelector(`.notice`);
  const openForm = section.querySelector(`form`);
  const formPhoto = openForm.querySelector(`.ad-form-header`);
  const formElement = openForm.querySelectorAll(`fieldset`);
  disabled(formElement);
  formPhoto.setAttribute(`disabled`, `disabled`);

  // Непростая валидация
  const roomValueMap = {
    "1": [`1`],
    "2": [`2`, `1`],
    "3": [`3`, `2`, `1`],
    "100": [`0`]
  };

  const numberOfRooms = openForm.querySelector(`#room_number`);
  const numberOfGuests = openForm.querySelector(`#capacity`);
  // функция для проверки комнат
  const validationCheck = function () {
    const room = numberOfRooms.value;

    Array.from(numberOfGuests.options).forEach(function (option) {
      if (roomValueMap[room].includes(option.value)) {
        option.removeAttribute(`disabled`);
        option.setAttribute(`selected`, ``);
      } else {
        option.setAttribute(`disabled`, ``);
        option.removeAttribute(`selected`);
      }
    });
  };

  validationCheck();

  // Поле «Заголовок объявления».
  const headline = openForm.querySelector(`#title`);
  headline.addEventListener(`change`, function () {
    const characterLength = headline.value.length;

    if (characterLength < MIN_NUMBER_SYMBOLS) {
      headline.setCustomValidity(`Введите ` + (MIN_NUMBER_SYMBOLS - characterLength) + ` симв.`);
    } else if (characterLength > MAX_NUMBER_SYMBOLS) {
      headline.setCustomValidity(`Удалите` + (characterLength - MAX_NUMBER_SYMBOLS) + ` симв.`);
    } else {
      headline.setCustomValidity(``);
    }
    headline.reportValidity();
  });

  // Поле «Тип жилья».
  const housingPrice = openForm.querySelector(`#price`);
  housingPrice.addEventListener(`change`, function () {
    const enteredCharacters = housingPrice.value;

    if (enteredCharacters > MAX_PRICE) {
      housingPrice.setCustomValidity(`Сумма не совпадает с ` + MAX_PRICE);
    } else {
      housingPrice.setCustomValidity(``);
    }
    housingPrice.reportValidity();
  });

  const typeHousing = openForm.querySelector(`#type`);
  typeHousing.addEventListener(`change`, function () {
    if (typeHousing.value === `bungalow`) {
      housingPrice.setAttribute(`min`, `0`);
      housingPrice.setAttribute(`placeholder`, `0`);
    } else if (typeHousing.value === `flat`) {
      housingPrice.setAttribute(`min`, `1000`);
      housingPrice.setAttribute(`placeholder`, `1000`);
    } else if (typeHousing.value === `house`) {
      housingPrice.setAttribute(`min`, `5000`);
      housingPrice.setAttribute(`placeholder`, `5000`);
    } else if (typeHousing.value === `palace`) {
      housingPrice.setAttribute(`min`, `10000`);
      housingPrice.setAttribute(`placeholder`, `10000`);
    }
  });

  // Поля «Время заезда», «Время выезда».
  const timeOut = openForm.querySelector(`#timeout`);
  const timeIn = openForm.querySelector(`#timein`);

  const comparesCheckInTimes = function () {
    timeOut.value = timeIn.value;
  };

  timeIn.addEventListener(`change`, function () {
    comparesCheckInTimes();
  });

  timeOut.addEventListener(`change`, function () {
    comparesCheckInTimes();
  });

  // Значением полей «Ваша фотография» и «Фотография жилья» может быть только изображение.
  openForm.querySelector(`#avatar`).setAttribute(`accept`, `image/png, image/jpeg`);
  openForm.querySelector(`#images`).setAttribute(`accept`, `image/png, image/jpeg`);


  window.form = {
    validationCheck,
    numberOfRooms
  };
})();
