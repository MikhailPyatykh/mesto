let placeTemplate = document.querySelector('#place-template').content;
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseEditProfile = document.querySelector('.popup__close-btn');
const buttonAddPlace = document.querySelector('.profile__add-button');
const closeAddPlace = document.querySelector('.popup__close-btn');
const buttonDeletePlace = placeTemplate.querySelector('.place__icon-basket');
const popup = document.querySelector('.popup');
const placesList = document.querySelector('.places__list');
const popupOpenedClass = 'popup_opened';
let nameProfile = document.querySelector('.profile__info-fio');
let jobProfile = document.querySelector('.profile__info-occupation');

buttonEditProfile.addEventListener('click', function() {
    popup.classList.add(popupOpenedClass);
    let editProfile = placeTemplate.querySelector('.popup__container').cloneNode(true);
    editProfile.querySelector('.popup__heading').textContent = 'Редактировать профиль';
    editProfile.querySelector('.popup__submit-btn').textContent = 'Сохранить';
    editProfile.querySelector('.popup__input_type_fio').value = nameProfile.textContent;
    editProfile.querySelector('.popup__input_type_occupation').value = jobProfile.textContent;
    let editProfileForm = editProfile.querySelector('.popup__inputs');
    editProfileForm.querySelector('.popup__submit-btn').addEventListener('submit', formSubmitHandler);
    popup.prepend(editProfile);
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  console.log('Чувааак!!!');
  /*popup.classList.remove(popupOpenedClass);*/
}

buttonCloseEditProfile.addEventListener('click', function() {
    popup.classList.remove(popupOpenedClass);
    /*document.querySelector('.popup__container').remove();*/
    console.log('Чувааак!!!');
});

const initialCards = [
  {
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
  }
];

initialCards.forEach(function (element) {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
  placeElement.querySelector('.place__title').textContent = element.name;
  placeElement.querySelector('.place__image').src = element.link;
  placesList.append(placeElement);
      placeElement.querySelector('.place__icon-heart').addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__icon-heart_active');
      });
});

buttonDeletePlace.addEventListener('click', function() {
  const listItem = buttonDeletePlace.closest('.place');
  listItem.remove();
  console.log('Чувааак!!!');
});
