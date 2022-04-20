export default class Card {
  constructor(item, cardTemplateSelector, handleCardClick, profileData) {
      this._item = item
      this._template = document.querySelector(cardTemplateSelector).content.querySelector('.place');
      this._place = this._template.cloneNode(true);
      this._cardImage = this._place.querySelector('.place__image');
      this._cardTitle = this._place.querySelector('.place__title');
      this._buttonLike = this._place.querySelector('.place__icon-heart');
      this._buttonDelete = this._place.querySelector('.place__icon-basket');
      this._profileData = profileData;
      this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
      this._buttonLike.addEventListener('click', evt => {
          evt.target.classList.toggle('place__icon-heart_active');
      });

      if (this._item.owner._id === this._profileData._id) {
        this._buttonDelete.addEventListener('click', () => {
          this._place.remove();
      });
      }


      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._item.name, this._item.link);
      });
  }

  _checkID() {
    if (this._item.owner._id === this._profileData._id) {
      this._buttonDelete.classList.add('place__icon-basket_active');
    }
  }

  createCard() {
      this._cardTitle.textContent = this._item.name;
      this._cardImage.src = this._item.link;
      this._cardImage.alt = 'Вид на ' + this._item.name;

      this._setEventListeners();
      this._checkID();

      return this._place;
  }
}
