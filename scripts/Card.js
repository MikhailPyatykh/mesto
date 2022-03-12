import { openPopup } from './utils.js';
import { popupView, viewPicture, viewCaption } from './constants.js';

export class Card {
  constructor(item, cardTemplateSelector) {
    this._item = item
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.place');
    this._place = this._template.cloneNode(true);
    this._cardImage = this._place.querySelector('.place__image');
    this._cardTitle = this._place.querySelector('.place__title');
    this._buttonLike = this._place.querySelector('.place__icon-heart');
    this._buttonDelete = this._place.querySelector('.place__icon-basket');
  }

  _setEventListeners() {
    this._buttonLike.addEventListener('click', evt => {
        evt.target.classList.toggle('place__icon-heart_active');
    });

    this._buttonDelete.addEventListener('click', () => {
           this._place.remove();
    });

    this._cardImage.addEventListener('click', (evt) => {
        openPopup(popupView);
        viewPicture.src = evt.currentTarget.src;
        viewCaption.textContent = this._item.name;
        viewPicture.setAttribute('alt', 'Вид на ' + this._item.name);
    });
  }

  createCard() {
    this._cardTitle.textContent = this._item.name;
    this._cardImage.src = this._item.link;
    this._cardImage.setAttribute('alt', 'Вид на ' + this._item.name);

    this._setEventListeners();

    return this._place;
  }
}
