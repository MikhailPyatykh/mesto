const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddPlace = document.querySelector('.profile__add-button');
const placeNameInput = document.querySelector('.popup__input_type_place');
const placeLinkInput = document.querySelector('.popup__input_type_link');
const buttonOpenView = document.querySelectorAll('.place__image');
const nameProfile = document.querySelector('.profile__info-fio');
const jobProfile = document.querySelector('.profile__info-occupation');
const placesList = document.querySelector('.places__list');
const popupOpenedClass = 'popup_opened';
const popupClosedClass = 'popup_closed';
const placeTemplate = document.querySelector('#place-template').content.querySelector('.place');
let popup = "";
let popupButtonClose = "";
let popupButtonSubmit = "";

const openPopup = () => {
    popup.classList.add(popupOpenedClass);
}

const closePopup = () => {
    popup.classList.add(popupClosedClass);
    setTimeout(() => {
        popup.classList.remove(popupClosedClass);
        popup.classList.remove(popupOpenedClass);
    }, 500);
}

const popupButtons = () => {
    popupButtonClose = popup.querySelector('.popup__close-btn');
    popupButtonSubmit = popup.querySelector('.popup__inputs');
}

const createCard = (item) => {
  const place = placeTemplate.cloneNode(true);
  place.querySelector('.place__title').textContent = item.name;
  place.querySelector('.place__image').src = item.link;
  placesList.prepend(place);

  const buttonLike = place.querySelector('.place__icon-heart');
  buttonLike.addEventListener('click', evt => {
      evt.target.classList.toggle('place__icon-heart_active');
  });

  const buttonDelete = place.querySelector('.place__icon-basket');
  buttonDelete.addEventListener('click', () => {
      const listItem = buttonDelete.closest('.place');
      listItem.remove();
  });
}

const initialCards = [{
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

initialCards.forEach(item => {
  createCard(item);
});

buttonEditProfile.addEventListener('click', () => {
  popup = document.querySelector(".popup_edit_profile");
  openPopup();
  popupButtons();
  popup.querySelector('.popup__input_type_fio').value = nameProfile.textContent;
  popup.querySelector('.popup__input_type_occupation').value = jobProfile.textContent;

  popupButtonClose.addEventListener('click', closePopup);
  popupButtonSubmit.addEventListener('submit', formSubmitHandler);

  function formSubmitHandler (evt) {
      evt.preventDefault();
      nameProfile.textContent = popup.querySelector('.popup__input_type_fio').value;
      jobProfile.textContent = popup.querySelector('.popup__input_type_occupation').value;
      closePopup();
  };
});

const buttonsViewOpen = document.querySelectorAll('.place__image');
buttonsViewOpen.forEach(button => {
    button.addEventListener('click', evt => {
        popup = document.querySelector('.popup_view');
        openPopup();
        popupButtons();
        popup.querySelector('.popup__picture').src = evt.currentTarget.src;
        const parent = evt.target.closest('li');
        popup.querySelector('.popup__caption').textContent = parent.querySelector('.place__title').textContent;
        popupButtonClose.addEventListener('click', closePopup);
    });
});

buttonAddPlace.addEventListener('click', () => {
    popup = document.querySelector('.popup_add_place');

    openPopup();
    popupButtons();

    popupButtonClose.addEventListener('click', closePopup);
    popupButtonSubmit.addEventListener('submit', formSubmitHandler);

    function formSubmitHandler (evt) {
      evt.preventDefault();
      const cardInfo = {name: placeNameInput.value, link: placeLinkInput.value};
      createCard(cardInfo);
      closePopup();
    };
});
