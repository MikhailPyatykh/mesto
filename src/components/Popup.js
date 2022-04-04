export default class Popup {
  constructor(popupSelector) {
      this._popupSelector = popupSelector;
      this._popup = document.querySelector(this._popupSelector);
      this._popupCloseButton = this._popup.querySelector(".popup__close-btn");
      this._escHandler = this._escHandler.bind(this);
  }

  _escHandler = (evt) => {
    if (evt.key === 'Escape') {
        this.closePopup();
    }
}

  openPopup() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._escHandler);
  }

  closePopup() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._escHandler);
  }

  setEventListeners() {
      this._popupCloseButton.addEventListener('click', () => {
          this.closePopup();
      });
      this._popup.addEventListener('mousedown', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  this.closePopup();
              }
          });
  }
}
