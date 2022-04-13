export default class Api {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(this._url, {
      method: 'GET',
      headers: {
        authorization: 'da546cc6-febd-4e48-90b5-e55f89894793'
      }
    }).then((res) => {
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
}

