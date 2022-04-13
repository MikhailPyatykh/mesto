import './index.css';

import Api from '../components/Api.js';

import {
  initialCards,
  cardTemplateSelector,
  buttonEditProfile,
  buttonAddPlace,
  formsValidationConfig,
  avatarProfile,
  elementsSelectors,
  nameProfile,
  occupationProfile,
  nameProfileInput,
  occupationProfileInput
} from '../utils/constants.js';

import {
  FormValidator
} from '../components/FormValidator.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import UserInfo from '../components/UserInfo.js';


// Добавление alt аватарке
const photoDescription = () => {
  avatarProfile.alt = 'Фото ' + nameProfile.textContent + ' ' + 'Род занятий ' + occupationProfile.textContent;
}

photoDescription();

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-38/cards', {
  headers: {
    authorization: 'da546cc6-febd-4e48-90b5-e55f89894793',
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
});

api.getInitialCards().then((cards) => {
  const apinitialCards = cards;
  console.log(apinitialCards);
  return apinitialCards;
})

// Используем класс FormValidator для валидации форм
const editFormValidator = new FormValidator(formsValidationConfig, editProfileInputs);
const addCardFormValidator = new FormValidator(formsValidationConfig, newPlaceInputs);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// Используем класс PopupWithImage для открытия картинки карточки места
const popupWithImage = new PopupWithImage(elementsSelectors.popupView);

// Callback функция с данными для картинки карточки места
const handleCardClick = (name, link) => {
  popupWithImage.openPopup(name, link);
}

// Вешаем слушатели на картинку карточки места
popupWithImage.setEventListeners();

//Callback функция инициализации класса Card и создания карточки
const initCard = (data, selector, callback) => {
  const card = new Card(data, selector, callback);
  const cardElement = card.createCard();
  return cardElement;
}

//Формируем карточки из массива
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    cardList.addItem(initCard(item, cardTemplateSelector, handleCardClick), false);
  }
}, elementsSelectors.placesList);

// Используем класс UserInfo для отображения и изменения информации в профиле пользователя
const userInfo = new UserInfo(elementsSelectors);

// Callback функция для ввода новой информации на страницу
const handleSubmitProfile = (data) => {
  userInfo.setUserInfo(data);
}

// Используем класс PopupWithForm для попапа профиля
const popupWithFormProfile = new PopupWithForm(elementsSelectors.popupEditProfile, handleSubmitProfile);

// Вешаем обработчик на кнопку открытия профиля пользователя, через класс UserInfo задаем инпутам текст со страницы
buttonEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameProfileInput.value = userData.name;
  occupationProfileInput.value = userData.info;
  popupWithFormProfile.openPopup();
  editFormValidator.resetValidation();
})

// Вешаем обработчики на попап профиля
popupWithFormProfile.setEventListeners();


// Callback функция добавления нового места пользователем на страницу
const handleSubmitPlace = (data) => {
  const cardData = {
    name: data.newPlaceNameInput,
    link: data.newPlaceLinkInput,
  }
  cardList.addItem(initCard(cardData, cardTemplateSelector, handleCardClick), true);
}

// Используем класс PopupWithForm для попапа профиля
const popupWithFormPlace = new PopupWithForm(elementsSelectors.popupAddPlace, handleSubmitPlace);

// Вешаем обработчик на кнопку открытия формы для добавления нового места
buttonAddPlace.addEventListener('click', () => {
  popupWithFormPlace.openPopup();
  addCardFormValidator.resetValidation();
})

//  Вешаем обработчики на попап профиля
popupWithFormPlace.setEventListeners();

//Вставляем карточки
cardList.renderItems();
