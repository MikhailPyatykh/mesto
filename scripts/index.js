const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonCloseEditProfile = document.querySelector('.popup__close-btn');
const popup = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';

buttonEditProfile.addEventListener('click', function() {
    popup.classList.add(popupOpenedClass);
});

buttonCloseEditProfile.addEventListener('click', function() {
  popup.classList.remove(popupOpenedClass);
});


