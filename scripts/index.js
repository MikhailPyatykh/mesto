const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseEditProfile = document.querySelector('.popup__close-btn');
const popup = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
let nameProfile = document.querySelector('.profile__info-fio');
let jobProfile = document.querySelector('.profile__info-occupation');
let formElement = document.querySelector('.popup__inputs');
let nameInput = formElement.querySelector('.popup__inputs__fields_fio');
let jobInput = formElement.querySelector('.popup__inputs__fields_occupation');

buttonEditProfile.addEventListener('click', function() {
    popup.classList.add(popupOpenedClass);
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
});

buttonCloseEditProfile.addEventListener('click', function() {
    popup.classList.remove(popupOpenedClass);
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popup.classList.remove(popupOpenedClass);
}

formElement.addEventListener('submit', formSubmitHandler);
