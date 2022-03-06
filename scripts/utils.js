import { popupOpenedClass } from './constants.js';

// Открытие попапа
export const openPopup = (popup) => {
  popup.classList.add(popupOpenedClass);
  document.addEventListener('keydown', escHandler);
}

// Закрытие попапа
export const closePopup = (popup) => {
  popup.classList.remove(popupOpenedClass);
  document.removeEventListener('keydown', escHandler);
}

// Закрытие попапа при событии
export const closePopupOnEvt = (evt, popup, button) => {
  if (evt.target === popup || evt.target === button) {
      closePopup(popup);
  }
}

// Обработка Esc
export const escHandler = (evt) => {
  if (evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
  }
}
