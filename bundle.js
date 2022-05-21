(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e}var n,r;return n=t,(r=[{key:"_makeRequest",value:function(e){return e.then((function(e){if(e.ok)return e.json();throw"Ошибка в запросе"})).then((function(e){return e}))}},{key:"getUserData",value:function(){return this._makeRequest(fetch("".concat(this._config.baseUrl,"/users/me"),{method:"GET",headers:this._config.headers}))}},{key:"getCards",value:function(){return this._makeRequest(fetch("".concat(this._config.baseUrl,"/cards"),{method:"GET",headers:this._config.headers}))}},{key:"patchProfileInfo",value:function(e){return this._makeRequest(fetch("".concat(this._config.baseUrl,"/users/me"),{method:"PATCH",headers:this._config.headers,body:JSON.stringify({name:e.nameInput,about:e.occupationInput})}))}},{key:"postNewCard",value:function(e){return this._makeRequest(fetch("".concat(this._config.baseUrl,"/cards"),{method:"POST",headers:this._config.headers,body:JSON.stringify({name:e.newPlaceNameInput,link:e.newPlaceLinkInput})}))}},{key:"deleteCard",value:function(e){return this._makeRequest(fetch("".concat(this._config.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._config.headers}))}},{key:"patchAvatar",value:function(e){return this._makeRequest(fetch("".concat(this._config.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._config.headers,body:JSON.stringify({avatar:e.avatarLinkInput})}))}},{key:"putLike",value:function(e){return this._makeRequest(fetch("".concat(this._config.baseUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._config.headers}))}},{key:"removeLike",value:function(e){return this._makeRequest(fetch("".concat(this._config.baseUrl,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._config.headers,body:JSON.stringify({likes:e})}))}},{key:"checkLikeID",value:function(e,t){return e.likes.find((function(e){return e._id===t._id}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n={formSelector:".popup__inputs",inputSelector:".popup__input",inputErrorClass:"popup__input_type_error",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_disabled"},r={nameProfile:".profile__info-fio",occupationProfile:".profile__info-occupation",popupView:".popup_view",placesList:".places__list",popupEditProfile:".popup_edit_profile",popupAddPlace:".popup_add_place",popupDeleteCard:".popup_delete-card",popupPatchAvatar:".popup_patch-avatar",placeID:".place__id",avatarProfile:".profile__avatar-image"},o=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__avatar-button"),u=document.querySelector(".popup__input_type_fio"),c=(document.querySelector(".profile__info-occupation"),document.querySelector(".popup__input_type_occupation")),s=(document.querySelector(".popup__input_type_place"),document.querySelector(".popup__input_type_link"),"#place-template");function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){function e(t,n){var r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"_showError",(function(e){e.classList.add(o._settings.inputErrorClass),o._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage})),f(this,"_hideError",(function(e){e.classList.remove(o._settings.inputErrorClass),o._form.querySelector("#".concat(e.id,"-error")).textContent=""})),f(this,"_handleField",(function(e){e.validity.valid?o._hideError(e):o._showError(e)})),this._form=n,this._settings=t,this._inputs=function(e){if(Array.isArray(e))return l(e)}(r=this._form.querySelectorAll(this._settings.inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this._button=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_setSubmitButtonState",value:function(){this._button.disabled=!this._form.checkValidity(),this._button.classList.toggle(this._settings.inactiveButtonClass,!this._form.checkValidity())}},{key:"resetValidation",value:function(){var e=this;this._setSubmitButtonState(),this._inputs.forEach((function(t){e._hideError(t)}))}},{key:"enableValidation",value:function(){var e=this;this._form.addEventListener("input",(function(){return e._setSubmitButtonState()})),this._inputs.forEach((function(t){return t.addEventListener("input",(function(){return e._handleField(t)}))})),this._setSubmitButtonState()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n,r,o,i,a,u,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._item=t,this._template=document.querySelector(n).content.querySelector(".place"),this._place=this._template.cloneNode(!0),this._cardImage=this._place.querySelector(".place__image"),this._cardTitle=this._place.querySelector(".place__title"),this._buttonLike=this._place.querySelector(".place__likes_icon-heart"),this._likesNumbers=this._place.querySelector(".place__likes_numbers"),this._placeID=this._place.querySelector(".place__id"),this._buttonDelete=this._place.querySelector(".place__icon-basket"),this._profileData=o,this._handleCardClick=r,this._handleBasketClick=i,this._likeStatus=a,this._putLike=u,this._removeLike=c}var t,n;return t=e,(n=[{key:"likeToggle",value:function(e){e.target.classList.toggle("place__likes_icon-heart_active")}},{key:"getId",value:function(){return this._item}},{key:"updateLikes",value:function(e){this._likesNumbers.textContent=e.likes.length}},{key:"setLikeStatus",value:function(){this._likeStatus?this._buttonLike.classList.add("place__likes_icon-heart_active"):this._buttonLike.classList.remove("place__likes_icon-heart_active")}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(t){e._buttonLike.classList.contains("place__likes_icon-heart_active")?e._removeLike(e,t):e._putLike(e,t)})),this._item.owner._id===this._profileData._id&&(this._buttonDelete.classList.add("place__icon-basket_active"),this._buttonDelete.addEventListener("click",(function(){e._handleBasketClick(e._item._id,e._place)}))),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._item.name,e._item.link)}))}},{key:"createCard",value:function(){return this._cardTitle.textContent=this._item.name,this._placeID.dataset.id=this._item._id,this._cardImage.src=this._item.link,this._cardImage.alt="Вид на "+this._item.name,this._likesNumbers.textContent=this._item.likes.length,this._setEventListeners(),this.setLikeStatus(),this._place}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e,t){!0===t?this._container.prepend(e):this._container.append(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.closePopup()},(n="_escHandler")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._popupCloseButton=this._popup.querySelector(".popup__close-btn"),this._escHandler=this._escHandler.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escHandler)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escHandler)}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){e.closePopup()})),this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&e.closePopup()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function E(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupPicture=t._popup.querySelector(".popup__picture"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"openPopup",value:function(e,t){this._popupPicture.src=t,this._popupCaption.textContent=e,this._popupPicture.alt="Вид на "+e,w(O(a.prototype),"openPopup",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__inputs"),n._inputs=n._popup.querySelectorAll(".popup__input"),n._submitButton=n._popup.querySelector(".popup__submit-btn"),n._defaultText=n._submitButton.textContent,n}return t=a,(n=[{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._defaultText}},{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._inputs.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"openPopup",value:function(){I(D(a.prototype),"openPopup",this).call(this)}},{key:"closePopup",value:function(){I(D(a.prototype),"closePopup",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;I(D(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e,e._getInputValues())}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function H(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n}return t=a,(n=[{key:"openPopup",value:function(e,t){U(F(a.prototype),"openPopup",this).call(this),this.id=e,this.card=t}},{key:"setEventListeners",value:function(){var e=this;U(F(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e)}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(m);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementsSelectors=t,this._nameElement=document.querySelector(this._elementsSelectors.nameProfile),this._infoElement=document.querySelector(this._elementsSelectors.occupationProfile),this._avatar=document.querySelector(this._elementsSelectors.avatarProfile)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,info:this._infoElement.textContent}}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._infoElement.textContent=e.about,this._avatar.src=e.avatar,this._avatar.alt="Фото "+this._nameElement.textContent+" Род занятий "+this._infoElement.textContent,this._id=e._id}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new L(r.popupView),K=function(e,t){z.openPopup(e,t)},Q=function(e,t){te.putLike(e.getId()).then((function(t){e.updateLikes(t)})).then((function(){return e.likeToggle(t)})).catch((function(e){console.log(e)}))},W=function(e,t){te.removeLike(e.getId()).then((function(t){e.updateLikes(t)})).then((function(){return e.likeToggle(t)})).catch((function(e){console.log(e)}))};z.setEventListeners();var X=function(e,t,n,r,o,i,a,u){return new d(e,t,n,r,o,i,a,u).createCard()},Y=new h(n,editProfileFormInputs),Z=new h(n,newPlaceFormInputs),ee=new h(n,avatarFormInput);Y.enableValidation(),Z.enableValidation(),ee.enableValidation();var te=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-38",headers:{authorization:"da546cc6-febd-4e48-90b5-e55f89894793",Accept:"application/json","Content-type":"application/json; charset=utf-8"}}),ne=new G(r);Promise.all([te.getUserData(),te.getCards()]).then((function(e){var t,n,l=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),p=l[0],f=l[1];ne.setUserInfo(p);var h=new b({data:f,renderer:function(e){h.addItem(X(e,s,K,p,y,te.checkLikeID(e,p),Q,W),!1)}},r.placesList),_=new A(r.popupEditProfile,(function(e,t){e.renderLoading(!0),te.patchProfileInfo(t).then((function(e){ne.setUserInfo(e)})).then((function(){return e.closePopup()})).finally((function(){return e.renderLoading(!1)})).catch((function(e){console.error(e)}))}));o.addEventListener("click",(function(){var e=ne.getUserInfo();u.value=e.name,c.value=e.info,_.openPopup(),Y.resetValidation()})),_.setEventListeners();var d=new J(r.popupDeleteCard,(function(e){te.deleteCard(e.id).then((function(){return e.card.remove()})).then((function(){return e.closePopup()})).catch((function(e){console.error(e)}))})),y=function(e,t){d.openPopup(e,t)};d.setEventListeners();var v=new A(r.popupAddPlace,(function(e,t){e.renderLoading(!0),te.postNewCard(t).then((function(e){h.addItem(X(e,s,K,p,y,te.checkLikeID(e,p),Q,W),!0)})).then((function(){return e.closePopup()})).finally((function(){return e.renderLoading(!1)})).catch((function(e){console.error(e)}))}));i.addEventListener("click",(function(){v.openPopup(),Z.resetValidation()})),v.setEventListeners();var m=new A(r.popupPatchAvatar,(function(e,t){e.renderLoading(!0),te.patchAvatar(t).then((function(e){ne.setUserInfo(e)})).then((function(){return e.closePopup()})).finally((function(){return e.renderLoading(!1)})).catch((function(e){console.error(e)}))}));a.addEventListener("click",(function(){m.openPopup(),ee.resetValidation()})),m.setEventListeners(),h.renderItems()})).catch((function(e){console.error(e)}))})();