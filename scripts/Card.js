import { openPopup } from './utils.js';
import { popupView, viewPicture, viewCaption } from './constants.js';

export class Card {
  constructor(item, cardTemplateSelector) {
    this._item = item
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.place');
  }

  _setEventListeners() {
    this._buttonLike = this._place.querySelector('.place__icon-heart');
    this._buttonLike.addEventListener('click', evt => {
        evt.target.classList.toggle('place__icon-heart_active');
    });

    this._buttonDelete = this._place.querySelector('.place__icon-basket');
    this._buttonDelete.addEventListener('click', () => {
        const listItem = this._buttonDelete.closest('.place');
        listItem.remove();
    });

    this._buttonOpenView = this._place.querySelector('.place__image');
    this._buttonOpenView.addEventListener('click', (evt) => {
        openPopup(popupView);
        viewPicture.src = evt.currentTarget.src;
        viewCaption.textContent = this._item.name;
        viewPicture.setAttribute('alt', 'Вид на ' + viewCaption.textContent);
    });
  }

  createCard() {
    this._place = this._template.cloneNode(true);
    this._place.querySelector('.place__title').textContent = this._item.name;
    this._place.querySelector('.place__image').src = this._item.link;
    this._place.querySelector('.place__image').setAttribute('alt', 'Вид на ' + this._item.name);

    this._setEventListeners();

    return this._place;
  }

}
