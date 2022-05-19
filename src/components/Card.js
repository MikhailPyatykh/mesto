export default class Card {
  constructor(
        item,
        cardTemplateSelector,
        handleCardClick,
        profileData,
        handleBasketClick,
        handleLikeClick,
        likeStatus
        ) {
      this._item = item
      this._template = document.querySelector(cardTemplateSelector).content.querySelector('.place');
      this._place = this._template.cloneNode(true);
      this._cardImage = this._place.querySelector('.place__image');
      this._cardTitle = this._place.querySelector('.place__title');
      this._buttonLike = this._place.querySelector('.place__likes_icon-heart');
      this._likesNumbers = this._place.querySelector('.place__likes_numbers');
      this._placeID = this._place.querySelector('.place__id');
      this._buttonDelete = this._place.querySelector('.place__icon-basket');
      this._profileData = profileData;
      this._handleCardClick = handleCardClick;
      this._handleBasketClick = handleBasketClick;
      this._handleLikeClick = handleLikeClick;
      this._likeStatus = likeStatus;
  }

  setLikeStatus() {
    if (this._likeStatus) {
      this._buttonLike.classList.add('place__likes_icon-heart_active');
    }
    else {
      this._buttonLike.classList.remove('place__likes_icon-heart_active');
    }
  }

  _setEventListeners() {
      this._buttonLike.addEventListener('click', evt => {
          // evt.target.classList.toggle('place__likes_icon-heart_active');
          this._handleLikeClick(this._item, this._likesNumbers, this._buttonLike, evt);
      });

      if (this._item.owner._id === this._profileData._id) {
        this._buttonDelete.classList.add('place__icon-basket_active');
        this._buttonDelete.addEventListener('click', () => {
          this._handleBasketClick(this._item._id, this._place);
        });
      }

      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._item.name, this._item.link);
      });
  }

  createCard() {
      this._cardTitle.textContent = this._item.name;
      this._placeID.dataset.id = this._item._id;
      this._cardImage.src = this._item.link;
      this._cardImage.alt = 'Вид на ' + this._item.name;
      this._likesNumbers.textContent = this._item.likes.length;

      this._setEventListeners();
      this.setLikeStatus();

      return this._place;
  }
}
