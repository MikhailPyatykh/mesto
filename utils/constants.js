export const initialCards = [{
  name: 'Карачаево-Черкесия',
  link: './images/cards/karachaevsk.png'
},
{
  name: 'Гора Эльбрус',
  link: './images/cards/elbrus.png'
},
{
  name: 'Домбай',
  link: './images/cards/dombay.png'
},
{
  name: 'Акташ',
  link: './images/cards/aktash.png'
},
{
  name: 'Озеро Эльтон',
  link: './images/cards/elton.png'
},
{
  name: 'Приморье',
  link: './images/cards/primorie.png'
},
];

export const formsValidationConfig = {
formSelector: '.popup__inputs',
inputSelector: '.popup__input',
inputErrorClass: 'popup__input_type_error',
submitButtonSelector: '.popup__submit-btn',
inactiveButtonClass: 'popup__submit-btn_disabled',
}

export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const popupEditProfile = document.querySelector(".popup_edit_profile");
export const popupEditProfileForm = popupEditProfile.querySelector(".popup__inputs");
export const buttonClosePopupEditProfile = popupEditProfile.querySelector(".popup__close-btn");

export const nameProfileInput = popupEditProfile.querySelector('.popup__input_type_fio');
export const occupationProfileInput = popupEditProfile.querySelector('.popup__input_type_occupation');
export const nameProfile = document.querySelector('.profile__info-fio');
export const occupationProfile = document.querySelector('.profile__info-occupation');

export const elementsSelectors = {
  nameProfile: '.profile__info-fio',
  occupationProfile: '.profile__info-occupation',
}

export const avatarProfile = document.querySelector('.profile__avatar');

export const buttonAddPlace = document.querySelector('.profile__add-button');
export const popupAddPlace = document.querySelector(".popup_add_place");
export const popupAddPlaceForm = popupAddPlace.querySelector(".popup__inputs");
export const buttonClosePopupAddPlace = popupAddPlace.querySelector(".popup__close-btn");

export const placeNameInput = document.querySelector('.popup__input_type_place');
export const placeLinkInput = document.querySelector('.popup__input_type_link');

export const popupView = document.querySelector(".popup_view");
export const buttonClosePopupView = popupView.querySelector(".popup__close-btn");

export const placesList = document.querySelector('.places__list');

export const popupPicture = popupView.querySelector('.popup__picture');
export const popupCaption = popupView.querySelector('.popup__caption');

export const popupOpenedClass = 'popup_opened';

export const cardTemplateSelector = '#place-template';
