export default class Api {
  constructor(headers) {
    this._headers = headers;
  }

  _makeRequest(promise) {
    return promise.then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw 'Ошибочка вышла'
    }).then((obj) => {
      return obj;
    }).catch((err) => {
      console.error(err);
    })
  }

  getCards(url) {
    return this._makeRequest(fetch(url, {
      method: 'GET',
      headers: this._headers
    }));
  }

  patchProfileInfo(url, data) {
    return this._makeRequest(fetch(url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name: data.nameInput, about: data.occupationInput })
    })
    );
  }

  postNewCard(url, data) {
    return this._makeRequest(fetch(url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name: data.newPlaceNameInput, link: data.newPlaceLinkInput })
    })
    );
  }

  deleteCard(url, data) {
    return this._makeRequest(fetch(`${url}${data}`, {
      method: 'DELETE',
      headers: this._headers,
      })
    );
  }

  putLike(url, data) {
    return this._makeRequest(fetch(`${url}${data._id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    );
  }

  deleteLike(url, data) {
    return this._makeRequest(fetch(`${url}${data._id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    );
  }

  checkLikeID(array, data) {
    const arrayLikes = array.likes;
    return arrayLikes.find(element => element._id === data.id);
  };
}

