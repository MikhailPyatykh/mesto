import './index.css';

import Api from '../components/Api.js';

import {
    urlsSelectors,
    cardTemplateSelector,
    buttonPatchAvatar,
    buttonEditProfile,
    buttonAddPlace,
    formsValidationConfig,
    avatarProfile,
    elementsSelectors,
    nameProfile,
    occupationProfile,
    nameProfileInput,
    occupationProfileInput
} from '../utils/constants.js';

import {
    FormValidator
} from '../components/FormValidator.js';

import Card from '../components/Card.js';

import Section from '../components/Section.js';

import PopupWithImage from '../components/PopupWithImage.js';

import PopupWithForm from '../components/PopupWithForm.js';

import PopupDeleteCard from '../components/PopupDeleteCard.js';

import UserInfo from '../components/UserInfo.js';



// Используем класс PopupWithImage для открытия картинки карточки места
const popupWithImage = new PopupWithImage(elementsSelectors.popupView);

// Callback функция с данными для картинки карточки места
const handleCardClick = (name, link) => {
    popupWithImage.openPopup(name, link);
}

// Callback функция обработки нажатия лайка
const handleLikeClick = (dataID, likesButtonSelector, likeChecker) => {
    if (likeChecker.classList.contains('place__likes_icon-heart_active')) {
        api.putLike(urlsSelectors.cardsIdUrlLikes, dataID).then(data => {
            likesButtonSelector.textContent = data.likes.length;
        })
    } else {
        api.deleteLike(urlsSelectors.cardsIdUrlLikes, dataID).then(data => {
            likesButtonSelector.textContent = data.likes.length;
        })
    }
}

// Вешаем слушатели на картинку карточки места
popupWithImage.setEventListeners();

//Callback функция инициализации класса Card и создания карточки
const initCard = (
    data,
    selector,
    callbackCardClick,
    dataID,
    callbackBusketClick,
    callbackLikeClick,
    callbackLikeStatus
) => {
    const card = new Card(
        data,
        selector,
        callbackCardClick,
        dataID,
        callbackBusketClick,
        callbackLikeClick,
        callbackLikeStatus
    );
    const cardElement = card.createCard();
    return cardElement;
}

// Используем класс FormValidator для валидации форм
const editFormValidator = new FormValidator(formsValidationConfig, editProfileFormInputs);
const addCardFormValidator = new FormValidator(formsValidationConfig, newPlaceFormInputs);
const patchAvatarFormValidator = new FormValidator(formsValidationConfig, avatarFormInput);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
patchAvatarFormValidator.enableValidation();

// Инициализируем класс Api
const api = new Api({
    authorization: 'da546cc6-febd-4e48-90b5-e55f89894793',
    'Accept': 'application/json',
    'Content-type': 'application/json; charset=utf-8'
});

// Используем класс UserInfo для отображения и изменения информации в профиле пользователя
const userInfo = new UserInfo(elementsSelectors);

// Функция callback для обработки загрузки запроса
const renderLoading = (isLoading, button, text) => {
    if(isLoading) {
      button.textContent = 'Сохранение...';
    }
    else {
      button.textContent = text;
    }

  }

api.getCards(urlsSelectors.profileUrl).then(data => {
    // Заполняем информацию профиля с сервера и возвращаем объект с данными пользователя
    nameProfile.textContent = data.name;
    occupationProfile.textContent = data.about;
    avatarProfile.src = data.avatar;
    const profileData = data;
    // Добавление alt аватарке
    const photoDescription = () => {
        avatarProfile.alt = 'Фото ' + nameProfile.textContent + ' ' + 'Род занятий ' + occupationProfile.textContent;
    }
    photoDescription();
    return profileData;
}).then((profileData) => api.getCards(urlsSelectors.cardsUrl).then((cards) => {
    //Формируем карточки из массива
    const cardList = new Section({
        data: cards,
        renderer: (item) => {
            cardList.addItem(initCard(
                item,
                cardTemplateSelector,
                handleCardClick,
                profileData,
                handleBasketClick,
                handleLikeClick,
                api.checkLikeID(item, profileData)
            ), false);
        }
    }, elementsSelectors.placesList);

    // Callback функция для ввода новой информации на страницу
    const handleSubmitProfile = (data) => {
        userInfo.setUserInfo(data);
    }

    // Используем класс PopupWithForm для попапа профиля
    const popupWithFormProfile = new PopupWithForm(
        elementsSelectors.popupEditProfile,
        handleSubmitProfile,
        api,
        'patchProfileInfo',
        urlsSelectors.profileUrl,
        renderLoading);

    // const popupWithFormProfile = new PopupWithForm(elementsSelectors.popupEditProfile, data => api.patchData(urls.profileUrl, data).then(handleSubmitProfile));

    // Вешаем обработчик на кнопку открытия профиля пользователя, через класс UserInfo задаем инпутам текст со страницы
    buttonEditProfile.addEventListener('click', () => {
        const userData = userInfo.getUserInfo();
        nameProfileInput.value = userData.name;
        occupationProfileInput.value = userData.info;
        popupWithFormProfile.openPopup();
        editFormValidator.resetValidation();
    })

    // Вешаем обработчики на попап профиля
    popupWithFormProfile.setEventListeners();

    // Используем класс PopupDeleteCard для удаления карточки места, созданного пользователем
    const popupDeleteCard = new PopupDeleteCard(elementsSelectors.popupDeleteCard,
        api,
        'deleteCard',
        urlsSelectors.cardsIdUrl)

    // Callback функция для кнопки удаления карточки места
    const handleBasketClick = (id, card) => {
        popupDeleteCard.openPopup(id, card);
    }

    //  Вешаем обработчики на попап удаления карточки
    popupDeleteCard.setEventListeners();

    // Callback функция добавления нового места пользователем на страницу
    const handleSubmitPlace = (data) => {
        cardList.addItem(initCard(
            data,
            cardTemplateSelector,
            handleCardClick,
            profileData,
            handleBasketClick,
            handleLikeClick,
            api.checkLikeID(data, profileData)
        ), true);
    }

    // Используем класс PopupWithForm для попапа нового места
    const popupWithFormPlace = new PopupWithForm(
        elementsSelectors.popupAddPlace,
        handleSubmitPlace,
        api,
        'postNewCard',
        urlsSelectors.cardsUrl,
        renderLoading);

    // Вешаем обработчик на кнопку открытия формы для добавления нового места
    buttonAddPlace.addEventListener('click', () => {
        popupWithFormPlace.openPopup();
        addCardFormValidator.resetValidation();
    })

    //  Вешаем обработчики на попап профиля
    popupWithFormPlace.setEventListeners();

    // Callback функция для изменения аватара профиля
    const handleSubmitPatchAvatar = (data) => {
        avatarProfile.src = data.avatar;
    }

    // Используем класс PopupWithForm для попапа изменения аватара
    const popupPatchAvatar = new PopupWithForm(
        elementsSelectors.popupPatchAvatar,
        handleSubmitPatchAvatar,
        api,
        'patchAvatar',
        urlsSelectors.avatarUrl,
        renderLoading);

    buttonPatchAvatar.addEventListener('click', () => {
        popupPatchAvatar.openPopup();
        patchAvatarFormValidator.resetValidation();
    })

    //  Вешаем обработчики на попап изменения аватара
    popupPatchAvatar.setEventListeners();

    //Вставляем карточки
    cardList.renderItems();
}));
