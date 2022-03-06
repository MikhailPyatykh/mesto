import { openPopup } from './utils.js';
import { popupView, viewPicture, viewCaption } from './constants.js';

export class Card {
  constructor(item, cardTemplateSelector) {
    this._item = item
    this._template = document.querySelector(cardTemplateSelector).content.querySelector('.place');
  }

  createCard() {
    const place = this._template.cloneNode(true);
    place.querySelector('.place__title').textContent = this._item.name;
    place.querySelector('.place__image').src = this._item.link;
    place.querySelector('.place__image').setAttribute('alt', 'Вид на ' + this._item.name);

    const buttonLike = place.querySelector('.place__icon-heart');
    buttonLike.addEventListener('click', evt => {
        evt.target.classList.toggle('place__icon-heart_active');
    });

    const buttonDelete = place.querySelector('.place__icon-basket');
    buttonDelete.addEventListener('click', () => {
        const listItem = buttonDelete.closest('.place');
        listItem.remove();
    });

    const buttonOpenView = place.querySelector('.place__image');
    buttonOpenView.addEventListener('click', (evt) => {
        openPopup(popupView);
        viewPicture.src = evt.currentTarget.src;
        viewCaption.textContent = this._item.name;
        viewPicture.setAttribute('alt', 'Вид на ' + viewCaption.textContent);
    });

    return place;
  }

}
