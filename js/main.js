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

// const addPins = weGenerateAds();
// появляется ошибка, т.к мы не используем переменную addPins, если её скрыть, ничего не меняется

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

// Нашли шаблон метки
const readyTemplatePin = document.querySelector(`#pin`)
  .content
  .querySelector(`.map__pin`);

// Нашли див для вставки клонированной метки
const blockForDrawing = document.querySelector(`.map__pins`);
// объявление переменных для работы с данными (вызов функций);
const itemDisplay = weGenerateAds();
blockForDrawing.appendChild(clonedAds(itemDisplay, readyTemplatePin));

// Работа с ДОМ
// Убрали класс который скрывает интерактивность карты
const map = document.querySelector(`.map`);
map.classList.remove(`map--faded`);
