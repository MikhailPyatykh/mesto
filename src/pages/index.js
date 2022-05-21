import './index.css';

import Api from '../components/Api.js';

import {
    cardTemplateSelector,
    buttonPatchAvatar,
    buttonEditProfile,
    buttonAddPlace,
    formsValidationConfig,
    avatarProfile,
    elementsSelectors,
    nameProfileInput,
    occupationProfileInput,
    apiConfig
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

// Callback функция постановки лайка
const putLike = (card, evt) => {
  api.putLike(card.getId())
      .then((res) => {
          card.updateLikes(res)
      })
      .then(() => card.likeToggle(evt))
      .catch((err) => {
          console.log(err);
      });
}

// Callback функция снятия лайка
const removeLike = (card, evt) => {
  api.removeLike(card.getId())
      .then((res) => {
          card.updateLikes(res)
      })
      .then(() => card.likeToggle(evt))
      .catch((err) => {
          console.log(err);
      });
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
    callbackLikeStatus,
    callbackPutLike,
    callbackRemoveLike
) => {
    const card = new Card(
        data,
        selector,
        callbackCardClick,
        dataID,
        callbackBusketClick,
        callbackLikeStatus,
        callbackPutLike,
        callbackRemoveLike
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
const api = new Api(apiConfig);

// Используем класс UserInfo для отображения и изменения информации в профиле пользователя
const userInfo = new UserInfo(elementsSelectors);

Promise.all([api.getUserData(), api.getCards()])
.then(([profileData, cards]) => {

    // Заполняем информацию профиля с сервера, добавляем нужную информацию профиля элементам
    // и возвращаем объект с данными пользователя
    userInfo.setUserInfo(profileData);

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
                api.checkLikeID(item, profileData),
                putLike,
                removeLike
            ), false);
        }
    }, elementsSelectors.placesList);

    // Callback функция для ввода новой информации на страницу
    const handleSubmitProfile = (popup, inputValues) => {
        popup.renderLoading(true);
        api.patchProfileInfo(inputValues)
        .then((data) => {
        userInfo.setUserInfo(data);
        })
        .then(() => popup.closePopup())
        .finally(() => popup.renderLoading(false))
        .catch((err) => {
          console.error(err);
        })
    }

    // Используем класс PopupWithForm для попапа профиля
    const popupWithFormProfile = new PopupWithForm(
        elementsSelectors.popupEditProfile,
        handleSubmitProfile
     );

    // Вешаем обработчик на кнопку открытия профиля пользователя, через класс UserInfo задаем инпутам текст со страницы
    buttonEditProfile.addEventListener('click', () => {
        const userData = userInfo.getUserInfo();
        nameProfileInput.value = userData.name;
        occupationProfileInput.value = userData.info;
        popupWithFormProfile.openPopup();
        editFormValidator.resetValidation();
    });

    // Вешаем обработчики на попап профиля
    popupWithFormProfile.setEventListeners();


    // Callback функция обработки удаления карточки пользователя
    const handleDeleteCard = (popup) => {
      api.deleteCard(popup.id)
      .then(() => popup.card.remove())
      .then(() => popup.closePopup())
      .catch((err) => {
        console.error(err);
      })
    };

    // Используем класс PopupDeleteCard для удаления карточки места, созданного пользователем
    const popupDeleteCard = new PopupDeleteCard(
        elementsSelectors.popupDeleteCard,
        handleDeleteCard
    )

    // Callback функция для кнопки удаления карточки места
    const handleBasketClick = (id, card) => {
        popupDeleteCard.openPopup(id, card);
    }

    //  Вешаем обработчики на попап удаления карточки
    popupDeleteCard.setEventListeners();

    // Callback функция добавления нового места пользователем на страницу
    const handleSubmitPlace = (popup, inputValues) => {
      popup.renderLoading(true);
      api.postNewCard(inputValues)
      .then(data => {
        cardList.addItem(initCard(
            data,
            cardTemplateSelector,
            handleCardClick,
            profileData,
            handleBasketClick,
            api.checkLikeID(data, profileData),
            putLike,
            removeLike
        ), true);
      })
      .then(() => popup.closePopup())
      .finally(() => popup.renderLoading(false))
      .catch((err) => {
        console.error(err);
      })
    }

    // Используем класс PopupWithForm для попапа нового места
    const popupWithFormPlace = new PopupWithForm(
        elementsSelectors.popupAddPlace,
        handleSubmitPlace,
    );

    // Вешаем обработчик на кнопку открытия формы для добавления нового места
    buttonAddPlace.addEventListener('click', () => {
        popupWithFormPlace.openPopup();
        addCardFormValidator.resetValidation();
    })

    //  Вешаем обработчики на попап профиля
    popupWithFormPlace.setEventListeners();

    // Callback функция для изменения аватара профиля
    const handleSubmitPatchAvatar = (popup, inputValues) => {
        popup.renderLoading(true);
        api.patchAvatar(inputValues)
        .then((data) => {
          avatarProfile.src = data.avatar;
        })
        .then(() => popup.closePopup())
        .finally(() => popup.renderLoading(false))
        .catch((err) => {
          console.error(err)});
    }

    // Используем класс PopupWithForm для попапа изменения аватара
    const popupPatchAvatar = new PopupWithForm(
        elementsSelectors.popupPatchAvatar,
        handleSubmitPatchAvatar
    );

    buttonPatchAvatar.addEventListener('click', () => {
        popupPatchAvatar.openPopup();
        patchAvatarFormValidator.resetValidation();
    })

    //  Вешаем обработчики на попап изменения аватара
    popupPatchAvatar.setEventListeners();

    //Вставляем карточки
    cardList.renderItems();
})
.catch((err) => {
  console.error(err);
})
