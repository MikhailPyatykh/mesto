let placeTemplate = document.querySelector('#place-template').content;
let nameProfile = document.querySelector('.profile__info-fio');
let jobProfile = document.querySelector('.profile__info-occupation');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddPlace = document.querySelector('.profile__add-button');
const closeAddPlace = document.querySelector('.popup__close-btn');
const popup = document.querySelector('.popup');
const placesList = document.querySelector('.places__list');
const view = document.querySelector('.view');
const viewOpenedClass = 'view_opened';
const viewClosedClass = 'view_closed';
const popupOpenedClass = 'popup_opened';
const popupClosedClass = 'popup_closed';


buttonEditProfile.addEventListener('click', function() {
    popup.classList.add(popupOpenedClass);
    let editProfile = placeTemplate.querySelector('.popup__container').cloneNode(true);
    editProfile.querySelector('.popup__heading').textContent = 'Редактировать профиль';
    editProfile.querySelector('.popup__submit-btn').textContent = 'Сохранить';
    editProfile.querySelector('.popup__input_type_fio').value = nameProfile.textContent;
    editProfile.querySelector('.popup__input_type_occupation').value = jobProfile.textContent;
    editProfile.querySelector('.popup__inputs').addEventListener('submit', formSubmitHandler);
    popup.prepend(editProfile);

    buttonCloseEditProfile = document.querySelector('.popup__close-btn');
    buttonCloseEditProfile.addEventListener('click', function() {
        popup.classList.add(popupClosedClass);
        setTimeout(function() {
            popup.classList.remove(popupClosedClass);
            popup.classList.remove(popupOpenedClass);
            document.querySelector('.popup__container').remove();
        }, 700);
    });



    function formSubmitHandler(evt) {
        evt.preventDefault();
        nameProfile.textContent = editProfile.querySelector('.popup__input_type_fio').value;
        jobProfile.textContent = editProfile.querySelector('.popup__input_type_occupation').value;

        popup.classList.add(popupClosedClass);
        setTimeout(function() {
            popup.classList.remove(popupClosedClass);
            popup.classList.remove(popupOpenedClass);
            document.querySelector('.popup__container').remove();
        }, 700);
    }
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

const buttonsViewOpen = document.querySelectorAll('.place__image');
buttonsViewOpen.forEach(button => {
    button.addEventListener('click', function(event) {
        const placeView = placeTemplate.querySelector('.view__container').cloneNode(true);
        placeView.querySelector('.view__picture').src = event.currentTarget.src;

        const parent = event.target.closest('li');
        placeView.querySelector('.view__caption').textContent = parent.querySelector('.place__title').textContent;

        view.append(placeView);
        view.classList.add(viewOpenedClass);

        const buttonViewClose = document.querySelector('.view__close-btn');
        buttonViewClose.addEventListener('click', function() {
            view.classList.remove(viewOpenedClass);
            view.classList.add(viewClosedClass);
            setTimeout(function() {
                view.classList.remove(viewClosedClass);
                buttonViewClose.closest('.view__container').remove();
            }, 700);
        });
    });
});

buttonAddPlace.addEventListener('click', function() {
    popup.classList.add(popupOpenedClass);
    let editPlace = placeTemplate.querySelector('.popup__container').cloneNode(true);
    let inputTypePlace = editPlace.querySelector('.popup__input_type_place');
    let inputTypeLink = editPlace.querySelector('.popup__input_type_link');
    let popupHeading = editPlace.querySelector('.popup__heading');
    let submitBtn = editPlace.querySelector('.popup__submit-btn')
    popupHeading.textContent = 'Новое место';
    submitBtn.textContent = 'Создать';
    inputTypePlace.value = 'Название';
    inputTypeLink.value = 'Ссылка на картинку';
    popup.prepend(editPlace);

    buttonCloseEditProfile = document.querySelector('.popup__close-btn');
    buttonCloseEditProfile.addEventListener('click', function() {
        popup.classList.add(popupClosedClass);
        setTimeout(function() {
            popup.classList.remove(popupClosedClass);
            popup.classList.remove(popupOpenedClass);
            document.querySelector('.popup__container').remove();
        }, 700);
    });

    editPlace.querySelector('.popup__inputs').addEventListener('submit', formSubmitHandler);

    function formSubmitHandler(evt) {
        evt.preventDefault();
        popup.classList.remove(popupOpenedClass);
        popup.classList.add(popupClosedClass);
        setTimeout(function() {
            popup.classList.remove(popupClosedClass);
            document.querySelector('.popup__container').remove();
        }, 700);

        let addPlace = placeTemplate.querySelector('.place').cloneNode(true);
        addPlace.querySelector('.place__image').src = inputTypeLink.value;
        addPlace.querySelector('.place__title').textContent = inputTypePlace.value;
        placesList.prepend(addPlace);

        const buttonViewOpen = document.querySelector('.place__image');
        buttonViewOpen.addEventListener('click', function(event) {
            const placeView = placeTemplate.querySelector('.view__container').cloneNode(true);
            placeView.querySelector('.view__picture').src = event.currentTarget.src;
            const parent = event.target.closest('li');
            placeView.querySelector('.view__caption').textContent = parent.querySelector('.place__title').textContent;

            view.append(placeView);
            view.classList.add(viewOpenedClass);
            const buttonViewClose = document.querySelector('.view__close-btn');
            buttonViewClose.addEventListener('click', function() {
                view.classList.add(viewClosedClass);
                setTimeout(function() {
                    view.classList.remove(viewOpenedClass);
                    view.classList.remove(viewClosedClass);
                    buttonViewClose.closest('.view__container').remove();
                }, 700);
            });
        });


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
