const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector(".popup_edit_profile");
const popupEditProfileInputs = popupEditProfile.querySelector(".popup__inputs");
const buttonClosePopupEditProfile = popupEditProfile.querySelector(".popup__close-btn");
const nameProfile = document.querySelector('.profile__info-fio');
const jobProfile = document.querySelector('.profile__info-occupation');

const buttonAddPlace = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector(".popup_add_place");
const popupAddPlaceInputs = popupAddPlace.querySelector(".popup__inputs");
const buttonClosePopupAddPlace = popupAddPlace.querySelector(".popup__close-btn");
const placeNameInput = document.querySelector('.popup__input_type_place');
const placeLinkInput = document.querySelector('.popup__input_type_link');

const viewPopup = document.querySelector(".popup_view");

const popupOpenedClass = 'popup_opened';
const popupClosedClass = 'popup_closed';

const placeTemplate = document.querySelector('#place-template').content.querySelector('.place');
const placesList = document.querySelector('.places__list');


const openPopup = (popup) => {
    popup.classList.add(popupOpenedClass);
}

const closePopup = (popup) => {
    popup.classList.add(popupClosedClass);
    setTimeout(() => {
        popup.classList.remove(popupClosedClass);
        popup.classList.remove(popupOpenedClass);
    }, 500);
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

    const buttonOpenView = place.querySelector('.place__image');
    buttonOpenView.addEventListener('click', (evt) => {
        openPopup(viewPopup);
        viewPopup.querySelector('.popup__picture').src = evt.currentTarget.src;
        const parent = evt.target.closest('li');
        viewPopup.querySelector('.popup__caption').textContent = parent.querySelector('.place__title').textContent;
    });

    const buttonCloseView = viewPopup.querySelector('.popup__close-btn');
    buttonCloseView.addEventListener('click', () => {
        closePopup(viewPopup);
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
    openPopup(popupEditProfile);
    popupEditProfile.querySelector('.popup__input_type_fio').value = nameProfile.textContent;
    popupEditProfile.querySelector('.popup__input_type_occupation').value = jobProfile.textContent;
});

popupEditProfileInputs.addEventListener('submit', (evt) => {
    evt.preventDefault();
    nameProfile.textContent = popupEditProfile.querySelector('.popup__input_type_fio').value;
    jobProfile.textContent = popupEditProfile.querySelector('.popup__input_type_occupation').value;
    closePopup(popupEditProfile);
});

buttonClosePopupEditProfile.addEventListener('click', () => {
    popupEditProfile.querySelector('.popup__input_type_fio').value = nameProfile.textContent;
    popupEditProfile.querySelector('.popup__input_type_occupation').value = jobProfile.textContent;
    closePopup(popupEditProfile);
});

buttonAddPlace.addEventListener('click', () => {
    openPopup(popupAddPlace);
    placeNameInput.value = "";
    placeLinkInput.value = "";
});

popupAddPlaceInputs.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardInfo = {
        name: placeNameInput.value,
        link: placeLinkInput.value,
    };
    closePopup(popupAddPlace);
    createCard(cardInfo);
});

buttonClosePopupAddPlace.addEventListener('click', () => {
    closePopup(popupAddPlace);
});
