/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById('content')\n\nfunction navSection() {\n    const nav = document.createElement('nav')\n\n    const navContent = document.createElement('div')\n    navContent.className = 'nav-content'\n\n    const logo = document.createElement('h2')\n    logo.textContent = `logo`\n\n    const getStarted = document.createElement('button')\n    getStarted.textContent = `get started`\n\n    navContent.appendChild(logo)\n    navContent.appendChild(getStarted)\n\n    nav.appendChild(navContent)\n\n    content.appendChild(nav)\n}\n\nfunction heroSection() {\n    const heroFront = document.createElement('div')\n    heroFront.className = 'hero-front'\n\n    const wholeHeroContent = document.createElement('div')\n    wholeHeroContent.className = 'whole-hero-content'\n\n    const animation = document.createElement('div')\n    animation.className = 'animation'\n    animation.innerHTML = `<img src=\"../assets/food.png\" alt=\"\">`\n\n    const heroRight = document.createElement('div')\n    heroRight.className = 'hero-right'\n\n    const heroRightH1 = document.createElement('h1')\n    heroRightH1.textContent = `Food delivery and more`\n\n    const heroRightP = document.createElement('p')\n    heroRightP.textContent = `Groceries, shops, pharmacies, anything!`\n\n\n}\n\nnavSection()\nheroSection()\n\n//# sourceURL=webpack://another-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;