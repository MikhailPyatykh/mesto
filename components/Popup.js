export default class Popup {
  constructor(popupSelector) {
      this._popupSelector = popupSelector;
      this._evtButton = popupSelector.querySelector(".popup__close-btn");
  }

  _closePopupOnEvt = (evt) => {
      if (evt.target === this._popupSelector || evt.target === this._evtButton || evt.key === 'Escape') {
          closePopup(this._popupSelector);
      }
  }

  // _escHandler(evt) {
  //     if (evt.key === 'Escape') {
  //         closePopup(this._popupSelector);
  //     }
  // }

  openPopup() {
      this._popupSelector.classList.add('popup_opened');
      document.addEventListener('keydown', _closePopupOnEvt);
  }

  closePopup() {
      this._popupSelector.classList.remove('popup_opened');
      document.removeEventListener('keydown', _closePopupOnEvt);
  }

  setEventListeners() {
      this._popupSelector.addEventListener('click', () => {
          this.openPopup();
      });

      this._evtButton.addEventListener('click', () => {
          this.closePopup();
      });
  }

}
