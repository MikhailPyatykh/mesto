
// // Слушатели попапов на события
// popupEditProfile.addEventListener('click', (evt) => closePopupOnEvt(evt, popupEditProfile, buttonClosePopupEditProfile));
// popupAddPlace.addEventListener('click', (evt) => closePopupOnEvt(evt, popupAddPlace, buttonClosePopupAddPlace));
// popupView.addEventListener('click', (evt) => closePopupOnEvt(evt, popupView, buttonClosePopupView));

// const renderCard = (item) => {
//   // Используем класс Card
//   const card = new Card(item, cardTemplateSelector);
//   const cardElement = card.createCard();
//   return cardElement;
// }

// // Создание карточки из массива
// initialCards.forEach(item => {
//   placesList.append(renderCard(item));
// });

// // Создание карточки пользователем
// popupAddPlaceForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   const cardInfo = {
//       name: placeNameInput.value,
//       link: placeLinkInput.value,
//   };
//   closePopup(popupAddPlace);
//   placesList.prepend(renderCard(cardInfo));
//   popupAddPlaceForm.reset();
// });

// // Открытие пользователем формы имени и деятельности в профиле
// buttonEditProfile.addEventListener('click', () => {
//   openPopup(popupEditProfile);
//   nameProfileInput.value = nameProfile.textContent;
//   jobProfileInput.value = jobProfile.textContent;
//   // Проверяем поля ввода и выставляем нужное значение кнопке Submit
//   editFormValidator.resetValidation();
// });

// // Изменение пользователем имени и деятельности в профиле
// popupEditProfileForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   nameProfile.textContent = nameProfileInput.value;
//   jobProfile.textContent = jobProfileInput.value;
//   closePopup(popupEditProfile);
// });

// // Добавление пользователем карточки нового места
// buttonAddPlace.addEventListener('click', () => {
//   openPopup(popupAddPlace);
//   // Выставляем нужное значение кнопке Submit
//   addCardFormValidator.resetValidation();
// });

import {
  initialCards,
  placesList,
  cardTemplateSelector,
  popupEditProfile,
  popupAddPlace,
  buttonEditProfile,
  buttonAddPlace,
  formsValidationConfig,
  profileElements,
  popupView,
  avatarProfile
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
  avatarProfile.alt = 'Фото ' + profileElements.nameProfile.textContent + ' ' + 'Род занятий ' + profileElements.occupationProfile.textContent;
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

//Вставляем карточки из массива на страницу
cardList.renderItems();

//Функция с методом, который принимает новые данные пользователя и добавляет их на страницу
const handleSubmitFormEditProfile = () => {
  EditProfileUserInfo.setUserInfo();
}

// Используем класс PopupWithForm для открытия попапа профиля пользователя
const popupWithFormEditProfile = new PopupWithForm(popupEditProfile, handleSubmitFormEditProfile);

// Используем класс UserInfo для управления отображением информации о пользователе на странице
const EditProfileUserInfo = new UserInfo (profileElements);

// Вешаем слушатели на открытый попап формы
popupWithFormEditProfile.setEventListeners();

// Вешаем слушатель на кнопку открытия попапа профиля пользователя
buttonEditProfile.addEventListener('click', () => {
  EditProfileUserInfo.getUserInfo();
  popupWithFormEditProfile.openPopup();
  editFormValidator.resetValidation();
})

//Функция с методом, который принимает новые данные пользователя и добавляет их на страницу
const handleSubmitFormAddPlace = () => {

}

// Используем класс PopupWithForm для открытия попапа добавления нового места
const popupWithFormAddPlace = new PopupWithForm(popupAddPlace, handleSubmitFormAddPlace);

// Вешаем слушатели на открытый попап формы
popupWithFormAddPlace.setEventListeners();

// Вешаем слушатель на кнопку открытия попапа добавления нового места
buttonAddPlace.addEventListener('click', () => {
  popupWithFormAddPlace.openPopup();
})



