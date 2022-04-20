export default class UserInfo {
    constructor(elementsSelectors) {
      this._elementsSelectors = elementsSelectors;
      this._nameElement = document.querySelector(this._elementsSelectors.nameProfile);
      this._infoElement = document.querySelector(this._elementsSelectors.occupationProfile);
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
    }
}
