import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
      super(popupSelector);
      // this._popupSelector = popupSelector;
      this._handleSubmit = handleSubmit;
      this._form = this._popupSelector.querySelector(".popup__inputs");
    }

    _getInputValues() {

    }

    openPopup() {
      super.openPopup();
    }

    closePopup() {
      super.closePopup();
      this._form.reset();
    }

    setEventListeners() {
      super.setEventListeners();
      this._popupSelector.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleSubmit();
        this.closePopup();
      });
    }
}
