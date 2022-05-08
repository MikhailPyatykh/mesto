import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, api, method, url) {
      super(popupSelector);
      this._api = api;
      this._method = method;
      this._url = url;
    }

    openPopup(id, card) {
      super.openPopup();
      this._id = id;
      this._card = card;
    }

    setEventListeners() {
      super.setEventListeners();
      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._api[this._method](this._url, this._id)
        .then(this._card.remove());
        this.closePopup();
      })
    }
}
