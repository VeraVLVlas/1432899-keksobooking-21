'use strict';
// модуль, который управляет карточками объявлений и метками:
// добавляет на страницу нужную карточку, отрисовывает метки и осуществляет взаимодействие карточки и метки на карте;
(function () {
  const {addingNewElements} = window.card;
  const {weGenerateAds} = window.data;
  // 2. создаем ДОМ элементы из этих пинов
  // Функция для создание DOM элемента из одного объекта объявления
  const map = document.querySelector(`.map`);

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
        map.insertBefore(addingNewElements(weGenerateAds()[0], templateCard), mapContainer);
      });
    });
    return fragment;
  };

  // найдем шаблон
  const templateCard = document.querySelector(`#card`)
.content
 .querySelector(`.popup`);

  window.map = {
    clonedAds
  };

})();
