import Popup from '../components/Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
      super(popupSelector);
      this._handleSubmit = handleSubmit;
      this._form = this._popup.querySelector(".popup__inputs");
      this._inputs = this._popup.querySelectorAll(".popup__input");
      this._submitButton = this._popup.querySelector(".popup__submit-btn");
      this._defaultText = this._submitButton.textContent;
    }

    renderLoading(isLoading) {
      if(isLoading) {
        this._submitButton.textContent = 'Сохранение...';
      }
      else {
        this._submitButton.textContent = this._defaultText;
      }
    }

    _getInputValues() {
      this._inputsValues = {};
      this._inputs.forEach(input => {
          this._inputsValues[input.name] = input.value;
      })
      return this._inputsValues;
    }

    closePopup() {
      super.closePopup();
      this._form.reset();
    }

    setEventListeners() {
      super.setEventListeners();

      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleSubmit(this, this._getInputValues());
      });
    }
}
