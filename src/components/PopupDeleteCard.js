import Popup from './Popup.js';

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, handleSubmit, api, method, url) {
      super(popupSelector);
      this._handleSubmit = handleSubmit;
      this._api = api;
      this._method = method;
      this._url = url;
    }

    setEventListeners() {
      super.setEventListeners();
      this._popup.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleSubmit();
        this.closePopup();
      });
      };
    }
