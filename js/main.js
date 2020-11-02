'use strict';

// объявление констант

const NUMBER_OF_ADS = 8;
const TITLE_AUTHOR = [`Для большой компании`, `Горячее предложение`, `Лучшее место для Вас`, `Плюс тортик к чаю`, `С видом на море`, `Сдам со скидкой`, `Лучшее предложение`, `Просторная квартира`];
const ADDRESS_AUTHOR = [`600,350`, `820,210`, `100,100`, `50,400`, `500,20`, `600,10`, `40,760`, `140,200`];
const PRICE_AUTHOR = [1000, 2500, 3200, 1400, 4500, 1600, 1100];
const TYPE_PREMISES = [`palace`, `flat`, `house`, `bungalow`];
const ROOMS_PREMISISS = [1, 2, 3, 4, 5, 6, 7, 8];
const NUMBER_GUESTS = [1, 2, 3, 4, 5, 6, 7, 8];
const CHECK_TIME = [`12:00`, `13:00`, `14:00`];
const CHECKOUT_TIME = [`12:00`, `13:00`, `14:00`];
const FACILITIES = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const ADDITIONALLY = [`Большая лоджия`, `Вы вернетесь сюда снова`, `Минибар включен в стоимость`, `можно заехать с животными`, `есть парковка`, `есть детская комната`, `просторные комнаты`, `с домашним кинотеатром`];
const PHOTO_ROOMS = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
const LOCATION_BY_X = [100, 200, 300, 910, 450, 818, 718];
const LOCATION_BY_Y = [200, 180, 196, 540, 360, 130, 101, 250, 630];
const PIN_HEIGHT = 65;
const INDEX_HEIGHT = 22;
const MIN_NUMBER_SYMBOLS = 30;
const MAX_NUMBER_SYMBOLS = 100;
const MAX_PRICE = 1000000;

// описание функций (но не их вызов);

// пишем функцию для случайного числа
const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// пишем функцию для генерирования случайного элемента в массив
const randomElements = function (arr) {
  return arr [getRandomIntInclusive(0, arr.length - 1)];
};

// 1. создаем пины
// пишем функцию для создания одного объявления
const generatedAd = function () {
  return {
    'autor': {
      'avatar': `img/avatars/user0${getRandomIntInclusive(1, 8)}.png`
    },
    'offer': {
      'title': randomElements(TITLE_AUTHOR),
      'address': randomElements(ADDRESS_AUTHOR),
      'price': randomElements(PRICE_AUTHOR),
      'type': randomElements(TYPE_PREMISES),
      'rooms': randomElements(ROOMS_PREMISISS),
      'quests': randomElements(NUMBER_GUESTS),
      'checkin': randomElements(CHECK_TIME),
      'checkuot': randomElements(CHECKOUT_TIME),
      'features': randomElements(FACILITIES),
      'description': randomElements(ADDITIONALLY),
      'photos': randomElements(PHOTO_ROOMS),
    },
    'location': {
      'x': randomElements(LOCATION_BY_X),
      'y': randomElements(LOCATION_BY_Y),
    }
  };
};

// функция для создание массива объявлений
const weGenerateAds = function () {
  const addPins = [];
  for (let i = 0; i < NUMBER_OF_ADS; i++) {
    addPins.push(generatedAd());
  }
  return addPins;
};

// 2. создаем ДОМ элементы из этих пинов
// Функция для создание DOM элемента из одного объекта объявления
const clonedAds = function (newMapPin, template) {
  const fragment = document.createDocumentFragment();

  newMapPin.forEach(function (pinClone) {
    const clonElement = template.cloneNode(true);
    const clonPictures = clonElement.querySelector(`img`);
    clonElement.style = `left: ${pinClone.location.x}px; top: ${pinClone.location.y}px`;
    clonPictures.src = `${pinClone.autor.avatar}`;
    fragment.appendChild(clonElement);

    clonElement.addEventListener(`click`, function () {
      const mapContainer = map.querySelector(`.map__filters-container`);
      map.insertBefore(addingNewElements(itemDisplay[0], templateCard), mapContainer);
    });
  });
  return fragment;
};

// найдем шаблон
const templateCard = document.querySelector(`#card`)
.content
.querySelector(`.popup`);

// создайте DOM-элемент объявления (карточка объявления), заполните его данными из объекта:
const addingNewElements = function (advt, pattern) {
  const cardFragment = document.createDocumentFragment();
  const addingToAd = pattern.cloneNode(true);
  addingToAd.querySelector(`.popup__title`).textContent = `${advt.offer.title}`;
  addingToAd.querySelector(`.popup__text--address`).textContent = `${advt.offer.address}`;
  addingToAd.querySelector(`.popup__text--price`).textContent = `${advt.offer.price} ₽/ночь`;
  addingToAd.querySelector(`.popup__type`).textContent = `${advt.offer.type}`;
  addingToAd.querySelector(`.popup__text--capacity`).textContent = `${advt.offer.rooms} комнат для ${advt.offer.quests} гостей`;
  addingToAd.querySelector(`.popup__text--time`).textContent = `Заезд после ${advt.offer.checkin} выезд до ${advt.offer.checkuot}`;
  addingToAd.querySelector(`.popup__features`).textContent = `${advt.offer.features}`;
  addingToAd.querySelector(`.popup__description`).textContent = `${advt.offer.description}`;
  addingToAd.querySelector(`.popup__photos img`).src = `${advt.offer.photos}`;

  cardFragment.appendChild(addingToAd);

  const clousePins = function () {
    addingToAd.querySelector(`.popup__close`).addEventListener(`click`, function () {
      addingToAd.style.display = `none`;
    });
  };
  clousePins();

  document.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      addingToAd.style.display = `none`;
    }
  });

  return cardFragment;
};

// Нашли шаблон метки
const readyTemplatePin = document.querySelector(`#pin`)
  .content
  .querySelector(`.map__pin`);
const blockForDrawing = document.querySelector(`.map__pins`);
const itemDisplay = weGenerateAds();
const map = document.querySelector(`.map`);

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

// Заполнение поля адреса, костыльный вариант
const addressField = openForm.querySelector(`#address`);
const pinPositionX = pinMain.offsetTop;
// const pinPositionY = pinMain.offsetLeft;

const setupAddress = function () {
  const newPinY = pinPositionX + PIN_HEIGHT + INDEX_HEIGHT;
  addressField.value = `${pinPositionX}, ${newPinY}`;
};
setupAddress();

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
const headline = document.getElementById(`title`);
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
const housingPrice = document.getElementById(`price`);
housingPrice.addEventListener(`change`, function () {
  const enteredCharacters = housingPrice.value;

  if (enteredCharacters > MAX_PRICE) {
    housingPrice.setCustomValidity(`Сумма не совпадает с ` + MAX_PRICE);
  } else {
    housingPrice.setCustomValidity(``);
  }
  housingPrice.reportValidity();
});

const typeHousing = document.getElementById(`type`);
const setsPrice = function () {

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
};
setsPrice();

typeHousing.addEventListener(`change`, function () {
  setsPrice();
});

// Поля «Время заезда», «Время выезда».
const timeOut = document.getElementById(`timeout`);
const timeIn = document.getElementById(`timein`);

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
const photoCheck = function () {
  document.getElementById(`avatar`).setAttribute(`accept`, `image/png, image/jpeg`);
  document.getElementById(`images`).setAttribute(`accept`, `image/png, image/jpeg`);
};

photoCheck();
