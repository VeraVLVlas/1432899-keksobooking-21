'use strict';
// объявили переменные с данными объектов
const avatarAuthor = [`img/avatars/user01.png`, `img/avatars/user02.png`, `img/avatars/user03.png`, `img/avatars/user04.png`, `img/avatars/user05.png`, `img/avatars/user06.png`, `img/avatars/user07.png`, `img/avatars/user08.png`];
const titleAuthor = [`Для большой компании`, `Горячее предложение`, `Лучшее место для Вас`, `Плюс тортик к чаю`, `С видом на море`, `Сдам со скидкой`, `Лучшее предложение`, `Просторная квартира`];
const addressAuthor = [`600,350`, `820,210`, `100,100`, `50,400`, `500,20`, `600,10`, `40,760`, `140,200`];
const priceAuthor = [1000, 2500, 3200, 1400, 4500, 1600, 1100];
const typePremises = [`palace`, `flat`, `house`, `bungalow`];
const roomsPremises = [1, 2, 3, 4];
const numberGuests = [1, 2, 3, 4, 5];
// const checkTime = [12:00, 13:00, 14:00]; выдает ошибку о неизвестном токене :
// const checkoutTime = [12:00, 13:00, 14:00];
const facilities = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const additionally = [`Большая лоджия`, `Вы вернетесь сюда снова`, `Минибар включен в стоимость`, `можно заехать с животными`, `есть парковка`, `есть детская комната`, `просторные комнаты`, `с домашним кинотеатром`];
const photoRooms = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
const locationByX = [1000, 420, 690, 844, 1320, 20, 140];
const locationByY = [130, 270, 369, 456, 582, 630];

// Убрали класс который скрывает интерактивность карты
const map = document.querySelector(`.map`);
map.classList.remove(`map--faded`);

// пишем функцию для создания массива
const generatedAd = function () {

  return {
    "author": {
      "avatar": avatarAuthor [getRandomIntInclusive(0, avatarAuthor.length)]
    },
    "offer": {
      "title": titleAuthor [getRandomIntInclusive(0, titleAuthor.length)],
      "address": addressAuthor [getRandomIntInclusive(0, addressAuthor.length)],
      "price": priceAuthor [getRandomIntInclusive(0, priceAuthor.length)],
      "type": typePremises [getRandomIntInclusive(0, typePremises.length)],
      "rooms": roomsPremises [getRandomIntInclusive(0, roomsPremises.length)],
      "guests": numberGuests [getRandomIntInclusive(0, numberGuests.length)],
      // "checkin": checkTime [getRandomIntInclusive(0, checkTime.length)],
      // "checkout": checkoutTime [getRandomIntInclusive(0, checkoutTime.length)],
      "features": facilities [getRandomIntInclusive(0, facilities.length)],
      "description": additionally [getRandomIntInclusive(0, additionally.length)],
      "photos": photoRooms [getRandomIntInclusive(0, photoRooms.length)]
    },
    "location": {
      "x": locationByX [getRandomIntInclusive(0, locationByX.length)],
      "y": locationByY [getRandomIntInclusive(0, locationByY.length)]
    }
  };
};

// пишем функцию для генерирования объектов
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Нашли шаблон метки
const readyTemplate = document.querySelector(`#pin`).content;
const pinButton = readyTemplate.querySelector(`.map__pin`);
// Нашли див для вставки клонированной метки
const blockForDrawing = document.querySelector(`.map__pins`);
// Вставили элементы с помощью DocumentFragment.
const fragment = document.createDocumentFragment();


// написали цикл для клонирования 8ми пинов
for (const i = 1; i <= 8; i++) {
  const clonedElement = pinButton.cloneNode(true);
  clonedElement.style = `left:${location.x + 570}px; top:${location.y + 375}px`;

  const picture = pinButton.querySelector(`img`);
  picture.src = generatedAd.author.avatar;
  picture.alt = generatedAd.offer.title;
  clonedElement.appendChild(picture);

  fragment.appendChild(clonedElement);
}


blockForDrawing.appendChild(fragment);
