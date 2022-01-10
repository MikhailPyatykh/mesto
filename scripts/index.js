const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseEditProfile = document.querySelector('.popup__close-btn');
const popup = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
let nameProfile = document.querySelector('#name');
let jobProfile = document.querySelector('#job');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.input__info-fio');
let jobInput = formElement.querySelector('.input__info-occupation');
nameInput.value = nameProfile.textContent;
jobInput.value = jobProfile.textContent;

buttonEditProfile.addEventListener('click', function() {
    popup.classList.add(popupOpenedClass);
});

buttonCloseEditProfile.addEventListener('click', function() {
    popup.classList.remove(popupOpenedClass);
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
});

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = nameProfile.textContent;
    jobInput.textContent = jobProfile.textContent;
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    if (nameInput.value === '') {
        nameProfile.textContent = nameInput.textContent;
    }
    if (jobInput.value === '') {
        jobProfile.textContent = jobInput.textContent;
    }
    popup.classList.remove(popupOpenedClass);
}


formElement.addEventListener('submit', formSubmitHandler);
