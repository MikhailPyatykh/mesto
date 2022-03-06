export class FormValidator {
  constructor(settings, form) {
      this._form = form
      this._settings = settings
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

  handleField = (input) => {
      if (input.validity.valid) {
          this._hideError(input);
      } else {
          this._showError(input);
      }
  }

  setSubmitButtonState() {
      this._button = this._form.querySelector(this._settings.submitButtonSelector);

      this._button.disabled = !this._form.checkValidity();
      this._button.classList.toggle(this._settings.inactiveButtonClass, !this._form.checkValidity());
  }

  _handleSubmit(event) {
    event.preventDefault();
  }

  enableValidation() {
      this._form.addEventListener('submit', this._handleSubmit);
      this._form.addEventListener('input', () => this.setSubmitButtonState());

      this._inputs = [...this._form.querySelectorAll(this._settings.inputSelector)];
      this._inputs.forEach(input => input.addEventListener('input', () => this.handleField(input)));

      this.setSubmitButtonState();
  }

}
