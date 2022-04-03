import karachaevskImg from '../images/cards/karachaevsk.png';
import elbrusImg from '../images/cards/elbrus.png';
import dombayImg from '../images/cards/dombay.png';
import aktashImg from '../images/cards/aktash.png';
import eltonImg from '../images/cards/elton.png';
import primorieImg from '../images/cards/primorie.png';

export const initialCards = [{
  name: 'Карачаево-Черкесия',
  link: karachaevskImg
},
{
  name: 'Гора Эльбрус',
  link: elbrusImg
},
{
  name: 'Домбай',
  link: dombayImg
},
{
  name: 'Акташ',
  link: aktashImg
},
{
  name: 'Озеро Эльтон',
  link: eltonImg
},
{
  name: 'Приморье',
  link: primorieImg
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

export const viewPicture = popupView.querySelector('.popup__picture');
export const viewCaption = popupView.querySelector('.popup__caption');

export const popupPicture = popupView.querySelector('.popup__picture');
export const popupCaption = popupView.querySelector('.popup__caption');

export const placesList = document.querySelector('.places__list');
export const popupOpenedClass = 'popup_opened';
export const cardTemplateSelector = '#place-template';
