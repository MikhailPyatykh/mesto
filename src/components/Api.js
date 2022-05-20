export default class Api {
  constructor(config) {
      this._config = config;
  }

  _makeRequest(promise) {
      return promise.then((res) => {
          if (res.ok) {
              return res.json();
          }
          throw 'Ошибка в запросе'
      })
      .then((obj) => {
          return obj;
      })
  }

  getUserData() {
    return this._makeRequest(fetch(`${this._config.baseUrl}/users/me`, {
        method: 'GET',
        headers: this._config.headers
    }));
}

  getCards() {
      return this._makeRequest(fetch(`${this._config.baseUrl}/cards`, {
          method: 'GET',
          headers: this._config.headers
      }));
  }

  patchProfileInfo(data) {
      return this._makeRequest(fetch(`${this._config.baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._config.headers,
          body: JSON.stringify({
              name: data.nameInput,
              about: data.occupationInput
          })
      }));
  }

  postNewCard(data) {
      return this._makeRequest(fetch(`${this._config.baseUrl}/cards`, {
          method: 'POST',
          headers: this._config.headers,
          body: JSON.stringify({
              name: data.newPlaceNameInput,
              link: data.newPlaceLinkInput
          })
      }));
  }

  deleteCard(data) {
      return this._makeRequest(fetch(`${this._config.baseUrl}/cards/${data}`, {
          method: 'DELETE',
          headers: this._config.headers,
      }));
  }

  patchAvatar(data) {
    return this._makeRequest(fetch(`${this._config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._config.headers,
        body: JSON.stringify({
            avatar: data.avatarLinkInput
        })
    }));
  }

  putLike(data) {
      return this._makeRequest(fetch(`${this._config.baseUrl}/cards/${data._id}/likes`, {
          method: 'PUT',
          headers: this._config.headers,
      }));
  }

  removeLike(data) {
      return this._makeRequest(fetch(`${this._config.baseUrl}/cards/${data._id}/likes`, {
          method: 'DELETE',
          headers: this._config.headers,
          body: JSON.stringify({
              likes: data
          })
      }));
  }

  checkLikeID(array, data) {
      const arrayLikes = array.likes;
      return arrayLikes.find(element => element._id === data._id);
  };
}
