webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Countdown\", function() { return Countdown; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_douglasdantas_Documents_Pessoais_NLW_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ \"./src/styles/components/Countdown.module.css\");\n/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/douglasdantas/Documents/Pessoais/NLW/moveit-next/src/components/Countdown.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar countdownTimeout;\nfunction Countdown() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0.1 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60; //pedStart checa se a string criada possui 2 caracteres, caso não haja\n  // é adicionado a string '0' a esquerda (dái o start).\n  // Já o split tem a mesma funcionalidade que o split do python3\n\n  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),\n      _String$padStart$spli2 = Object(_Users_douglasdantas_Documents_Pessoais_NLW_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli, 2),\n      minuteLeft = _String$padStart$spli2[0],\n      minuteRight = _String$padStart$spli2[1];\n\n  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),\n      _String$padStart$spli4 = Object(_Users_douglasdantas_Documents_Pessoais_NLW_moveit_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_String$padStart$spli3, 2),\n      secondLeft = _String$padStart$spli4[0],\n      secondRight = _String$padStart$spli4[1];\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setTime(0.1 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.CountdownContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: minuteRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \":\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondLeft\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: secondRight\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this), isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: \"\".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton, \" \").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive),\n      onClick: resetCountdown,\n      children: \"Abandonar ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"button\",\n      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,\n      onClick: startCountdown,\n      children: \"Iniciar um ciclo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 21\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Countdown, \"ocrxlP93zfM61bh38iet/2CNRQY=\");\n\n_c = Countdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"Countdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeD82MzY2Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJ1c2VTdGF0ZSIsInRpbWUiLCJzZXRUaW1lIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJzcGxpdCIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsInNlY29uZExlZnQiLCJzZWNvbmRSaWdodCIsInN0YXJ0Q291bnRkb3duIiwicmVzZXRDb3VudGRvd24iLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Iiwic3R5bGVzIiwiQ291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIiwiY291bnRkb3duQnV0dG9uQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsZ0JBQUo7QUFFTyxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBRUFDLHNEQUFRLENBQUMsTUFBTSxFQUFQLENBRlI7QUFBQSxNQUVqQkMsSUFGaUI7QUFBQSxNQUVYQyxPQUZXOztBQUFBLG1CQUdRRixzREFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFBQSxNQUdqQkcsUUFIaUI7QUFBQSxNQUdQQyxXQUhPOztBQUt4QixNQUFNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixJQUFJLEdBQUcsRUFBbEIsQ0FBaEI7QUFDQSxNQUFNTyxPQUFPLEdBQUdQLElBQUksR0FBRyxFQUF2QixDQU53QixDQVF4QjtBQUNBO0FBQ0E7O0FBVndCLDhCQVdVUSxNQUFNLENBQUNKLE9BQUQsQ0FBTixDQUFnQkssUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBWFY7QUFBQTtBQUFBLE1BV2pCQyxVQVhpQjtBQUFBLE1BV0xDLFdBWEs7O0FBQUEsK0JBWVVKLE1BQU0sQ0FBQ0QsT0FBRCxDQUFOLENBQWdCRSxRQUFoQixDQUF5QixDQUF6QixFQUE0QixHQUE1QixFQUFpQ0MsS0FBakMsQ0FBdUMsRUFBdkMsQ0FaVjtBQUFBO0FBQUEsTUFZakJHLFVBWmlCO0FBQUEsTUFZTEMsV0FaSzs7QUFjeEIsV0FBU0MsY0FBVCxHQUEwQjtBQUN0QlosZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNhLGNBQVQsR0FBMEI7QUFDdEJDLGdCQUFZLENBQUNwQixnQkFBRCxDQUFaO0FBQ0FNLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDLE1BQU0sRUFBUCxDQUFQO0FBQ0g7O0FBRURpQix5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJaEIsUUFBUSxJQUFJRixJQUFJLEdBQUcsQ0FBdkIsRUFBMEI7QUFDdEJILHNCQUFnQixHQUFHc0IsVUFBVSxDQUFDLFlBQU07QUFDaENsQixlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDSCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdIO0FBQ0osR0FOUSxFQU1OLENBQUNFLFFBQUQsRUFBV0YsSUFBWCxDQU5NLENBQVQ7QUFRQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFFb0IsOEVBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsOEJBQ0k7QUFBQSxnQ0FDSTtBQUFBLG9CQUFPVjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBTUk7QUFBQSxnQ0FDSTtBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLG9CQUFPQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFZTVosUUFBUSxnQkFDTjtBQUNJLFVBQUksRUFBQyxRQURUO0FBRUksZUFBUyxZQUFLa0IsOEVBQU0sQ0FBQ0UsZUFBWixjQUErQkYsOEVBQU0sQ0FBQ0cscUJBQXRDLENBRmI7QUFHSSxhQUFPLEVBQUVQLGNBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFTRjtBQUNJLFVBQUksRUFBQyxRQURUO0FBRUksZUFBUyxFQUFFSSw4RUFBTSxDQUFDRSxlQUZ0QjtBQUdJLGFBQU8sRUFBRVAsY0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlDSDs7R0FqRWVqQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzJ1xuXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XG5cbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwLjEgKiA2MClcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xuXG4gICAgLy9wZWRTdGFydCBjaGVjYSBzZSBhIHN0cmluZyBjcmlhZGEgcG9zc3VpIDIgY2FyYWN0ZXJlcywgY2FzbyBuw6NvIGhhamFcbiAgICAvLyDDqSBhZGljaW9uYWRvIGEgc3RyaW5nICcwJyBhIGVzcXVlcmRhIChkw6FpIG8gc3RhcnQpLlxuICAgIC8vIErDoSBvIHNwbGl0IHRlbSBhIG1lc21hIGZ1bmNpb25hbGlkYWRlIHF1ZSBvIHNwbGl0IGRvIHB5dGhvbjNcbiAgICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpXG4gICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKVxuXG4gICAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KVxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgICAgICAgc2V0VGltZSgwLjEgKiA2MCk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzQWN0aXZlICYmIHRpbWUgPiAwKSB7XG4gICAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZSh0aW1lIC0gMSlcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvdW50ZG93bkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7IGlzQWN0aXZlID8gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uQWN0aXZlfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIGNpY2xvXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbmljaWFyIHVtIGNpY2xvXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Countdown.tsx\n");

/***/ })

})