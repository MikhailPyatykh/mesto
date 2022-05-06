export const formsValidationConfig = {
formSelector: '.popup__inputs',
inputSelector: '.popup__input',
inputErrorClass: 'popup__input_type_error',
submitButtonSelector: '.popup__submit-btn',
inactiveButtonClass: 'popup__submit-btn_disabled',
}

export const elementsSelectors = {
  nameProfile: '.profile__info-fio',
  occupationProfile: '.profile__info-occupation',
  popupView: '.popup_view',
  placesList: '.places__list',
  popupEditProfile: '.popup_edit_profile',
  popupAddPlace: '.popup_add_place',
  popupDeleteCard: '.popup_delete-card',
  placeID: '.place__id',
}

export const urls = {
  profileUrl: 'https://mesto.nomoreparties.co/v1/cohort-38/users/me',
  cardsUrl: 'https://mesto.nomoreparties.co/v1/cohort-38/cards',
  cardsIdUrl: 'https://mesto.nomoreparties.co/v1/cohort-38/cards/',
  cardsIdUrlLikes: 'https://mesto.nomoreparties.co/v1/cohort-38/cards/cardId/likes',
  avatarUrl: 'https://mesto.nomoreparties.co/v1/cohort-38/users/me/avatar'
}

export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const nameProfileInput = document.querySelector('.popup__input_type_fio');
export const occupationProfileInput = document.querySelector('.popup__input_type_occupation');
export const nameProfile = document.querySelector('.profile__info-fio');
export const occupationProfile = document.querySelector('.profile__info-occupation');

export const avatarProfile = document.querySelector('.profile__avatar');

export const buttonAddPlace = document.querySelector('.profile__add-button');

export const placeNameInput = document.querySelector('.popup__input_type_place');
export const placeLinkInput = document.querySelector('.popup__input_type_link');

export const cardTemplateSelector = '#place-template';
