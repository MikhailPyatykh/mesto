export default class Popup {
  constructor(popupSelector) {
      this._popupSelector = popupSelector;
      this._popupCloseButton = popupSelector.querySelector(".popup__close-btn");
  }

  openPopup() {
      this._popupSelector.classList.add('popup_opened');
      // document.addEventListener('keydown', _closePopupOnEvt);
  }

  closePopup() {
      this._popupSelector.classList.remove('popup_opened');
      // document.removeEventListener('keydown', _closePopupOnEvt);
  }

  setEventListeners() {
      this._popupCloseButton.addEventListener('click', () => {
        this.closePopup();
    });
  }
}
