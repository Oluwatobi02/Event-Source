"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const eventSource = new EventSource(\"http://localhost:5000/stream\");\n        eventSource.onopen = function() {\n            console.log(\"opening connection\");\n        };\n        eventSource.onmessage = function(event) {\n            console.log(\"New message from server:\", JSON.parse(event.data));\n        };\n        eventSource.onerror = function(error) {\n            console.log(\"New message from server:\", error);\n        };\n        (async ()=>{\n            const res = await fetch(\"http://localhost:5000/\", {\n                method: \"GET\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const data = await res.json();\n            console.log(data);\n        })();\n        return ()=>{\n            eventSource.close();\n            console.log(\"closed conn\");\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Hello\"\n    }, void 0, false, {\n        fileName: \"/home/tee/streaming/streamfrontend/app/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0M7QUFFbkIsU0FBU0M7O0lBRXRCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1FLGNBQWMsSUFBSUMsWUFBWTtRQUVwQ0QsWUFBWUUsTUFBTSxHQUFHO1lBQ25CQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtRQUVBSixZQUFZSyxTQUFTLEdBQUcsU0FBU0MsS0FBSztZQUNwQ0gsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QkcsS0FBS0MsS0FBSyxDQUFDRixNQUFNRyxJQUFJO1FBQy9EO1FBRUFULFlBQVlVLE9BQU8sR0FBRyxTQUFTQyxLQUFLO1lBQ2xDUixRQUFRQyxHQUFHLENBQUMsNEJBQTRCTztRQUMxQztRQUVEO1lBQ0MsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLDBCQUEwQjtnQkFDaERDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBQ0EsTUFBTU4sT0FBTyxNQUFNRyxJQUFJSSxJQUFJO1lBQzNCYixRQUFRQyxHQUFHLENBQUNLO1FBQ2Q7UUFFQSxPQUFPO1lBQ0xULFlBQVlpQixLQUFLO1lBQ2pCZCxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNBLEdBQUUsRUFBRTtJQUNKLHFCQUNFLDhEQUFDYztrQkFBSTs7Ozs7O0FBSVQ7R0F0Q3dCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zdHJlYW0nKTtcblxuICAgIGV2ZW50U291cmNlLm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJvcGVuaW5nIGNvbm5lY3Rpb25cIik7XG4gICAgfTtcbiAgICBcbiAgICBldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc29sZS5sb2coXCJOZXcgbWVzc2FnZSBmcm9tIHNlcnZlcjpcIiwgSlNPTi5wYXJzZShldmVudC5kYXRhKSk7XG4gICAgfTtcbiAgICBcbiAgICBldmVudFNvdXJjZS5vbmVycm9yID0gZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTmV3IG1lc3NhZ2UgZnJvbSBzZXJ2ZXI6XCIsIGVycm9yKTtcbiAgICB9O1xuICAgIFxuICAoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvJywge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH0pKCk7XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBldmVudFNvdXJjZS5jbG9zZSgpXG4gICAgY29uc29sZS5sb2coXCJjbG9zZWQgY29ublwiKVxuICB9XG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEhlbGxvXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiSG9tZSIsImV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2UiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlIiwiZXZlbnQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwib25lcnJvciIsImVycm9yIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsImNsb3NlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});