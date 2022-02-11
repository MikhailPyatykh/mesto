const formsValidationConfig = {
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
}

const enableValidation = (data) => {
  const forms = [...document.querySelectorAll(data.formSelector)];
  forms.forEach(form => addFormListeners(form, data));
}

const addFormListeners = (form, config) => {
  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', () => setSubmitButtonState(form, config));

  const inputs = [...form.querySelectorAll(config.inputSelector)];
  inputs.forEach(input => input.addEventListener('input', () => handleField(form, input, config)));

  setSubmitButtonState(form, config);
}

const handleSubmit = (event) => {
  event.preventDefault();
}

const handleField = (form, input, config) => {
  if (input.validity.valid) {
      hideError(form, input, config);
  } else {
      showError(form, input, config);
  }
}

const showError = (form, input, config) => {
  input.classList.add(config.inputErrorClass);

  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
}

const hideError = (form, input, config) => {
  input.classList.remove(config.inputErrorClass);

  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
}

const setSubmitButtonState = (form, config) => {
  const button = form.querySelector(config.submitButtonSelector);

  button.disabled = !form.checkValidity();
  button.classList.toggle(config.inactiveButtonClass, !form.checkValidity());
}

enableValidation(formsValidationConfig);
