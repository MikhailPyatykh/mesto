import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, handleSubmit) {
      super(popupSelector);
      this._handleSubmit = handleSubmit;
    }

    openPopup(id, card) {
      super.openPopup();
      this.id = id;
      this.card = card;
    }

    setEventListeners() {
      super.setEventListeners();
      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleSubmit(this);
      })
    }
}
