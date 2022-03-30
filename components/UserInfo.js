export default class UserInfo {
    constructor(profileElements) {
      this._profileElements = profileElements;
      this._name = this._profileElements.nameProfile;
      this._infoAbout = this._profileElements.occupationProfile;
      this._nameInput = document.querySelector('.popup__input_type_fio');
      this._infoAboutInput = document.querySelector('.popup__input_type_occupation');
    }

    getUserInfo() {
      this._nameInput.value = this._name.textContent;
      this._infoAboutInput.value = this._infoAbout.textContent;
    }

    setUserInfo() {
      this._name.textContent = this._nameInput.value;
      this._infoAbout.textContent = this._infoAboutInput.value;
    }


}
