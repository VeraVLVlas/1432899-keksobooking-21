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

// Функция для создание DOM элемента из одного объекта объявления
const clonedAds = function (newMapPin, template) {
  const fragment = document.createDocumentFragment();

  newMapPin.forEach(function (pinClone) {
    const clonElement = template.cloneNode(true);
    const clonPictures = clonElement.querySelector(`img`);
    clonElement.style = `left: ${pinClone.location.x}px; top: ${pinClone.location.y}px`;
    clonPictures.src = `${pinClone.autor.avatar}`;
    fragment.appendChild(clonElement);
  });
  return fragment;
};

// найдем шаблон
// const templateCard = document.querySelector(`#card`)
//   .content
//   .querySelector(`.popup`);

// создайте DOM-элемент объявления (карточка объявления), заполните его данными из объекта:
/* const addingNewElements = function (advt, pattern) {
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

  return cardFragment;
}; */

// Нашли шаблон метки
const readyTemplatePin = document.querySelector(`#pin`)
  .content
  .querySelector(`.map__pin`);

// Нашли див для вставки клонированной метки
const blockForDrawing = document.querySelector(`.map__pins`);
// объявление переменных для работы с данными (вызов функций);
const itemDisplay = weGenerateAds();

// Работа с ДОМ
const map = document.querySelector(`.map`);

// Вставьте полученный DOM-элемент в блок .map перед блоком.map__filters-container.
// const mapContainer = map.querySelector(`.map__filters-container`);
// map.insertBefore(addingNewElements(itemDisplay[0], templateCard), mapContainer);


// добавить через DOM-операции самим полям или fieldset, которые их содержат, атрибут disabled.
// найдем все fieldset

const section = document.querySelector(`.notice`);
const openForm = section.querySelector(`form`);
// const form = openForm.querySelector(`.ad-form`);
const formPhoto = document.querySelector(`.ad-form-header`);
// const formElement = openForm.querySelectorAll(`fieldset`); // почему нельзя добавить атрибут на все элементы?
// Добавляет disabled
const addsElementLocking = function (element) {
  element.setAttribute(`disabled`, `disabled`);
};
addsElementLocking(formPhoto);
// addsElementLocking(formElement);


// добавьте обработчик события mousedown на элемент .map__pin--main
const pinMain = document.querySelector(`.map__pin--main`);

pinMain.addEventListener(`mousedown`, function (evt) {
  // удаляет disabled
  const unlocksElements = function (element) {
    element.removeAttribute(`disabled`, `disabled`);
  };
  if (evt.button === 0) {
    unlocksElements(formPhoto);
    blockForDrawing.appendChild(clonedAds(itemDisplay, readyTemplatePin));
    openForm.classList.remove(`ad-form--disabled`);
    map.classList.remove(`map--faded`);
  }
});

// перевод страницы в активный режим с клавиатуры: установить обработчик keydown для метки
// и если пользователь нажал Enter — перевести страницу в активный режим.
pinMain.addEventListener(`keydown`, function (evt) {
  // удаляет disabled
  const unlocksElements = function (element) {
    element.removeAttribute(`disabled`, `disabled`);
  };
  if (evt.key === `Enter`) {
    unlocksElements(formPhoto);
    blockForDrawing.appendChild(clonedAds(itemDisplay, readyTemplatePin));
    openForm.classList.remove(`ad-form--disabled`);
    map.classList.remove(`map--faded`);
  }
});

// Заполнение поля адреса
// const PIN_WIDTH = 65;
const PIN_HEIGHT = 65;
const INDEX_HEIGHT = 22;
const addressField = openForm.querySelector(`#address`);
const pinPositionX = pinMain.style.top;
const pinPositionY = pinMain.style.left;

const initPinMainPosition = function () {
  addressField.value = `${pinPositionX}, ${pinPositionY}`; // данные отображаются некорректно
};
initPinMainPosition();

const setupAddress = function () {
  const newPinY = Math.trunc(pinPositionX + PIN_HEIGHT + INDEX_HEIGHT); // что ещё прибавляется
  addressField.value = `${pinPositionX}, ${newPinY}`; // данные отображаются некорректно
};
setupAddress();

// Непростая валидация
const numberOfRooms = openForm.querySelector(`#room_number`);
const numberOfGuests = openForm.querySelector(`#capacity`);

const compareByQuantity = function () {
  const guestData = numberOfGuests.value;
  const roomData = numberOfRooms.value;

  if (Number(roomData) === 100 && Number(guestData) !== 0) {
    numberOfGuests.setCustomValidity(`Вариант '100 комнат' предназначен для не для гостей`);
  } else if (Number(guestData) === 0 && Number(roomData) !== 100) {
    numberOfGuests.setCustomValidity(`Вариант 'не для гостей' подходит только для '100 комнат'`);
  } else if (Number(roomData) < Number(guestData)) {
    numberOfGuests.setCustomValidity(`Количество гостей не соответствует количеству комнат. Количество гостей не должно превышать: ${Number(roomData)} `);
  } else {
    numberOfGuests.setCustomValidity(``);
  }
  numberOfGuests.reportValidity();
};

numberOfGuests.addEventListener(`change`, function () {
  compareByQuantity();
});

numberOfRooms.addEventListener(`change`, function () {
  compareByQuantity();
});
