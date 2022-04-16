export default class Api {
  constructor(headers) {
    this._headers = headers;
  }

  getObj(url) {
    return fetch(url, {
      method: 'GET',
      headers: this._headers
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

