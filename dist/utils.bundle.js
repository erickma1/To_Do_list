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

/***/ "./src/modules/ul.js":
/*!***************************!*\
  !*** ./src/modules/ul.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEventListeners)\n/* harmony export */ });\n// import Task from './task.js';\r\n\r\n// export function createToDoList() {\r\n//   const todoList = [];\r\n\r\n//   for (let i = 0; i < 5; i += 1) {\r\n//     if (i === 1) todoList.push(new Task(i, ` To Do ${i + 1}`, true));\r\n//     else todoList.push(new Task(i, `To Do ${i + 1}`, false));\r\n//   }\r\n\r\n//   return (todoList);\r\n// }\r\n\r\n// export function renderToDoList(taskList) {\r\n//   const ulElement = document.createElement('ul');\r\n\r\n//   taskList.forEach((task) => {\r\n//     const liElement = document.createElement('li');\r\n//     const isChecked = 'unchecked';\r\n//     liElement.innerHTML = `\r\n//         <div>\r\n//             <input type=\"checkbox\" ${isChecked}>\r\n//             ${task.description}\r\n//         </div>\r\n//         <i class=\"fa fa-trash icon\" aria-hidden=\"true\"></i>\r\n//         `;\r\n//     ulElement.appendChild(liElement);\r\n//   });\r\n\r\n//   return ulElement;\r\n// }\r\n\r\nfunction addEventListeners(liElement, todoObj) {\r\n  const dscr = liElement.querySelector(\".task-description\");\r\n  const checkbox = liElement.querySelector(\".completed-checkbox\");\r\n  const trash = liElement.querySelector(\".trash-icon\");\r\n\r\n  checkbox.addEventListener(\"change\", function () {\r\n    dscr.style.textDecoration = this.checked ? \"line-through\" : \"none\";\r\n    todoObj.updateTask(liElement);\r\n  });\r\n\r\n  dscr.addEventListener(\"focus\", function () {\r\n    liElement.style.backgroundColor = \"#ffeea8\";\r\n    this.style.cursor = \"text\";\r\n  });\r\n\r\n  dscr.addEventListener(\"focusout\", function () {\r\n    liElement.style.backgroundColor = \"transparent\";\r\n    this.style.cursor = \"default\";\r\n    if (this.value.trim() === \"\") {\r\n      todoObj.removeTask(liElement);\r\n    } else {\r\n      todoObj.updateTask(liElement);\r\n    }\r\n  });\r\n\r\n  dscr.addEventListener(\"keydown\", (e) => {\r\n    if (e.keyCode === 13) {\r\n      e.target.blur();\r\n    }\r\n  });\r\n\r\n  trash.addEventListener(\"click\", () => {\r\n    todoObj.removeTask(liElement);\r\n  });\r\n}\n\n//# sourceURL=webpack://to_do_list/./src/modules/ul.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modules/ul.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;