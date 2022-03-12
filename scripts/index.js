import { initialCards, formsValidationConfig, buttonEditProfile, popupEditProfile,
          popupEditProfileForm, buttonClosePopupEditProfile,nameProfileInput, jobProfileInput,
          avatarProfile, buttonAddPlace, popupAddPlaceForm, buttonClosePopupAddPlace,
          placeNameInput, placeLinkInput, popupView, buttonClosePopupView, placesList, nameProfile,
          jobProfile, popupAddPlace, cardTemplateSelector } from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup, closePopupOnEvt } from './utils.js';

// Используем класс FormValidator
const editFormValidator = new FormValidator(formsValidationConfig, editProfileInputs);
const addCardFormValidator = new FormValidator(formsValidationConfig, newPlaceInputs);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// Добавление alt картинкам
const photoDescription = () => {
    avatarProfile.setAttribute('alt', 'Фото ' + nameProfile.textContent + ' ' + 'Род занятий ' + jobProfile.textContent);
}

photoDescription();

// Слушатели попапов на события
popupEditProfile.addEventListener('click', (evt) => closePopupOnEvt(evt, popupEditProfile, buttonClosePopupEditProfile));
popupAddPlace.addEventListener('click', (evt) => closePopupOnEvt(evt, popupAddPlace, buttonClosePopupAddPlace));
popupView.addEventListener('click', (evt) => closePopupOnEvt(evt, popupView, buttonClosePopupView));

const renderCard = (item) => {
  // Используем класс Card
  const card = new Card (item, cardTemplateSelector);
  const cardElement = card.createCard();
  return cardElement;
}

// Создание карточки из массива
initialCards.forEach(item => {
  placesList.append(renderCard(item));
});

// Создание карточки пользователем
popupAddPlaceForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardInfo = {
        name: placeNameInput.value,
        link: placeLinkInput.value,
    };
    closePopup(popupAddPlace);
    placesList.prepend(renderCard(cardInfo));
    popupAddPlaceForm.reset();
});

// Открытие пользователем формы имени и деятельности в профиле
buttonEditProfile.addEventListener('click', () => {
    openPopup(popupEditProfile);
    nameProfileInput.value = nameProfile.textContent;
    jobProfileInput.value = jobProfile.textContent;
    // Проверяем поля ввода и выставляем нужное значение кнопке Submit
    editFormValidator.resetValidation();
});

// Изменение пользователем имени и деятельности в профиле
popupEditProfileForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameProfileInput.value;
    jobProfile.textContent = jobProfileInput.value;
    closePopup(popupEditProfile);
});

// Добавление пользователем карточки нового места
buttonAddPlace.addEventListener('click', () => {
    openPopup(popupAddPlace);
    // Выставляем нужное значение кнопке Submit
    addCardFormValidator.resetValidation();
});
