"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/app/tools/math/MathNumber.tsx":
/*!*********************************************!*\
  !*** ./pages/app/tools/math/MathNumber.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MathNumber\": function() { return /* binding */ MathNumber; },\n/* harmony export */   \"Total\": function() { return /* binding */ Total; }\n/* harmony export */ });\nfunction MathNumber(number) {\n    return \"R$\" + Math.trunc(number).toLocaleString(\"pt-BR\");\n}\n_c = MathNumber;\nfunction Total(number) {\n    console.log(number, \"esssss numvber\");\n    const result = number.reduce(function(acumulador, objetoAtual) {\n        return acumulador + objetoAtual.price;\n    }, 0);\n    // Este irá produzir o mesmo resultado porem usando uma Arrow Function\n    const result2 = number.reduce((a, b)=>console.log(b.price));\n    console.log(result);\n    console.log(result2);\n// number.reduce((total, value) => {\n//     console.log(total, value)\n//     // return {\n//     //     ...total,\n//     //     [value.mesChamado]: value.valorBoleto + (total[value.mesChamado] ?? 0)\n//     //   }\n//     }, {});  \n}\n_c1 = Total;\nvar _c, _c1;\n$RefreshReg$(_c, \"MathNumber\");\n$RefreshReg$(_c1, \"Total\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcHAvdG9vbHMvbWF0aC9NYXRoTnVtYmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLFNBQVNBLFdBQVdDLE1BQWMsRUFBRTtJQUN2QyxPQUFPLE9BQU1DLEtBQUtDLEtBQUssQ0FBQ0YsUUFBUUcsY0FBYyxDQUFDO0FBQ25ELENBQUM7S0FGZUo7QUFJVCxTQUFTSyxNQUFNSixNQUFNLEVBQUU7SUFDMUJLLFFBQVFDLEdBQUcsQ0FBQ04sUUFBUTtJQUNwQixNQUFNTyxTQUFTUCxPQUFPUSxNQUFNLENBQUMsU0FBVUMsVUFBVSxFQUFFQyxXQUFXLEVBQUM7UUFDM0QsT0FBT0QsYUFBYUMsWUFBWUMsS0FBSztJQUN2QyxHQUFHO0lBRUgsc0VBQXNFO0lBQ3RFLE1BQU1DLFVBQVVaLE9BQU9RLE1BQU0sQ0FBQyxDQUFDSyxHQUFHQyxJQUFNVCxRQUFRQyxHQUFHLENBQUNRLEVBQUVILEtBQUs7SUFFM0ROLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDWkYsUUFBUUMsR0FBRyxDQUFDTTtBQUNkLG9DQUFvQztBQUNwQyxnQ0FBZ0M7QUFDaEMsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixvRkFBb0Y7QUFDcEYsYUFBYTtBQUNiLGdCQUFnQjtBQUNwQixDQUFDO01BbEJlUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcHAvdG9vbHMvbWF0aC9NYXRoTnVtYmVyLnRzeD9iZDUyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBNYXRoTnVtYmVyKG51bWJlcjogbnVtYmVyKSB7ICBcbiAgICByZXR1cm4gXCJSJFwiKyBNYXRoLnRydW5jKG51bWJlcikudG9Mb2NhbGVTdHJpbmcoJ3B0LUJSJyk7ICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gVG90YWwobnVtYmVyKSB7IFxuICAgIGNvbnNvbGUubG9nKG51bWJlciwgXCJlc3Nzc3MgbnVtdmJlclwiKSBcbiAgICBjb25zdCByZXN1bHQgPSBudW1iZXIucmVkdWNlKGZ1bmN0aW9uIChhY3VtdWxhZG9yLCBvYmpldG9BdHVhbCl7XG4gICAgICAgIHJldHVybiBhY3VtdWxhZG9yICsgb2JqZXRvQXR1YWwucHJpY2U7XG4gICAgICB9LCAwKTtcbiAgICAgIFxuICAgICAgLy8gRXN0ZSBpcsOhIHByb2R1emlyIG8gbWVzbW8gcmVzdWx0YWRvIHBvcmVtIHVzYW5kbyB1bWEgQXJyb3cgRnVuY3Rpb25cbiAgICAgIGNvbnN0IHJlc3VsdDIgPSBudW1iZXIucmVkdWNlKChhLCBiKSA9PiBjb25zb2xlLmxvZyhiLnByaWNlKSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQyKTtcbiAgICAvLyBudW1iZXIucmVkdWNlKCh0b3RhbCwgdmFsdWUpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2codG90YWwsIHZhbHVlKVxuICAgIC8vICAgICAvLyByZXR1cm4ge1xuICAgIC8vICAgICAvLyAgICAgLi4udG90YWwsXG4gICAgLy8gICAgIC8vICAgICBbdmFsdWUubWVzQ2hhbWFkb106IHZhbHVlLnZhbG9yQm9sZXRvICsgKHRvdGFsW3ZhbHVlLm1lc0NoYW1hZG9dID8/IDApXG4gICAgLy8gICAgIC8vICAgfVxuICAgIC8vICAgICB9LCB7fSk7ICBcbn1cblxuIl0sIm5hbWVzIjpbIk1hdGhOdW1iZXIiLCJudW1iZXIiLCJNYXRoIiwidHJ1bmMiLCJ0b0xvY2FsZVN0cmluZyIsIlRvdGFsIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInJlZHVjZSIsImFjdW11bGFkb3IiLCJvYmpldG9BdHVhbCIsInByaWNlIiwicmVzdWx0MiIsImEiLCJiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/app/tools/math/MathNumber.tsx\n"));

/***/ })

});