import {
  initialCards,
  placesList,
  cardTemplateSelector,
  popupEditProfile,
  popupAddPlace,
  buttonEditProfile,
  buttonAddPlace,
  formsValidationConfig,
  popupView,
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

// Используем класс FormValidator для валидации форм
const editFormValidator = new FormValidator(formsValidationConfig, editProfileInputs);
const addCardFormValidator = new FormValidator(formsValidationConfig, newPlaceInputs);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// Используем класс PopupWithImage для открытия картинки карточки места
const popupWithImage = new PopupWithImage(popupView);

// Функция с данными для картинки карточки места
const handleCardClick = (name, link) => {
  popupWithImage.openPopup(name, link);
}

// Вешаем слушатели на картинку карточки места
popupWithImage.setEventListeners();

//Формируем карточки из массива
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, cardTemplateSelector, handleCardClick);
    const cardElement = card.createCard();
    cardList.addItem(cardElement, false);
  }
}, placesList);




// Используем класс UserInfo для отображения и изменения информации в профиле пользователя
const userInfo = new UserInfo(elementsSelectors);

// Коллбэк функция для ввода новой информации на страницу
const handleSubmitProfile = (data) => {
  userInfo.setUserInfo(data);
}

// Используем класс PopupWithForm для попапа профиля
const popupWithFormProfile = new PopupWithForm(popupEditProfile, handleSubmitProfile);

// Вешаем обработчик на кнопку открытия профиля пользователя, через класс UserInfo задаем инпутам текст со страницы
buttonEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameProfileInput.value = userData.name;
  occupationProfileInput.value = userData.info;
  popupWithFormProfile.openPopup();
  editFormValidator.resetValidation();
})

//  Вешаем обработчики на попап профиля
popupWithFormProfile.setEventListeners();


// Коллбэк функция добавления нового места пользователем на страницу
const handleSubmitPlace = (data) => {
  const cardData = {
    name: data.newPlaceNameInput,
    link: data.newPlaceLinkInput,
  }
  const newCard = new Card(cardData, cardTemplateSelector, handleCardClick);
  const cardElement = newCard.createCard();
  cardList.addItem(cardElement, true);

}

// Используем класс PopupWithForm для попапа профиля
const popupWithFormPlace = new PopupWithForm(popupAddPlace, handleSubmitPlace);

// Вешаем обработчик на кнопку открытия профиля пользователя, через класс UserInfo задаем инпутам текст со страницы
buttonAddPlace.addEventListener('click', () => {
  popupWithFormPlace.openPopup();
  addCardFormValidator.resetValidation();
})

//  Вешаем обработчики на попап профиля
popupWithFormPlace.setEventListeners();

//Вставляем карточки
cardList.renderItems();
