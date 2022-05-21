export default class UserInfo {
    constructor(elementsSelectors) {
      this._elementsSelectors = elementsSelectors;
      this._nameElement = document.querySelector(this._elementsSelectors.nameProfile);
      this._infoElement = document.querySelector(this._elementsSelectors.occupationProfile);
      this._avatar = document.querySelector(this._elementsSelectors.avatarProfile);

    }

    getUserInfo() {
      return {
        name: this._nameElement.textContent,
        info: this._infoElement.textContent,
      }
    }

    setUserInfo(data) {
      this._nameElement.textContent = data.name;
      this._infoElement.textContent = data.about;
      this._avatar.src = data.avatar;
      this._avatar.alt = 'Фото ' + this._nameElement.textContent + ' ' + 'Род занятий ' + this._infoElement.textContent;
      this._id = data._id;
    }
}
