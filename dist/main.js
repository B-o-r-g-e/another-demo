/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.navSection)()\n;(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.heroSection)()\n\n\n//# sourceURL=webpack://another-demo/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   heroSection: () => (/* binding */ heroSection),\n/* harmony export */   navSection: () => (/* binding */ navSection)\n/* harmony export */ });\nconst content = document.getElementById('contents')\nconst contactTab = document.querySelector('.contact-tab')\n\nfunction navSection() {\n    const nav = document.createElement('nav')\n    nav.className = 'nav'\n\n    const navContent = document.createElement('div')\n    navContent.className = 'nav-content'\n\n    const logo = document.createElement('h2')\n    logo.className = 'logo'\n    logo.textContent = `logo`\n\n    const getStarted = document.createElement('button')\n    getStarted.className = 'get-started btn'\n    getStarted.textContent = `get started`\n\n    const contactMenu = document.createElement('div')\n    contactMenu.className = 'contact-menu'\n\n    const contact = document.createElement('button')\n    contact.className = 'contact btn'\n    contact.textContent = `contact`\n\n    const menu = document.createElement('button')\n    menu.className = 'menu btn'\n    menu.textContent = `menu`\n\n    const home = document.createElement('button')\n    home.className = 'home btn'\n    home.textContent = `home`\n\n    contactMenu.appendChild(home)\n    contactMenu.appendChild(menu)\n    contactMenu.appendChild(contact)\n\n    navContent.appendChild(logo)\n    navContent.appendChild(contactMenu)\n    navContent.appendChild(getStarted)\n\n    nav.appendChild(navContent)\n\n    content.appendChild(nav)\n\n    function contactTabs() {\n        const contacts = document.createElement('div')\n        contacts.className = 'contacts'\n\n        const firstTab = document.createElement('div')\n        firstTab.className = 'tab'\n\n        const firstTabH1 = document.createElement('h1')\n        firstTabH1.textContent = `Tab 1 Content`\n\n        firstTab.appendChild(firstTabH1)\n        contacts.appendChild(firstTab)\n\n\n        contact.addEventListener('click', () => {\n            content.style.display = 'none'\n            contactTab.appendChild(nav)\n            contactTab.style.display = 'block'\n            contactTab.appendChild(contacts)\n        })\n\n        home.addEventListener('click', () => {\n            content.style.display = 'flex'\n            content.insertBefore(nav, content.firstChild)\n            contactTab.style.display = 'none'\n        })\n    }\n\n    contactTabs()\n\n}\n\nfunction heroSection() {\n    const heroFront = document.createElement('div')\n    heroFront.className = 'hero-front';\n\n    const wholeHeroContent = document.createElement('div')\n    wholeHeroContent.className = 'whole-hero-content'\n\n    const animation = document.createElement('div')\n    animation.className = 'animation'\n\n    const foodImage = document.createElement('div')\n    foodImage.className = 'food-image'\n    foodImage.innerHTML = `<img src=\"../assets/food.png\" alt=\"\">`\n\n    const heroRight = document.createElement('div')\n    heroRight.className = 'hero-right'\n\n    const heroRightContent = document.createElement('div')\n    heroRightContent.className = 'hero-right-content'\n\n    const heroRightH1 = document.createElement('h1')\n    heroRightH1.textContent = `Food delivery and more`\n\n    const heroRightParagraph = document.createElement('p')\n    heroRightParagraph.textContent = `Groceries, shops, pharmacies, anything!`\n\n    const searchPart = document.createElement('div')\n    searchPart.className = 'search-part'\n\n    const searchLeftIcon = document.createElement('div')\n    searchLeftIcon.className = 'search-left-icon'\n    searchLeftIcon.innerHTML = `<img src=\"https://glovoapp.com/images/icons/flag--white.svg\" alt=\"\">`\n\n    const searchBox = document.createElement('div')\n    searchBox.className = 'search-box'\n\n    const form = document.createElement('div')\n    form.innerHTML = `<form action=\"/search\" method=\"GET\">\n                            <input type=\"text\" id=\"searchInput\" name=\"q\" placeholder=\"what's your address\">\n                        </form>`\n\n    searchBox.appendChild(form)\n    searchPart.appendChild(searchLeftIcon)\n    searchPart.appendChild(searchBox)\n\n    heroRightContent.appendChild(heroRightH1)\n    heroRightContent.appendChild(heroRightParagraph)\n    heroRightContent.appendChild(searchPart)\n\n    animation.appendChild(foodImage)\n\n    heroRight.appendChild(heroRightContent)\n\n    wholeHeroContent.appendChild(animation)\n    wholeHeroContent.appendChild(heroRight)\n\n    heroFront.appendChild(wholeHeroContent)\n\n    content.appendChild(heroFront)\n}\n\n\n\n//# sourceURL=webpack://another-demo/./src/page-load.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;