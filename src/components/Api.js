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

  getData(url) {
    return this._makeRequest(fetch(url, {
      method: 'GET',
      headers: this._headers
    }));
  }

  patchData(url, data) {
    return this._makeRequest(fetch(url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name: data.nameInput, about: data.occupationInput })
    })
    );
  }

  postData(url, data) {
    return this._makeRequest(fetch(url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name: data.newPlaceNameInput, link: data.newPlaceLinkInput })
    })
    );
  }
}

