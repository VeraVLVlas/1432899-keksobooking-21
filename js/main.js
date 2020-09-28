'use strict';

// Массив из 8 сгенерированных JS объектов
const advertiser = [{
  "author": {
    "avatar": 'img/avatars/user01.png'
  },
  "offer": {
    "title": 'предложениe первое',
    "address": '600,350',
    "price": 1500,
    "type": 'palace',
    "rooms": 1,
    "guests": 1,
    "checkin": '12:00',
    "checkout": '12:00',
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": 'Лучшее на рынке горячее предложениe!',
    "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
    "x": 15,
    "y": 130
  }
},

{
  "author": {
    "avatar": 'img/avatars/user02.png'
  },
  "offer": {
    "title": 'предложениe второе',
    "address": '600,320',
    "price": 1600,
    "type": 'flat',
    "rooms": 2,
    "guests": 2,
    "checkin": '13:00',
    "checkout": '13:00',
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": 'Лучшее на рынке горячее предложениe!',
    "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
    "x": 30,
    "y": 135
  }
},
{
  "author": {
    "avatar": 'img/avatars/user03.png'
  },
  "offer": {
    "title": 'предложениe третье',
    "address": '590,300',
    "price": 1750,
    "type": 'house',
    "rooms": 3,
    "guests": 4,
    "checkin": '14:00',
    "checkout": '14:00',
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": 'Лучшее на рынке горячее предложениe!',
    "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
    "x": 40,
    "y": 155
  }
},
{
  "author": {
    "avatar": 'img/avatars/user04.png'
  },
  "offer": {
    "title": 'предложениe четвертое',
    "address": '550,300',
    "price": 1900,
    "type": 'bungalow',
    "rooms": 4,
    "guests": 5,
    "checkin": '12:00',
    "checkout": '13:00',
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": 'Лучшее на рынке горячее предложениe!',
    "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
    "x": 50,
    "y": 175
  }
},
{
  "author": {
    "avatar": 'img/avatars/user05.png'
  },
  "offer": {
    "title": 'предложениe пятое',
    "address": '540,270',
    "price": 2100,
    "type": 'palace',
    "rooms": 5,
    "guests": 6,
    "checkin": '13:00',
    "checkout": '12:00',
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": 'Лучшее на рынке горячее предложениe!',
    "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
    "x": 60,
    "y": 195
  }
},
{
  "author": {
    "avatar": 'img/avatars/user06.png'
  },
  "offer": {
    "title": 'предложениe шестое',
    "address": '510,250',
    "price": 2250,
    "type": 'flat',
    "rooms": 2,
    "guests": 4,
    "checkin": '14:00',
    "checkout": '14:00',
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": 'Лучшее на рынке горячее предложениe!',
    "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
    "x": 70,
    "y": 215
  }
},
{
  "author": {
    "avatar": 'img/avatars/user07.png'
  },
  "offer": {
    "title": 'предложениe седьмое',
    "address": '485,230',
    "price": 2550,
    "type": 'house',
    "rooms": 4,
    "guests": 2,
    "checkin": '12:00',
    "checkout": '14:00',
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": 'Лучшее на рынке горячее предложениe!',
    "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
    "x": 80,
    "y": 295
  }
},
{
  "author": {
    "avatar": 'img/avatars/user08.png'
  },
  "offer": {
    "title": 'предложениe восьмое',
    "address": '445,200',
    "price": 3750,
    "type": 'bungalow',
    "rooms": 6,
    "guests": 6,
    "checkin": '14:00',
    "checkout": '12:00',
    "features": ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
    "description": 'Лучшее на рынке горячее предложениe!',
    "photos": ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"]
  },
  "location": {
    "x": 100,
    "y": 495
  }
}
];
// Убрали класс который скрывает интерактивность карты
const map = document.querySelector('.map');
map.classList.remove('map--faded');

// Нашли шаблон метки
const readyTemplate = document.querySelector('#pin').content;
const templateData = readyTemplate.querySelector('.map__pin');

// Функция для передачи тега, класса, и текстового содержимого
const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

// Создаем объявление
const tenantAnnouncement = function (mapPin) {
  const listItem = makeElement('button', 'map__pin');
  listItem.style = 'left:{location.x + 570}px; top:{location.y + 375}px;';

  const picture = makeElement('img');
  picture.src = mapPin.author.avatar;
  picture.alt = mapPin.offer.title;
  listItem.appendChild(picture);

  return listItem;
};

// Создаем функцию для отрисовки объявлении арендодателей
const tenantСard = function (mapPins) {
  const markupList = document.querySelector('.map__pins');

  for (let i = 0; i < mapPins.length; i++) {
    const readyAd = tenantAnnouncement(mapPins[i]);
    markupList.appendChild(readyAd);
  }
};
tenantСard(advertiser);
