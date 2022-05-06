import './index.css';

import Api from '../components/Api.js';

import {
    urls,
    cardTemplateSelector,
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

// Добавление alt аватарке
const photoDescription = () => {
    avatarProfile.alt = 'Фото ' + nameProfile.textContent + ' ' + 'Род занятий ' + occupationProfile.textContent;
}

photoDescription();

// Используем класс PopupWithImage для открытия картинки карточки места
const popupWithImage = new PopupWithImage(elementsSelectors.popupView);

// Callback функция с данными для картинки карточки места
const handleCardClick = (name, link) => {
    popupWithImage.openPopup(name, link);
}

// Вешаем слушатели на картинку карточки места
popupWithImage.setEventListeners();

//Callback функция инициализации класса Card и создания карточки
const initCard = (data, selector, callbackCardClick, dataID, callbackBusketClick) => {
    const card = new Card(data, selector, callbackCardClick, dataID, callbackBusketClick);
    const cardElement = card.createCard();
    return cardElement;
}

// Используем класс FormValidator для валидации форм
const editFormValidator = new FormValidator(formsValidationConfig, editProfileInputs);
const addCardFormValidator = new FormValidator(formsValidationConfig, newPlaceInputs);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// Инициализируем класс Api
const api = new Api({
    authorization: 'da546cc6-febd-4e48-90b5-e55f89894793',
    'Accept': 'application/json',
    'Content-type': 'application/json; charset=utf-8'
});

// Используем класс UserInfo для отображения и изменения информации в профиле пользователя
const userInfo = new UserInfo(elementsSelectors);

api.getData(urls.profileUrl).then(data => {
    // Заполняем информацию профиля с сервера и возвращаем объект с данными пользователя
    nameProfile.textContent = data.name;
    occupationProfile.textContent = data.about;
    avatarProfile.src = data.avatar;
    const profileData = data;
    return profileData;
}).then((profileData) => api.getData(urls.cardsUrl).then((cards) => {
    //Формируем карточки из массива
    const cardList = new Section({
        data: cards,
        renderer: (item) => {
            cardList.addItem(initCard(item, cardTemplateSelector, handleCardClick, profileData, handleBasketClick), false);
        }
    }, elementsSelectors.placesList);

    // console.log(cards);

    // Callback функция для ввода новой информации на страницу
    const handleSubmitProfile = (data) => {
        userInfo.setUserInfo(data);
    }

    // Используем класс PopupWithForm для попапа профиля
    const popupWithFormProfile = new PopupWithForm(elementsSelectors.popupEditProfile, handleSubmitProfile, api, 'patchData', urls.profileUrl);
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


    // ---------------------------------------------------START
    // Callback функция для кнопки удаления карточки места
    const handleBasketClick = (id) => {
      popupDeleteCard.openPopup(id);
    }

    // Используем класс PopupDeleteCard для удаления карточки места, созданного пользователем
    const popupDeleteCard = new PopupDeleteCard(elementsSelectors.popupDeleteCard, api, 'deleteData', urls.cardsIdUrl)

    //  Вешаем обработчики на попап удаления карточки
    popupDeleteCard.setEventListeners();

    // ---------------------------------------------------END

    // Callback функция добавления нового места пользователем на страницу
    const handleSubmitPlace = (data) => {
        cardList.addItem(initCard(data, cardTemplateSelector, handleCardClick, profileData, handleBasketClick), true);
    }

    // Используем класс PopupWithForm для попапа нового места
    const popupWithFormPlace = new PopupWithForm(elementsSelectors.popupAddPlace, handleSubmitPlace, api, 'postData', urls.cardsUrl);

    // Вешаем обработчик на кнопку открытия формы для добавления нового места
    buttonAddPlace.addEventListener('click', () => {
        popupWithFormPlace.openPopup();
        addCardFormValidator.resetValidation();
    })

    //  Вешаем обработчики на попап профиля
    popupWithFormPlace.setEventListeners();

    //Вставляем карточки
    cardList.renderItems();
}));
