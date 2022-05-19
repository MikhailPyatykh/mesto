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
  popupPatchAvatar: '.popup_patch-avatar',
  placeID: '.place__id',
}

export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-38',
  headers: {
    authorization: 'da546cc6-febd-4e48-90b5-e55f89894793',
    'Accept': 'application/json',
    'Content-type': 'application/json; charset=utf-8'
  }
}

export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const buttonAddPlace = document.querySelector('.profile__add-button');
export const buttonPatchAvatar = document.querySelector('.profile__avatar-button');

export const avatarProfile = document.querySelector('.profile__avatar-image');
export const nameProfile = document.querySelector('.profile__info-fio');
export const nameProfileInput = document.querySelector('.popup__input_type_fio');
export const occupationProfile = document.querySelector('.profile__info-occupation');
export const occupationProfileInput = document.querySelector('.popup__input_type_occupation');


export const placeNameInput = document.querySelector('.popup__input_type_place');
export const placeLinkInput = document.querySelector('.popup__input_type_link');

export const cardTemplateSelector = '#place-template';
