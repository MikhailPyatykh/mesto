let placeTemplate = document.querySelector('#place-template').content;
let nameProfile = document.querySelector('.profile__info-fio');
let jobProfile = document.querySelector('.profile__info-occupation');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseEditProfile = document.querySelector('.popup__close-btn');
const buttonAddPlace = document.querySelector('.profile__add-button');
const closeAddPlace = document.querySelector('.popup__close-btn');
const popup = document.querySelector('.popup');
const placesList = document.querySelector('.places__list');
const popupOpenedClass = 'popup_opened';
const popupInputFontGrey = 'popup__input_font_grey';

buttonEditProfile.addEventListener('click', function() {
    popup.classList.add(popupOpenedClass);
    let editProfile = placeTemplate.querySelector('.popup__container').cloneNode(true);
    editProfile.querySelector('.popup__heading').textContent = 'Редактировать профиль';
    editProfile.querySelector('.popup__submit-btn').textContent = 'Сохранить';
    editProfile.querySelector('.popup__input_type_fio').value = nameProfile.textContent;
    editProfile.querySelector('.popup__input_type_occupation').value = jobProfile.textContent;
    editProfile.querySelector('.popup__inputs').addEventListener('submit', formSubmitHandler);
    popup.prepend(editProfile);

    function formSubmitHandler(evt) {
        evt.preventDefault();
        nameProfile.textContent = editProfile.querySelector('.popup__input_type_fio').value;
        jobProfile.textContent = editProfile.querySelector('.popup__input_type_occupation').value;
        popup.classList.remove(popupOpenedClass);
        document.querySelector('.popup__container').remove();
    }
});

buttonCloseEditProfile.addEventListener('click', function() {
    popup.classList.remove(popupOpenedClass);
    document.querySelector('.popup__container').remove();
});

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
    }
];

initialCards.forEach(function(element) {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    placeElement.querySelector('.place__title').textContent = element.name;
    placeElement.querySelector('.place__image').src = element.link;
    placesList.append(placeElement);
    placeElement.querySelector('.place__icon-heart').addEventListener('click', function(evt) {
        evt.target.classList.toggle('place__icon-heart_active');
    });
    const buttonDeletePlace = placeElement.querySelector('.place__icon-basket');
    buttonDeletePlace.addEventListener('click', function() {
        const listItem = buttonDeletePlace.closest('.place');
        listItem.remove();
    });
});

buttonAddPlace.addEventListener('click', function() {
    popup.classList.add(popupOpenedClass);
    let editPlace = placeTemplate.querySelector('.popup__container').cloneNode(true);
    let inputTypePlace = editPlace.querySelector('.popup__input_type_place');
    let inputTypeLink = editPlace.querySelector('.popup__input_type_link');
    let popupHeading = editPlace.querySelector('.popup__heading');
    let submitBtn = editPlace.querySelector('.popup__submit-btn')
    inputTypePlace.classList.add(popupInputFontGrey);
    inputTypeLink.classList.add(popupInputFontGrey);
    popupHeading.textContent = 'Новое место';
    submitBtn.textContent = 'Создать';
    inputTypePlace.value = 'Название';
    inputTypeLink.value = 'Ссылка на картинку';
    editPlace.querySelector('.popup__inputs').addEventListener('submit', formSubmitHandler);

    popup.prepend(editPlace);

    function formSubmitHandler(evt) {
        evt.preventDefault();
        popup.classList.remove(popupOpenedClass);
        document.querySelector('.popup__container').remove();
        let addPlace = placeTemplate.querySelector('.place').cloneNode(true);
        addPlace.querySelector('.place__image').src = inputTypeLink.value;
        addPlace.querySelector('.place__title').textContent = inputTypePlace.value;
        placesList.prepend(addPlace);
        console.log('Чувааак!!!');
        addPlace.querySelector('.place__icon-heart').addEventListener('click', function(evt) {
            evt.target.classList.toggle('place__icon-heart_active');
        });
        const buttonDeletePlace = addPlace.querySelector('.place__icon-basket');
        buttonDeletePlace.addEventListener('click', function() {
            const listItem = buttonDeletePlace.closest('.place');
            listItem.remove();
        });
    }
});
