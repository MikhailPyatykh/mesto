export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element, switcher) {
    if (switcher === true) {
      this._container.prepend(element);
    }
    else {
      this._container.append(element);
    }
  }

  renderItems(data) {
    this._renderedItems.forEach(item => {
      this._renderer(item);
      // console.log(item);
      // console.log('myID: ' + data._id);
    });
  }
}

