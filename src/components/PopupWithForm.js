import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit, api, method, url, handleLoading) {
      super(popupSelector);
      this._handleSubmit = handleSubmit;
      this._form = this._popup.querySelector(".popup__inputs");
      this._inputs = this._popup.querySelectorAll(".popup__input");
      this._api = api;
      this._method = method;
      this._url = url;
      this._handleLoading = handleLoading;
      this._submitButton = this._popup.querySelector(".popup__submit-btn");
      this._defaultText = this._submitButton.textContent;
    }

    _getInputValues() {
      this._inputsValues = {};
      this._inputs.forEach(input => {
          this._inputsValues[input.name] = input.value;
      })
      return this._inputsValues;
    }

    openPopup() {
      super.openPopup();
      this._handleLoading(false, this._submitButton, this._defaultText);
    }

    closePopup() {
      super.closePopup();
      this._form.reset();
    }

    setEventListeners() {
      super.setEventListeners();

      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleLoading(true, this._submitButton);
        this._api[this._method](this._url, this._getInputValues()).then((data) => {
          this._handleSubmit(data);
          this.closePopup();
        })
      });
    }
}
