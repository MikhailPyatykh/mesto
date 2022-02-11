const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector(".popup_edit_profile");
const popupEditProfileInputs = popupEditProfile.querySelector(".popup__inputs");
const buttonClosePopupEditProfile = popupEditProfile.querySelector(".popup__close-btn");
const nameProfileInput = popupEditProfile.querySelector('.popup__input_type_fio');
const jobProfileInput = popupEditProfile.querySelector('.popup__input_type_occupation');
const nameProfile = document.querySelector('.profile__info-fio');
const jobProfile = document.querySelector('.profile__info-occupation');
const avatarProfile = document.querySelector('.profile__avatar');

const buttonAddPlace = document.querySelector('.profile__add-button');
const popupAddPlace = document.querySelector(".popup_add_place");
const popupAddPlaceInputs = popupAddPlace.querySelector(".popup__inputs");
const buttonClosePopupAddPlace = popupAddPlace.querySelector(".popup__close-btn");
const placeNameInput = document.querySelector('.popup__input_type_place');
const placeLinkInput = document.querySelector('.popup__input_type_link');

const viewPopup = document.querySelector(".popup_view");
const viewPicture = viewPopup.querySelector('.popup__picture');
const viewCaption = viewPopup.querySelector('.popup__caption');

const popupOpenedClass = 'popup_opened';
const popupClosedClass = 'popup_closed';

const placeTemplate = document.querySelector('#place-template').content.querySelector('.place');
const placesList = document.querySelector('.places__list');


const openPopup = (popup) => {
    popup.classList.add(popupOpenedClass);
}

const closePopupTimer = (popup) => {
    popup.classList.remove(popupClosedClass, popupOpenedClass);
}

const closePopup = (popup) => {
    popup.classList.add(popupClosedClass);
    setTimeout(closePopupTimer, 500, (popup));
}

const buttonCloseView = viewPopup.querySelector('.popup__close-btn');
buttonCloseView.addEventListener('click', () => {
    closePopup(viewPopup);
});

const photoDescription = () => {
  avatarProfile.setAttribute('alt', 'Фото ' + nameProfile.textContent + ' ' + 'Род занятий ' + jobProfile.textContent);
}

photoDescription();

const createCard = (item) => {
    const place = placeTemplate.cloneNode(true);
    place.querySelector('.place__title').textContent = item.name;
    place.querySelector('.place__image').src = item.link;
    place.querySelector('.place__image').setAttribute('alt', 'Вид на ' + item.name);

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
        const parent = evt.target.closest('li');
        viewPicture.src = evt.currentTarget.src;
        viewCaption.textContent = parent.querySelector('.place__title').textContent;
        viewPicture.setAttribute('alt', 'Вид на ' + viewCaption.textContent);
    });

    return place;
}

const renderCard = (item, wrap, isAppend) => {
    const place = createCard(item);

    if (isAppend) {
        wrap.append(place);
    } else {
        wrap.prepend(place);
    }
}

initialCards.forEach(item => {
    renderCard(item, placesList, true);
});

buttonEditProfile.addEventListener('click', () => {
    openPopup(popupEditProfile);
    nameProfileInput.value = nameProfile.textContent;
    jobProfileInput.value = jobProfile.textContent;
    setSubmitButtonState(editProfileInputs, formsValidationConfig);
    handleField(editProfileInputs, editProfileInputs.nameInput, formsValidationConfig);
    handleField(editProfileInputs, editProfileInputs.occupationInput, formsValidationConfig);
});

popupEditProfileInputs.addEventListener('submit', (evt) => {
    evt.preventDefault();
    nameProfile.textContent = nameProfileInput.value;
    jobProfile.textContent = jobProfileInput.value;
    closePopup(popupEditProfile);
});

buttonClosePopupEditProfile.addEventListener('click', () => {
    nameProfileInput.value = nameProfile.textContent;
    jobProfileInput.value = jobProfile.textContent;
    closePopup(popupEditProfile);
});

buttonAddPlace.addEventListener('click', () => {
    openPopup(popupAddPlace);
    setSubmitButtonState(newPlaceInputs, formsValidationConfig);
});

popupAddPlaceInputs.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardInfo = {
        name: placeNameInput.value,
        link: placeLinkInput.value,
    };
    closePopup(popupAddPlace);
    renderCard(cardInfo, placesList, false);
    popupAddPlaceInputs.reset();
});

buttonClosePopupAddPlace.addEventListener('click', () => {
    closePopup(popupAddPlace);
});

// Работает как надо
const closePopupOnClick = (evt) => {
  if (evt.target === popupEditProfile){
    closePopup(popupEditProfile);
  }
}

popupEditProfile.addEventListener('click', closePopupOnClick);


//  НЕ Работает
/*
const closePopupOnClick = (evt, popup) => {
    if (evt.target === popup){
        console.log('popup!');
        //closePopup(popup);
    }
}
popupEditProfile.addEventListener('click', () => {closePopupOnClick(popupEditProfile)});
*/
