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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var projects = _modules_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.loadProjects();\n  var currentProjectIndex = 0;\n  if (projects.length === 0) {\n    projects.push(new _modules_project__WEBPACK_IMPORTED_MODULE_2__.Project('Default Project'));\n    _modules_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveProjects(projects);\n  }\n  var renderProjects = function renderProjects() {\n    _modules_dom__WEBPACK_IMPORTED_MODULE_4__.DOM.renderProjects(projects, switchProject);\n  };\n  var switchProject = function switchProject(index) {\n    currentProjectIndex = index;\n    _modules_dom__WEBPACK_IMPORTED_MODULE_4__.DOM.renderTodos(projects[currentProjectIndex]);\n  };\n  var addProjectButton = document.getElementById('add-project');\n  addProjectButton.addEventListener('click', function () {\n    var projectTitle = document.getElementById('project-title').value.trim();\n    if (projectTitle) {\n      projects.push(new _modules_project__WEBPACK_IMPORTED_MODULE_2__.Project(projectTitle));\n      _modules_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveProjects(projects);\n      renderProjects();\n      switchProject(projects.length - 1);\n      document.getElementById('project-title').value = '';\n    }\n  });\n  var addTodoButton = document.getElementById('add-todo');\n  addTodoButton.addEventListener('click', function () {\n    var title = document.getElementById('todo-title').value;\n    var description = document.getElementById('todo-description').value;\n    var dueDate = document.getElementById('todo-dueDate').value;\n    var priority = document.getElementById('todo-priority').value;\n    if (title && dueDate) {\n      var newTodo = new _modules_todo__WEBPACK_IMPORTED_MODULE_1__.ToDo(title, description, dueDate, priority);\n      projects[currentProjectIndex].addTodo(newTodo);\n      _modules_storage__WEBPACK_IMPORTED_MODULE_3__.Storage.saveProjects(projects);\n      _modules_dom__WEBPACK_IMPORTED_MODULE_4__.DOM.renderTodos(projects[currentProjectIndex]);\n    }\n  });\n  renderProjects();\n  switchProject(0);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: () => (/* binding */ DOM)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nvar DOM = function () {\n  var projectContainer = document.getElementById('project-container');\n  var todoContainer = document.getElementById('todo-container');\n  var renderProjects = function renderProjects(projects, switchProjectCallback) {\n    projectContainer.innerHTML = '';\n    projects.forEach(function (project, index) {\n      var projectDiv = document.createElement('div');\n      projectDiv.textContent = project.name;\n      projectDiv.classList.add('project-item');\n      projectDiv.addEventListener('click', function () {\n        return switchProjectCallback(index);\n      });\n      projectContainer.appendChild(projectDiv);\n    });\n  };\n  var renderTodos = function renderTodos(project) {\n    todoContainer.innerHTML = '';\n    project.todos.forEach(function (todo) {\n      var todoDiv = document.createElement('div');\n      todoDiv.textContent = \"\".concat(todo.title, \" - \").concat(todo.dueDate);\n      todoDiv.classList.add('todo-item');\n      todoDiv.addEventListener('click', function () {\n        // expand todo to see/edit details\n      });\n      todoContainer.appendChild(todoDiv);\n    });\n  };\n  return {\n    renderProjects: renderProjects,\n    renderTodos: renderTodos\n  };\n}();\n\n\n//# sourceURL=webpack:///./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Project = /*#__PURE__*/function () {\n  function Project(name) {\n    _classCallCheck(this, Project);\n    this.name = name;\n    this.todos = [];\n  }\n  return _createClass(Project, [{\n    key: \"addTodo\",\n    value: function addTodo(todo) {\n      this.todos.push(todo);\n    }\n  }, {\n    key: \"removeTodo\",\n    value: function removeTodo(todoTitle) {\n      this.todos = this.todos.filter(function (todo) {\n        return todo.title !== todoTitle;\n      });\n    }\n  }]);\n}();\n\n//# sourceURL=webpack:///./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Storage: () => (/* binding */ Storage)\n/* harmony export */ });\nvar Storage = function () {\n  var saveProjects = function saveProjects(projects) {\n    localStorage.setItem('projects', JSON.stringify(projects));\n  };\n  var loadProjects = function loadProjects() {\n    var projects = JSON.parse(localStorage.getItem('projects'));\n    return projects ? projects : [];\n  };\n  return {\n    saveProjects: saveProjects,\n    loadProjects: loadProjects\n  };\n}();\n\n//# sourceURL=webpack:///./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDo: () => (/* binding */ ToDo)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar ToDo = /*#__PURE__*/function () {\n  function ToDo(title, description, dueDate, priority) {\n    var notes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';\n    var checkList = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];\n    _classCallCheck(this, ToDo);\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.checkList = checkList;\n    this.completed = false;\n  }\n  return _createClass(ToDo, [{\n    key: \"toggleComplete\",\n    value: function toggleComplete() {\n      this.completed = !this.completed;\n    }\n  }]);\n}();\n\n//# sourceURL=webpack:///./src/modules/todo.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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