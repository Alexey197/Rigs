/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/view/rig.js":
/*!*************************!*\
  !*** ./src/view/rig.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRigTemplate": () => (/* binding */ createRigTemplate)
/* harmony export */ });
const createRigTemplate = () => {
  return (
    `<article class="rig">
                <h2 class="rig__title">alex1</h2>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Card Model</th>
                        <th scope="col">Core Clock offset, MHz</th>
                        <th scope="col">Memory Clock offset, MHz</th>
                        <th scope="col">Power limit, W</th>
                        <th scope="col">Fan, %</th>
                        <th scope="col">Target Temp, С°</th>
                        <th scope="col">Set</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">0</th>
                        <td contenteditable="true">Mark</td>
                        <td contenteditable="true">Otto</td>
                        <td contenteditable="true">@mdo</td>
                        <td contenteditable="true">Otto</td>
                        <td contenteditable="true">@mdo</td>
                        <td contenteditable="true">@mdo</td>
                        <td contenteditable="true">@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td contenteditable="true">Jacob</td>
                        <td contenteditable="true">Thornton</td>
                        <td contenteditable="true">@fat</td>
                        <td contenteditable="true">Thornton</td>
                        <td contenteditable="true">@fat</td>
                        <td contenteditable="true">@mdo</td>
                        <td contenteditable="true">@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td contenteditable="true">Larry</td>
                        <td contenteditable="true">the Bird</td>
                        <td contenteditable="true">@twitter</td>
                        <td contenteditable="true">the Bird</td>
                        <td contenteditable="true">@twitter</td>
                        <td contenteditable="true">@mdo</td>
                        <td contenteditable="true">@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td contenteditable="true">Larry</td>
                        <td contenteditable="true">the Bird</td>
                        <td contenteditable="true">@twitter</td>
                        <td contenteditable="true">the Bird</td>
                        <td contenteditable="true">@twitter</td>
                        <td contenteditable="true">@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td contenteditable="true">Larry</td>
                        <td contenteditable="true">the Bird</td>
                        <td contenteditable="true">@twitter</td>
                        <td contenteditable="true">the Bird</td>
                        <td contenteditable="true">@twitter</td>
                        <td contenteditable="true">@mdo</td>
                        <td contenteditable="true">@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td contenteditable="true">Larry</td>
                        <td contenteditable="true">the Bird</td>
                        <td contenteditable="true">@twitter</td>
                        <td contenteditable="true">the Bird</td>
                        <td contenteditable="true">@twitter</td>
                        <td contenteditable="true">@mdo</td>
                        <td contenteditable="true">@mdo</td>
                    </tr>
                    </tbody>
                </table>
                <button class="rig__submit" type="submit">save</button>
            </article>`
  )
}

/***/ }),

/***/ "./src/view/rigs.js":
/*!**************************!*\
  !*** ./src/view/rigs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRigsTemplate": () => (/* binding */ createRigsTemplate)
/* harmony export */ });
const createRigsTemplate = () => {
  return (
    `<section class="rigs container"></section>`
  )
}

/***/ }),

/***/ "./src/view/site-menu.js":
/*!*******************************!*\
  !*** ./src/view/site-menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSiteMenuTemplate": () => (/* binding */ createSiteMenuTemplate)
/* harmony export */ });
const createSiteMenuTemplate = () => {
  return (
    `<section class="main__menu">Menu</section>`
  )
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_site_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/site-menu */ "./src/view/site-menu.js");
/* harmony import */ var _view_rigs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/rigs */ "./src/view/rigs.js");
/* harmony import */ var _view_rig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/rig */ "./src/view/rig.js");




const RIG_COUNT = 3

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template)
}

const siteMainElement = document.querySelector(`.main`)
render(siteMainElement, (0,_view_site_menu__WEBPACK_IMPORTED_MODULE_0__.createSiteMenuTemplate)(), `beforeend`)
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map