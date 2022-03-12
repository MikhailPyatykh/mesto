export class FormValidator {
  constructor(settings, form) {
      this._form = form
      this._settings = settings
      this._inputs = [...this._form.querySelectorAll(this._settings.inputSelector)];
      this._button = this._form.querySelector(this._settings.submitButtonSelector);
  }

  _showError = (input) => {
      input.classList.add(this._settings.inputErrorClass);

      const errorElement = this._form.querySelector(`#${input.id}-error`);
      errorElement.textContent = input.validationMessage;
  }

  _hideError = (input) => {
      input.classList.remove(this._settings.inputErrorClass);

      const errorElement = this._form.querySelector(`#${input.id}-error`);
      errorElement.textContent = '';
  }

  _handleField = (input) => {
      if (input.validity.valid) {
          this._hideError(input);
      } else {
          this._showError(input);
      }
  }

  _setSubmitButtonState() {
      this._button.disabled = !this._form.checkValidity();
      this._button.classList.toggle(this._settings.inactiveButtonClass, !this._form.checkValidity());
  }

  resetValidation() {
    // this._toggleButtonState(); <== управляем кнопкой ==

    this._setSubmitButtonState();

    // this._inputList.forEach((inputElement) => {
    //   this._hideError(inputElement) <==очищаем ошибки ==
    // });

    this._inputs.forEach((input) => {
      this._hideError(input);
    });
  }

  _handleSubmit(event) {
    event.preventDefault();
  }

  enableValidation() {
      this._form.addEventListener('submit', this._handleSubmit);
      this._form.addEventListener('input', () => this._setSubmitButtonState());

      this._inputs.forEach(input => input.addEventListener('input', () => this._handleField(input)));

      this._setSubmitButtonState();
  }
}
