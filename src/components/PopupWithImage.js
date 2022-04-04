import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPicture = this._popup.querySelector('.popup__picture');
        this._popupCaption = this._popup.querySelector('.popup__caption');
    }

    openPopup(name, link) {
        this._popupPicture.src = link;
        this._popupCaption.textContent = name;
        this._popupPicture.alt = 'Вид на ' + name;
        super.openPopup();
    }
}
