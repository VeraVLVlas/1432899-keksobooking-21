'use strict';
// модуль, который отвечает за перетаскивание главного пина по карте
(function () {
  const PIN_WIDTH = 65;
  const PIN_HEIGHT = 65;
  const INDEX_HEIGHT = 22;
  const MAP_TOP = 130;
  const MAP_BOTTOM = 630;
  const MAP_LEFT = 0;
  const MAP_RIGHT = 1200;

  // пересчитываем координаты
  const pinMain = document.querySelector(`.map__pin--main`);
  const pinPositionX = Math.ceil(pinMain.offsetLeft + PIN_WIDTH / 2);
  const pinPositionY = Math.ceil(pinMain.offsetTop + PIN_HEIGHT / 2);

  // координаты по умолчанию
  const addressField = document.querySelector(`#address`);
  addressField.value = `${pinPositionX}, ${pinPositionY}`;

  // функция пересчета координат
  const recalculatesCoordinates = function () {
    const newpinX = Math.ceil(pinMain.offsetLeft + PIN_WIDTH / 2);
    const newpinY = Math.ceil(pinMain.offsetTop + PIN_HEIGHT + INDEX_HEIGHT);
    addressField.value = `${newpinX}, ${newpinY}`;
  };

  // координаты ограничивающие перемещение ползунка по карте
  const map = document.querySelector(`.map`);
  const coordinatesMap = {
    top: map.offsetTop + MAP_TOP - (PIN_HEIGHT + INDEX_HEIGHT),
    right: MAP_RIGHT + Math.ceil(PIN_WIDTH / 2) - pinMain.offsetWidth,
    bottom: MAP_BOTTOM - (PIN_HEIGHT + INDEX_HEIGHT),
    left: MAP_LEFT + Math.ceil(PIN_WIDTH / 2) - pinMain.offsetWidth
  };

  // код с демонстрации
  const pinMainMouseMove = function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      const shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      const coordinates = {
        x: pinMain.offsetLeft - shift.x,
        y: pinMain.offsetTop - shift.y
      };

      if (coordinates.x < coordinatesMap.left) {
        coordinates.x = coordinatesMap.left;
      } else if (coordinates.x > coordinatesMap.right) {
        coordinates.x = coordinatesMap.right;
      }

      if (coordinates.y < coordinatesMap.top) {
        coordinates.y = coordinatesMap.top;
      } else if (coordinates.y > coordinatesMap.bottom) {
        coordinates.y = coordinatesMap.bottom;
      }

      pinMain.style.top = `${coordinates.y}px`;
      pinMain.style.left = `${coordinates.x}px`;

      recalculatesCoordinates();
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  };

  pinMain.addEventListener(`mousedown`, pinMainMouseMove);

})();
