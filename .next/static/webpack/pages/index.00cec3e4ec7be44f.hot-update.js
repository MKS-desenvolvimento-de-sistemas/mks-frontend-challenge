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

/***/ "./styles/styles.js":
/*!**************************!*\
  !*** ./styles/styles.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Box\": function() { return /* binding */ Box; },\n/* harmony export */   \"BoxCart\": function() { return /* binding */ BoxCart; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"Card\": function() { return /* binding */ Card; },\n/* harmony export */   \"CartBox\": function() { return /* binding */ CartBox; },\n/* harmony export */   \"CheckOutBox\": function() { return /* binding */ CheckOutBox; },\n/* harmony export */   \"CheckOutCard\": function() { return /* binding */ CheckOutCard; },\n/* harmony export */   \"CheckOutCardAmount\": function() { return /* binding */ CheckOutCardAmount; },\n/* harmony export */   \"CheckOutCardDetails\": function() { return /* binding */ CheckOutCardDetails; },\n/* harmony export */   \"CheckOutTitle\": function() { return /* binding */ CheckOutTitle; },\n/* harmony export */   \"Flex\": function() { return /* binding */ Flex; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; },\n/* harmony export */   \"Grid\": function() { return /* binding */ Grid; },\n/* harmony export */   \"Logo\": function() { return /* binding */ Logo; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"TitlePrice\": function() { return /* binding */ TitlePrice; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n// General Style\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div` \n  padding: 116px 0 172.09px 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #E5E5E5;\n`;\n// Navbar styles\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`  \n  width: 100vw;\n  height: 101px;\n  background: #0F52BA;\n  display: flex;\n  align-items: center;\n`;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  font-family: 'Montserrat 600',  sans-serif;\n  font-style: normal;\n  font-size: 40px;\n  color: #FFFFFF;\n  padding: 28px 0 29px 65px;\n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  font-family: 'Montserrat 300',  sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  color: #FFFFFF;\n  margin: 25px 0 12px 5px;\n`;\nconst CartBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  width: 90px;\n  height: 45px;\n  background: #FFFFFF;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  right: 88px;\n  position: absolute;\n  cursor:pointer;\n\n  & svg{\n    width: 19.01px;\n    height: 18px;\n  }\n\n  & p{\n    font-weight: 700;\n    font-size: 18px;\n    font-family: 'Montserrat 600',  sans-serif;\n  }\n`;\n// Products styles\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  width: 217.56px;\n  height: 285px;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);\n  border-radius: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Montserrat 400', sans-serif;\n\n  & img{\n    padding: 18px 0 14px 0;\n  }\n  & h1{\n    margin: 0;\n    font-size: 16px;\n    min-width: 110px;\n    max-width: 120px;\n    height: 38px;\n    padding: 0 8px 0 14px;\n  }\n\n  & h2{\n    margin: 0;\n    background: #373737;\n    border-radius: 5px;\n    /* min-width: 64px;\n    max-width: 78px; */\n    height: 26px;\n    font-family: 'Montserrat 100', sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 15px;\n    color: #FFFFFF;\n    padding: 0px 6px 0px 7px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n  }\n\n  & h3{\n    margin: 0;\n    font-family: 'Montserrat 300', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 10px;\n    color: #2C2C2C;\n    margin: 8px 0 12px 14px;\n    height: 25px;\n  }\n`;\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`  \n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 22.44px;\n    grid-row-gap: 31px; \n`;\nconst TitlePrice = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`  \n  display: flex;  \n  width: 100%;\n  height: 38px;\n`;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`  \n  display: flex;\n  align-items: center;\n  background: #0F52BA;\n  border-radius: 0px 0px 8px 8px; \n  width: 218px;\n  height: 31.91px;\n  cursor:pointer;\n\n  & svg{\n    margin: 0  14px 0 57px;\n  }\n\n  & p{\n    font-family: 'Montserrat 300', sans-serif;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    color: #FFFFFF;    \n  }\n`;\n// Checkout style\nconst CheckOutBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  background-color: #0F52BA;\n  position: absolute;\n  width: 486px;\n  height: 1024px;\n  background: #0F52BA;\n  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);\n  right: 0;\n  z-index: 999;\n \n  & svg{\n    cursor:pointer;\n  }\n`;\nconst BoxCart = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  padding: 36px 22px 0 47px; \n`;\nconst Flex = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n display: flex;\n justify-content: space-between;\n`;\nconst CheckOutTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  color: #FFFFFF;\n  font-size: 27px;\n  font-family: 'Montserrat 600', sans-serif;\n  font-weight: 700;\n  width: 180px;\n  line-height: 33px;\n  margin-bottom: 70px;\n`;\nconst CheckOutCard = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  color: #2C2C2C;  \n  background: #FFFFFF;\n  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n  width: 379px;\n  height: 95px;\n`;\nconst CheckOutCardDetails = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  display: flex;\n  padding: 19px 10px 19px 23px;\n  font-family: 'Montserrat 300', sans-serif;\n\n  & h1 {\n    margin: 0;\n    font-size: 13px;\n    font-family: 'Montserrat 300', sans-serif;\n    font-weight: 400;\n    width: 113px;\n    height: 33px;\n  }\n`;\nconst CheckOutCardAmount = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  display: flex;\n  flex-direction: column;\n  margin-left: 9px;\n  width: 50px;\n  \n  h2 {\n    margin: 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 5px;\n    line-height: 6px;\n    font-family: 'Montserrat 300', sans-serif;\n\n\n\ncolor: #000000;\n  }\n\n`;\n// Footer Style\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  width: 100%;\n  height: 34px;\n  display: flex;\n  justify-content: center;\n  align-items: center;   \n  background: #EEEEEE;\n  \n  & p{\n    font-family: 'Montserrat 300', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    color: #000000;\n  }\n`;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUV2QyxnQkFBZ0I7QUFFVCxNQUFNQyxPQUFPRCw2REFBVSxDQUFDOzs7Ozs7OztBQVEvQixDQUFDLENBQUM7QUFFRixnQkFBZ0I7QUFFVCxNQUFNRyxNQUFNSCw2REFBVSxDQUFDOzs7Ozs7QUFNOUIsQ0FBQyxDQUFDO0FBRUssTUFBTUksT0FBT0osNkRBQVUsQ0FBQzs7Ozs7O0FBTS9CLENBQUMsQ0FBQztBQUVLLE1BQU1LLE9BQU9MLDZEQUFVLENBQUM7Ozs7OztBQU0vQixDQUFDLENBQUM7QUFFSyxNQUFNTSxVQUFVTiw2REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JsQyxDQUFDLENBQUM7QUFHRixrQkFBa0I7QUFHWCxNQUFNTyxPQUFPUCw2REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0QvQixDQUFDLENBQUM7QUFFSyxNQUFNUSxPQUFPUiw2REFBVSxDQUFDOzs7Ozs7QUFNL0IsQ0FBQyxDQUFDO0FBRUssTUFBTVMsYUFBYVQsNkRBQVUsQ0FBQzs7OztBQUlyQyxDQUFDLENBQUM7QUFFSyxNQUFNVSxTQUFTViw2REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CakMsQ0FBQyxDQUFDO0FBR0YsaUJBQWlCO0FBRVYsTUFBTVcsY0FBY1gsNkRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWF0QyxDQUFDLENBQUM7QUFFSyxNQUFNWSxVQUFVWiw2REFBVSxDQUFDOztBQUVsQyxDQUFDLENBQUM7QUFFSyxNQUFNYSxPQUFPYiw2REFBVSxDQUFDOzs7QUFHL0IsQ0FBQyxDQUFDO0FBRUssTUFBTWMsZ0JBQWdCZCw2REFBVSxDQUFDOzs7Ozs7OztBQVF4QyxDQUFDLENBQUM7QUFFSyxNQUFNZSxlQUFlZiw2REFBVSxDQUFDOzs7Ozs7O0FBT3ZDLENBQUMsQ0FBQztBQUVLLE1BQU1nQixzQkFBc0JoQiw2REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBYTlDLENBQUMsQ0FBQztBQUVLLE1BQU1pQixxQkFBcUJqQiw2REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUI3QyxDQUFDLENBQUM7QUFFRixlQUFlO0FBRVIsTUFBTWtCLFNBQVNsQiw2REFBVSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWNqQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3N0eWxlcy5qcz83Y2EyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBHZW5lcmFsIFN0eWxlXG5cbmV4cG9ydCBjb25zdCBNYWluID0gc3R5bGVkLmRpdmAgXG4gIHBhZGRpbmc6IDExNnB4IDAgMTcyLjA5cHggMDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XG5gO1xuXG4vLyBOYXZiYXIgc3R5bGVzXG5cbmV4cG9ydCBjb25zdCBCb3ggPSBzdHlsZWQuZGl2YCAgXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDFweDtcbiAgYmFja2dyb3VuZDogIzBGNTJCQTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDYwMCcsICBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDI4cHggMCAyOXB4IDY1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCAzMDAnLCAgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDI1cHggMCAxMnB4IDVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJ0Qm94ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcmlnaHQ6IDg4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOnBvaW50ZXI7XG5cbiAgJiBzdmd7XG4gICAgd2lkdGg6IDE5LjAxcHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG5cbiAgJiBwe1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCA2MDAnLCAgc2Fucy1zZXJpZjtcbiAgfVxuYDtcblxuXG4vLyBQcm9kdWN0cyBzdHlsZXNcblxuXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAyMTcuNTZweDtcbiAgaGVpZ2h0OiAyODVweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEzNTIxNik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDQwMCcsIHNhbnMtc2VyaWY7XG5cbiAgJiBpbWd7XG4gICAgcGFkZGluZzogMThweCAwIDE0cHggMDtcbiAgfVxuICAmIGgxe1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBwYWRkaW5nOiAwIDhweCAwIDE0cHg7XG4gIH1cblxuICAmIGgye1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMzczNzM3O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvKiBtaW4td2lkdGg6IDY0cHg7XG4gICAgbWF4LXdpZHRoOiA3OHB4OyAqL1xuICAgIGhlaWdodDogMjZweDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgMTAwJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogMHB4IDZweCAwcHggN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmIGgze1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgMzAwJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICMyQzJDMkM7XG4gICAgbWFyZ2luOiA4cHggMCAxMnB4IDE0cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDIyLjQ0cHg7XG4gICAgZ3JpZC1yb3ctZ2FwOiAzMXB4OyBcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZVByaWNlID0gc3R5bGVkLmRpdmAgIFxuICBkaXNwbGF5OiBmbGV4OyAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM4cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmAgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMEY1MkJBO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDhweCA4cHg7IFxuICB3aWR0aDogMjE4cHg7XG4gIGhlaWdodDogMzEuOTFweDtcbiAgY3Vyc29yOnBvaW50ZXI7XG5cbiAgJiBzdmd7XG4gICAgbWFyZ2luOiAwICAxNHB4IDAgNTdweDtcbiAgfVxuXG4gICYgcHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgMzAwJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7ICAgIFxuICB9XG5gO1xuXG5cbi8vIENoZWNrb3V0IHN0eWxlXG5cbmV4cG9ydCBjb25zdCBDaGVja091dEJveCA9IHN0eWxlZC5kaXZgICAgICAgICAgXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRjUyQkE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ4NnB4O1xuICBoZWlnaHQ6IDEwMjRweDtcbiAgYmFja2dyb3VuZDogIzBGNTJCQTtcbiAgYm94LXNoYWRvdzogLTVweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTk7XG4gXG4gICYgc3Zne1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQm94Q2FydCA9IHN0eWxlZC5kaXZgICAgICAgICAgXG4gIHBhZGRpbmc6IDM2cHggMjJweCAwIDQ3cHg7IFxuYDtcblxuZXhwb3J0IGNvbnN0IEZsZXggPSBzdHlsZWQuZGl2YCAgICAgICAgIFxuIGRpc3BsYXk6IGZsZXg7XG4ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IENoZWNrT3V0VGl0bGUgPSBzdHlsZWQuZGl2YCAgICAgICAgIFxuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgNjAwJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgd2lkdGg6IDE4MHB4O1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja091dENhcmQgPSBzdHlsZWQuZGl2YCAgICAgICAgIFxuICBjb2xvcjogIzJDMkMyQzsgIFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAtMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDM3OXB4O1xuICBoZWlnaHQ6IDk1cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tPdXRDYXJkRGV0YWlscyA9IHN0eWxlZC5kaXZgICAgICAgICAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE5cHggMTBweCAxOXB4IDIzcHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCAzMDAnLCBzYW5zLXNlcmlmO1xuXG4gICYgaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDMwMCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aWR0aDogMTEzcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tPdXRDYXJkQW1vdW50ID0gc3R5bGVkLmRpdmAgICAgICAgICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgd2lkdGg6IDUwcHg7XG4gIFxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDMwMCcsIHNhbnMtc2VyaWY7XG5cblxuXG5jb2xvcjogIzAwMDAwMDtcbiAgfVxuXG5gO1xuXG4vLyBGb290ZXIgU3R5bGVcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5kaXZgICAgICAgICAgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAgIFxuICBiYWNrZ3JvdW5kOiAjRUVFRUVFO1xuICBcbiAgJiBwe1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCAzMDAnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5gO1xuXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiTWFpbiIsImRpdiIsIkJveCIsIkxvZ28iLCJUZXh0IiwiQ2FydEJveCIsIkNhcmQiLCJHcmlkIiwiVGl0bGVQcmljZSIsIkJ1dHRvbiIsIkNoZWNrT3V0Qm94IiwiQm94Q2FydCIsIkZsZXgiLCJDaGVja091dFRpdGxlIiwiQ2hlY2tPdXRDYXJkIiwiQ2hlY2tPdXRDYXJkRGV0YWlscyIsIkNoZWNrT3V0Q2FyZEFtb3VudCIsIkZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/styles.js\n"));

/***/ })

});