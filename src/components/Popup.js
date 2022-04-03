export default class Popup {
  constructor(popupSelector) {
      this._popupSelector = popupSelector;
      this._popupCloseButton = popupSelector.querySelector(".popup__close-btn");
      this.escHandler = (evt) => {
          if (evt.key === 'Escape') {
              this.closePopup();
          }
      }
  }

  openPopup() {
      this._popupSelector.classList.add('popup_opened');
      document.addEventListener('keydown', this.escHandler);
  }

  closePopup() {
      this._popupSelector.classList.remove('popup_opened');
      document.removeEventListener('keydown', this.escHandler);
  }

  setEventListeners() {
      this._popupCloseButton.addEventListener('click', () => {
          this.closePopup();
      });
      this._popupSelector.addEventListener('mousedown', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  this.closePopup();
              }
          });
  }
}
