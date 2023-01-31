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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Box\": function() { return /* binding */ Box; },\n/* harmony export */   \"BoxCart\": function() { return /* binding */ BoxCart; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"Card\": function() { return /* binding */ Card; },\n/* harmony export */   \"CartBox\": function() { return /* binding */ CartBox; },\n/* harmony export */   \"CheckOutBox\": function() { return /* binding */ CheckOutBox; },\n/* harmony export */   \"CheckOutButton\": function() { return /* binding */ CheckOutButton; },\n/* harmony export */   \"CheckOutCard\": function() { return /* binding */ CheckOutCard; },\n/* harmony export */   \"CheckOutCardAmount\": function() { return /* binding */ CheckOutCardAmount; },\n/* harmony export */   \"CheckOutCardDetails\": function() { return /* binding */ CheckOutCardDetails; },\n/* harmony export */   \"CheckOutTitle\": function() { return /* binding */ CheckOutTitle; },\n/* harmony export */   \"Flex\": function() { return /* binding */ Flex; },\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; },\n/* harmony export */   \"Grid\": function() { return /* binding */ Grid; },\n/* harmony export */   \"Logo\": function() { return /* binding */ Logo; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; },\n/* harmony export */   \"Text\": function() { return /* binding */ Text; },\n/* harmony export */   \"TitlePrice\": function() { return /* binding */ TitlePrice; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n// General Style\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div` \n  padding: 116px 0 172.09px 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #E5E5E5;\n`;\n// Navbar styles\nconst Box = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`  \n  /* width: 100vw; */\n  height: 101px;\n  background: #0F52BA;\n  display: flex;\n  align-items: center;\n`;\nconst Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  font-family: 'Montserrat 600',  sans-serif;\n  font-style: normal;\n  font-size: 40px;\n  color: #FFFFFF;\n  padding: 28px 0 29px 65px;\n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  font-family: 'Montserrat 300',  sans-serif;\n  font-style: normal;\n  font-size: 20px;\n  color: #FFFFFF;\n  margin: 25px 0 12px 5px;\n`;\nconst CartBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  width: 90px;\n  height: 45px;\n  background: #FFFFFF;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  right: 88px;\n  position: absolute;\n  cursor:pointer;\n\n  & svg{\n    width: 19.01px;\n    height: 18px;\n  }\n\n  & p{\n    font-weight: 700;\n    font-size: 18px;\n    font-family: 'Montserrat 600',  sans-serif;\n  }\n`;\n// Products styles\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  width: 217.56px;\n  height: 285px;\n  background: #FFFFFF;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);\n  border-radius: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  font-family: 'Montserrat 400', sans-serif;\n\n  & img{\n    padding: 18px 0 14px 0;\n  }\n  & h1{\n    margin: 0;\n    font-size: 16px;\n    min-width: 110px;\n    max-width: 120px;\n    height: 38px;\n    padding: 0 8px 0 14px;\n  }\n\n  & h2{\n    margin: 0;\n    background: #373737;\n    border-radius: 5px;\n    /* min-width: 64px;\n    max-width: 78px; */\n    height: 26px;\n    font-family: 'Montserrat 100', sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 15px;\n    color: #FFFFFF;\n    padding: 0px 6px 0px 7px;\n    text-align: center;\n    display: flex;\n    align-items: center;\n  }\n\n  & h3{\n    margin: 0;\n    font-family: 'Montserrat 300', sans-serif;\n    font-style: normal;\n    font-weight: 300;\n    font-size: 10px;\n    color: #2C2C2C;\n    margin: 8px 0 12px 14px;\n    height: 25px;\n  }\n`;\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`  \n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-column-gap: 22.44px;\n    grid-row-gap: 31px; \n`;\nconst TitlePrice = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`  \n  display: flex;  \n  width: 100%;\n  height: 38px;\n`;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`  \n  display: flex;\n  align-items: center;\n  background: #0F52BA;\n  border-radius: 0px 0px 8px 8px; \n  width: 218px;\n  height: 31.91px;\n  cursor:pointer;\n\n  & svg{\n    margin: 0  14px 0 57px;\n  }\n\n  & p{\n    font-family: 'Montserrat 300', sans-serif;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    color: #FFFFFF;    \n  }\n`;\n// Checkout style\nconst CheckOutBox = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  background-color: #0F52BA;\n  position: absolute;\n  width: 486px;\n  height: 1024px;\n  background: #0F52BA;\n  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);\n  right: 0;\n  z-index: 999;\n \n  & svg{\n    cursor:pointer;\n  }\n`;\nconst BoxCart = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  padding: 36px 22px 0 47px; \n`;\nconst Flex = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n display: flex;\n justify-content: space-between;\n`;\nconst CheckOutTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  color: #FFFFFF;\n  font-size: 27px;\n  font-family: 'Montserrat 600', sans-serif;\n  font-weight: 700;\n  width: 180px;\n  line-height: 33px;\n  margin-bottom: 70px;\n`;\nconst CheckOutCard = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  color: #2C2C2C;  \n  background: #FFFFFF;\n  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n  width: 379px;\n  height: 95px;\n  margin-bottom: 24px;\n`;\nconst CheckOutCardDetails = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  display: flex;\n  padding: 19px 10px 19px 23px;\n  font-family: 'Montserrat 300', sans-serif;\n  align-items: flex-end;\n\n  & h1 {\n    margin: 0;\n    font-size: 13px;\n    font-family: 'Montserrat 300', sans-serif;\n    font-weight: 400;\n    width: 113px;\n    height: 33px;\n  }\n\n  & h4{\n    font-family: 'Montserrat 600', sans-serif;\n    font-weight: 700;\n    font-size: 14px;\n  }\n`;\nconst CheckOutCardAmount = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  display: flex;\n  flex-direction: column;\n  margin-left: 9px;\n  width: 50px;\n  margin-right: 40px;\n  \n  & h2 {\n    margin: 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 5px;\n    line-height: 6px;\n    color: #000000;\n  }\n\n  & h3{\n    font-weight: 400;\n    font-size: 8px;\n  }\n`;\nconst CheckOutButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`     \nbackground: #000000;\nwidth: 486px;\nheight: 97px;\nposition: absolute;\nbottom: 0; \n\n& button {\n  margin: auto 0;;\n}\n`;\n// Footer Style\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`         \n  width: 100%;\n  height: 34px;\n  display: flex;\n  justify-content: center;\n  align-items: center;   \n  background: #EEEEEE;\n  \n  & p{\n    font-family: 'Montserrat 300', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    color: #000000;\n  }\n`;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvc3R5bGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFFdkMsZ0JBQWdCO0FBRVQsTUFBTUMsT0FBT0QsNkRBQVUsQ0FBQzs7Ozs7Ozs7QUFRL0IsQ0FBQyxDQUFDO0FBRUYsZ0JBQWdCO0FBRVQsTUFBTUcsTUFBTUgsNkRBQVUsQ0FBQzs7Ozs7O0FBTTlCLENBQUMsQ0FBQztBQUVLLE1BQU1JLE9BQU9KLDZEQUFVLENBQUM7Ozs7OztBQU0vQixDQUFDLENBQUM7QUFFSyxNQUFNSyxPQUFPTCw2REFBVSxDQUFDOzs7Ozs7QUFNL0IsQ0FBQyxDQUFDO0FBRUssTUFBTU0sVUFBVU4sNkRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCbEMsQ0FBQyxDQUFDO0FBR0Ysa0JBQWtCO0FBR1gsTUFBTU8sT0FBT1AsNkRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EL0IsQ0FBQyxDQUFDO0FBRUssTUFBTVEsT0FBT1IsNkRBQVUsQ0FBQzs7Ozs7O0FBTS9CLENBQUMsQ0FBQztBQUVLLE1BQU1TLGFBQWFULDZEQUFVLENBQUM7Ozs7QUFJckMsQ0FBQyxDQUFDO0FBRUssTUFBTVUsU0FBU1YsNkRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQmpDLENBQUMsQ0FBQztBQUdGLGlCQUFpQjtBQUVWLE1BQU1XLGNBQWNYLDZEQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhdEMsQ0FBQyxDQUFDO0FBRUssTUFBTVksVUFBVVosNkRBQVUsQ0FBQzs7QUFFbEMsQ0FBQyxDQUFDO0FBRUssTUFBTWEsT0FBT2IsNkRBQVUsQ0FBQzs7O0FBRy9CLENBQUMsQ0FBQztBQUVLLE1BQU1jLGdCQUFnQmQsNkRBQVUsQ0FBQzs7Ozs7Ozs7QUFReEMsQ0FBQyxDQUFDO0FBRUssTUFBTWUsZUFBZWYsNkRBQVUsQ0FBQzs7Ozs7Ozs7QUFRdkMsQ0FBQyxDQUFDO0FBRUssTUFBTWdCLHNCQUFzQmhCLDZEQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0I5QyxDQUFDLENBQUM7QUFFSyxNQUFNaUIscUJBQXFCakIsNkRBQVUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQjdDLENBQUMsQ0FBQztBQUVLLE1BQU1rQixpQkFBaUJsQiw2REFBVSxDQUFDOzs7Ozs7Ozs7O0FBVXpDLENBQUMsQ0FBQztBQUVGLGVBQWU7QUFFUixNQUFNbUIsU0FBU25CLDZEQUFVLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBY2pDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvc3R5bGVzLmpzPzdjYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEdlbmVyYWwgU3R5bGVcblxuZXhwb3J0IGNvbnN0IE1haW4gPSBzdHlsZWQuZGl2YCBcbiAgcGFkZGluZzogMTE2cHggMCAxNzIuMDlweCAwO1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcbmA7XG5cbi8vIE5hdmJhciBzdHlsZXNcblxuZXhwb3J0IGNvbnN0IEJveCA9IHN0eWxlZC5kaXZgICBcbiAgLyogd2lkdGg6IDEwMHZ3OyAqL1xuICBoZWlnaHQ6IDEwMXB4O1xuICBiYWNrZ3JvdW5kOiAjMEY1MkJBO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgNjAwJywgIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogMjhweCAwIDI5cHggNjVweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDMwMCcsICBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbjogMjVweCAwIDEycHggNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENhcnRCb3ggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICByaWdodDogODhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6cG9pbnRlcjtcblxuICAmIHN2Z3tcbiAgICB3aWR0aDogMTkuMDFweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gIH1cblxuICAmIHB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDYwMCcsICBzYW5zLXNlcmlmO1xuICB9XG5gO1xuXG5cbi8vIFByb2R1Y3RzIHN0eWxlc1xuXG5cbmV4cG9ydCBjb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDIxNy41NnB4O1xuICBoZWlnaHQ6IDI4NXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTM1MjE2KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQgNDAwJywgc2Fucy1zZXJpZjtcblxuICAmIGltZ3tcbiAgICBwYWRkaW5nOiAxOHB4IDAgMTRweCAwO1xuICB9XG4gICYgaDF7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIG1heC13aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIHBhZGRpbmc6IDAgOHB4IDAgMTRweDtcbiAgfVxuXG4gICYgaDJ7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6ICMzNzM3Mzc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8qIG1pbi13aWR0aDogNjRweDtcbiAgICBtYXgtd2lkdGg6IDc4cHg7ICovXG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCAxMDAnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nOiAwcHggNnB4IDBweCA3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gICYgaDN7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCAzMDAnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogIzJDMkMyQztcbiAgICBtYXJnaW46IDhweCAwIDEycHggMTRweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBHcmlkID0gc3R5bGVkLmRpdmAgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMjIuNDRweDtcbiAgICBncmlkLXJvdy1nYXA6IDMxcHg7IFxuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlUHJpY2UgPSBzdHlsZWQuZGl2YCAgXG4gIGRpc3BsYXk6IGZsZXg7ICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzhweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YCAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwRjUyQkE7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOHB4IDhweDsgXG4gIHdpZHRoOiAyMThweDtcbiAgaGVpZ2h0OiAzMS45MXB4O1xuICBjdXJzb3I6cG9pbnRlcjtcblxuICAmIHN2Z3tcbiAgICBtYXJnaW46IDAgIDE0cHggMCA1N3B4O1xuICB9XG5cbiAgJiBwe1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCAzMDAnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjsgICAgXG4gIH1cbmA7XG5cblxuLy8gQ2hlY2tvdXQgc3R5bGVcblxuZXhwb3J0IGNvbnN0IENoZWNrT3V0Qm94ID0gc3R5bGVkLmRpdmAgICAgICAgICBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBGNTJCQTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDg2cHg7XG4gIGhlaWdodDogMTAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjMEY1MkJBO1xuICBib3gtc2hhZG93OiAtNXB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEzKTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbiBcbiAgJiBzdmd7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCb3hDYXJ0ID0gc3R5bGVkLmRpdmAgICAgICAgICBcbiAgcGFkZGluZzogMzZweCAyMnB4IDAgNDdweDsgXG5gO1xuXG5leHBvcnQgY29uc3QgRmxleCA9IHN0eWxlZC5kaXZgICAgICAgICAgXG4gZGlzcGxheTogZmxleDtcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hlY2tPdXRUaXRsZSA9IHN0eWxlZC5kaXZgICAgICAgICAgXG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCA2MDAnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICB3aWR0aDogMTgwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENoZWNrT3V0Q2FyZCA9IHN0eWxlZC5kaXZgICAgICAgICAgXG4gIGNvbG9yOiAjMkMyQzJDOyAgXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IC0ycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMzc5cHg7XG4gIGhlaWdodDogOTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja091dENhcmREZXRhaWxzID0gc3R5bGVkLmRpdmAgICAgICAgICBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTlweCAxMHB4IDE5cHggMjNweDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDMwMCcsIHNhbnMtc2VyaWY7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAmIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCAzMDAnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgd2lkdGg6IDExM3B4O1xuICAgIGhlaWdodDogMzNweDtcbiAgfVxuXG4gICYgaDR7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDYwMCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja091dENhcmRBbW91bnQgPSBzdHlsZWQuZGl2YCAgICAgICAgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBcbiAgJiBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cblxuICAmIGgze1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja091dEJ1dHRvbiA9IHN0eWxlZC5kaXZgICAgICBcbmJhY2tncm91bmQ6ICMwMDAwMDA7XG53aWR0aDogNDg2cHg7XG5oZWlnaHQ6IDk3cHg7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5ib3R0b206IDA7IFxuXG4mIGJ1dHRvbiB7XG4gIG1hcmdpbjogYXV0byAwOztcbn1cbmA7XG5cbi8vIEZvb3RlciBTdHlsZVxuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmAgICAgICAgICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgXG4gIGJhY2tncm91bmQ6ICNFRUVFRUU7XG4gIFxuICAmIHB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0IDMwMCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbmA7XG5cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJNYWluIiwiZGl2IiwiQm94IiwiTG9nbyIsIlRleHQiLCJDYXJ0Qm94IiwiQ2FyZCIsIkdyaWQiLCJUaXRsZVByaWNlIiwiQnV0dG9uIiwiQ2hlY2tPdXRCb3giLCJCb3hDYXJ0IiwiRmxleCIsIkNoZWNrT3V0VGl0bGUiLCJDaGVja091dENhcmQiLCJDaGVja091dENhcmREZXRhaWxzIiwiQ2hlY2tPdXRDYXJkQW1vdW50IiwiQ2hlY2tPdXRCdXR0b24iLCJGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/styles.js\n"));

/***/ })

});