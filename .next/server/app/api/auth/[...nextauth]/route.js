"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ccm%5CNexPhaz%20Dropbox%5CMEELKO%20CO%5CPersonal%5Cmdc%20cris%5CSummer%202025%5Ccapstone%5Ccapstone-main%5CMendez_Moreno%5CCristian_Moreno2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccm%5CNexPhaz%20Dropbox%5CMEELKO%20CO%5CPersonal%5Cmdc%20cris%5CSummer%202025%5Ccapstone%5Ccapstone-main%5CMendez_Moreno%5CCristian_Moreno2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ccm%5CNexPhaz%20Dropbox%5CMEELKO%20CO%5CPersonal%5Cmdc%20cris%5CSummer%202025%5Ccapstone%5Ccapstone-main%5CMendez_Moreno%5CCristian_Moreno2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccm%5CNexPhaz%20Dropbox%5CMEELKO%20CO%5CPersonal%5Cmdc%20cris%5CSummer%202025%5Ccapstone%5Ccapstone-main%5CMendez_Moreno%5CCristian_Moreno2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_cm_NexPhaz_Dropbox_MEELKO_CO_Personal_mdc_cris_Summer_2025_capstone_capstone_main_Mendez_Moreno_Cristian_Moreno2_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\cm\\\\NexPhaz Dropbox\\\\MEELKO CO\\\\Personal\\\\mdc cris\\\\Summer 2025\\\\capstone\\\\capstone-main\\\\Mendez_Moreno\\\\Cristian_Moreno2\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_cm_NexPhaz_Dropbox_MEELKO_CO_Personal_mdc_cris_Summer_2025_capstone_capstone_main_Mendez_Moreno_Cristian_Moreno2_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNjbSU1Q05leFBoYXolMjBEcm9wYm94JTVDTUVFTEtPJTIwQ08lNUNQZXJzb25hbCU1Q21kYyUyMGNyaXMlNUNTdW1tZXIlMjAyMDI1JTVDY2Fwc3RvbmUlNUNjYXBzdG9uZS1tYWluJTVDTWVuZGV6X01vcmVubyU1Q0NyaXN0aWFuX01vcmVubzIlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2NtJTVDTmV4UGhheiUyMERyb3Bib3glNUNNRUVMS08lMjBDTyU1Q1BlcnNvbmFsJTVDbWRjJTIwY3JpcyU1Q1N1bW1lciUyMDIwMjUlNUNjYXBzdG9uZSU1Q2NhcHN0b25lLW1haW4lNUNNZW5kZXpfTW9yZW5vJTVDQ3Jpc3RpYW5fTW9yZW5vMiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2SDtBQUMxTTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXAtZmFzdC1jb2RlLz8zNmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGNtXFxcXE5leFBoYXogRHJvcGJveFxcXFxNRUVMS08gQ09cXFxcUGVyc29uYWxcXFxcbWRjIGNyaXNcXFxcU3VtbWVyIDIwMjVcXFxcY2Fwc3RvbmVcXFxcY2Fwc3RvbmUtbWFpblxcXFxNZW5kZXpfTW9yZW5vXFxcXENyaXN0aWFuX01vcmVubzJcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcY21cXFxcTmV4UGhheiBEcm9wYm94XFxcXE1FRUxLTyBDT1xcXFxQZXJzb25hbFxcXFxtZGMgY3Jpc1xcXFxTdW1tZXIgMjAyNVxcXFxjYXBzdG9uZVxcXFxjYXBzdG9uZS1tYWluXFxcXE1lbmRlel9Nb3Jlbm9cXFxcQ3Jpc3RpYW5fTW9yZW5vMlxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ccm%5CNexPhaz%20Dropbox%5CMEELKO%20CO%5CPersonal%5Cmdc%20cris%5CSummer%202025%5Ccapstone%5Ccapstone-main%5CMendez_Moreno%5CCristian_Moreno2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccm%5CNexPhaz%20Dropbox%5CMEELKO%20CO%5CPersonal%5Cmdc%20cris%5CSummer%202025%5Ccapstone%5Ccapstone-main%5CMendez_Moreno%5CCristian_Moreno2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/next-auth */ \"(rsc)/./libs/next-auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_libs_next_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNjO0FBRS9DLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyx3REFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXAtZmFzdC1jb2RlLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWJzL25leHQtYXV0aFwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    // REQUIRED\n    appName: \"WarmCallAI\",\n    // REQUIRED: a short description of your app for SEO tags (can be overwritten)\n    appDescription: \"Turn every cold call into a warm conversation with AI-powered prospect intelligence that reveals personal insights in seconds.\",\n    // REQUIRED (no https://, not trailing slash at the end, just the naked domain)\n    domainName: \"warmcallai.com\",\n    crisp: {\n        // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (resend.supportEmail) otherwise customer support won't work.\n        id: \"\",\n        // Hide Crisp by default, except on route \"/\". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below\n        onlyShowOnRoutes: [\n            \"/\"\n        ]\n    },\n    stripe: {\n        // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId\n        plans: [\n            {\n                // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)\n                priceId:  true ? \"price_1Niyy5AxyNprDp7iZIqEyD2h\" : 0,\n                //  REQUIRED - Name of the plan, displayed on the pricing page\n                name: \"Free\",\n                // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others\n                description: \"Perfect for individual sales reps testing the waters\",\n                // The price you want to display, the one user will be charged on Stripe.\n                price: 0,\n                // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty\n                priceAnchor: 0,\n                features: [\n                    {\n                        name: \"5 queries per month\"\n                    },\n                    {\n                        name: \"Basic prospect intelligence\"\n                    },\n                    {\n                        name: \"Personal insights discovery\"\n                    },\n                    {\n                        name: \"Connection point identification\"\n                    },\n                    {\n                        name: \"Email support\"\n                    }\n                ]\n            },\n            {\n                priceId:  true ? \"price_1O5KtcAxyNprDp7iftKnrrpw\" : 0,\n                // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true\n                isFeatured: true,\n                name: \"Pro\",\n                description: \"Most popular for individual sales professionals\",\n                price: 12.99,\n                priceAnchor: 0,\n                features: [\n                    {\n                        name: \"50 queries per month\"\n                    },\n                    {\n                        name: \"Everything in Free\"\n                    },\n                    {\n                        name: \"Advanced AI insights\"\n                    },\n                    {\n                        name: \"Real-time prospect updates\"\n                    },\n                    {\n                        name: \"Integration with CRM\"\n                    },\n                    {\n                        name: \"Priority support\"\n                    },\n                    {\n                        name: \"Conversation starter suggestions\"\n                    }\n                ]\n            },\n            {\n                priceId:  true ? \"price_1O5KtcAxyNprDp7iftKnrrpw\" : 0,\n                name: \"Business\",\n                description: \"Perfect for sales teams and small businesses\",\n                price: 24.99,\n                priceAnchor: 0,\n                features: [\n                    {\n                        name: \"100 queries per month per user\"\n                    },\n                    {\n                        name: \"Everything in Pro\"\n                    },\n                    {\n                        name: \"Team collaboration tools\"\n                    },\n                    {\n                        name: \"Shared prospect database\"\n                    },\n                    {\n                        name: \"Team performance analytics\"\n                    },\n                    {\n                        name: \"Admin dashboard\"\n                    },\n                    {\n                        name: \"Bulk prospect research\"\n                    },\n                    {\n                        name: \"Custom integrations\"\n                    }\n                ]\n            },\n            {\n                priceId:  true ? \"price_1O5KtcAxyNprDp7iftKnrrpw\" : 0,\n                name: \"Enterprise\",\n                description: \"Custom solution for large sales organizations\",\n                price: 0,\n                priceAnchor: 0,\n                features: [\n                    {\n                        name: \"Unlimited queries\"\n                    },\n                    {\n                        name: \"Everything in Business\"\n                    },\n                    {\n                        name: \"Custom AI training\"\n                    },\n                    {\n                        name: \"Dedicated account manager\"\n                    },\n                    {\n                        name: \"Advanced security features\"\n                    },\n                    {\n                        name: \"Custom integrations\"\n                    },\n                    {\n                        name: \"SLA guarantees\"\n                    }\n                ]\n            }\n        ]\n    },\n    aws: {\n        // If you use AWS S3/Cloudfront, put values in here\n        bucket: \"bucket-name\",\n        bucketUrl: `https://bucket-name.s3.amazonaws.com/`,\n        cdn: \"https://cdn-id.cloudfront.net/\"\n    },\n    resend: {\n        // REQUIRED — Email 'From' field to be used when sending magic login links\n        fromNoReply: `WarmCallAI <noreply@resend.warmcallai.com>`,\n        // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..\n        fromAdmin: `WarmCallAI Team <team@resend.warmcallai.com>`,\n        // Email shown to customer if they need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support.\"\n        supportEmail: \"support@warmcallai.com\"\n    },\n    colors: {\n        // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you use any theme other than light/dark, you need to add it in config.tailwind.js in daisyui.themes.\n        theme: \"light\",\n        // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after \"data-theme=\")\n        // OR you can just do this to use a custom color: main: \"#f37055\". HEX only.\n        main: \"#1E40AF\"\n    },\n    auth: {\n        // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API\n        loginUrl: \"/api/auth/signin\",\n        // REQUIRED — the path you want to redirect users to after a successful login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js\n        callbackUrl: \"/dashboard\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKLGdLQUFnSztRQUNoS0MsVUFBVTtRQUNWLHNRQUFzUTtRQUN0UUMsYUFBYTtJQUNmO0FBQ0Y7QUFFQSxpRUFBZTlCLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlwLWZhc3QtY29kZS8uL2NvbmZpZy50cz8yNjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aGVtZXMgZnJvbSBcImRhaXN5dWkvc3JjL3RoZW1pbmcvdGhlbWVzXCI7XHJcbmltcG9ydCB7IENvbmZpZ1Byb3BzIH0gZnJvbSBcIi4vdHlwZXMvY29uZmlnXCI7XHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgLy8gUkVRVUlSRURcclxuICBhcHBOYW1lOiBcIldhcm1DYWxsQUlcIixcclxuICAvLyBSRVFVSVJFRDogYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB5b3VyIGFwcCBmb3IgU0VPIHRhZ3MgKGNhbiBiZSBvdmVyd3JpdHRlbilcclxuICBhcHBEZXNjcmlwdGlvbjpcclxuICAgIFwiVHVybiBldmVyeSBjb2xkIGNhbGwgaW50byBhIHdhcm0gY29udmVyc2F0aW9uIHdpdGggQUktcG93ZXJlZCBwcm9zcGVjdCBpbnRlbGxpZ2VuY2UgdGhhdCByZXZlYWxzIHBlcnNvbmFsIGluc2lnaHRzIGluIHNlY29uZHMuXCIsXHJcbiAgLy8gUkVRVUlSRUQgKG5vIGh0dHBzOi8vLCBub3QgdHJhaWxpbmcgc2xhc2ggYXQgdGhlIGVuZCwganVzdCB0aGUgbmFrZWQgZG9tYWluKVxyXG4gIGRvbWFpbk5hbWU6IFwid2FybWNhbGxhaS5jb21cIixcclxuICBjcmlzcDoge1xyXG4gICAgLy8gQ3Jpc3Agd2Vic2l0ZSBJRC4gSUYgWU9VIERPTidUIFVTRSBDUklTUDoganVzdCByZW1vdmUgdGhpcyA9PiBUaGVuIGFkZCBhIHN1cHBvcnQgZW1haWwgaW4gdGhpcyBjb25maWcgZmlsZSAocmVzZW5kLnN1cHBvcnRFbWFpbCkgb3RoZXJ3aXNlIGN1c3RvbWVyIHN1cHBvcnQgd29uJ3Qgd29yay5cclxuICAgIGlkOiBcIlwiLFxyXG4gICAgLy8gSGlkZSBDcmlzcCBieSBkZWZhdWx0LCBleGNlcHQgb24gcm91dGUgXCIvXCIuIENyaXNwIGlzIHRvZ2dsZWQgd2l0aCA8QnV0dG9uU3VwcG9ydC8+LiBJZiB5b3Ugd2FudCB0byBzaG93IENyaXNwIG9uIGV2ZXJ5IHJvdXRlcywganVzdCByZW1vdmUgdGhpcyBiZWxvd1xyXG4gICAgb25seVNob3dPblJvdXRlczogW1wiL1wiXSxcclxuICB9LFxyXG4gIHN0cmlwZToge1xyXG4gICAgLy8gQ3JlYXRlIG11bHRpcGxlIHBsYW5zIGluIHlvdXIgU3RyaXBlIGRhc2hib2FyZCwgdGhlbiBhZGQgdGhlbSBoZXJlLiBZb3UgY2FuIGFkZCBhcyBtYW55IHBsYW5zIGFzIHlvdSB3YW50LCBqdXN0IG1ha2Ugc3VyZSB0byBhZGQgdGhlIHByaWNlSWRcclxuICAgIHBsYW5zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAvLyBSRVFVSVJFRCDigJQgd2UgdXNlIHRoaXMgdG8gZmluZCB0aGUgcGxhbiBpbiB0aGUgd2ViaG9vayAoZm9yIGluc3RhbmNlIGlmIHlvdSB3YW50IHRvIHVwZGF0ZSB0aGUgdXNlcidzIGNyZWRpdHMgYmFzZWQgb24gdGhlIHBsYW4pXHJcbiAgICAgICAgcHJpY2VJZDpcclxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCJcclxuICAgICAgICAgICAgPyBcInByaWNlXzFOaXl5NUF4eU5wckRwN2laSXFFeUQyaFwiXHJcbiAgICAgICAgICAgIDogXCJwcmljZV80NTZcIixcclxuICAgICAgICAvLyAgUkVRVUlSRUQgLSBOYW1lIG9mIHRoZSBwbGFuLCBkaXNwbGF5ZWQgb24gdGhlIHByaWNpbmcgcGFnZVxyXG4gICAgICAgIG5hbWU6IFwiRnJlZVwiLFxyXG4gICAgICAgIC8vIEEgZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIHBsYW4sIGRpc3BsYXllZCBvbiB0aGUgcHJpY2luZyBwYWdlLiBUaXA6IGV4cGxhaW4gd2h5IHRoaXMgcGxhbiBhbmQgbm90IG90aGVyc1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlcmZlY3QgZm9yIGluZGl2aWR1YWwgc2FsZXMgcmVwcyB0ZXN0aW5nIHRoZSB3YXRlcnNcIixcclxuICAgICAgICAvLyBUaGUgcHJpY2UgeW91IHdhbnQgdG8gZGlzcGxheSwgdGhlIG9uZSB1c2VyIHdpbGwgYmUgY2hhcmdlZCBvbiBTdHJpcGUuXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgLy8gSWYgeW91IGhhdmUgYW4gYW5jaG9yIHByaWNlIChpLmUuICQyOSkgdGhhdCB5b3Ugd2FudCB0byBkaXNwbGF5IGNyb3NzZWQgb3V0LCBwdXQgaXQgaGVyZS4gT3RoZXJ3aXNlLCBsZWF2ZSBpdCBlbXB0eVxyXG4gICAgICAgIHByaWNlQW5jaG9yOiAwLFxyXG4gICAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiNSBxdWVyaWVzIHBlciBtb250aFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJCYXNpYyBwcm9zcGVjdCBpbnRlbGxpZ2VuY2VcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIlBlcnNvbmFsIGluc2lnaHRzIGRpc2NvdmVyeVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiQ29ubmVjdGlvbiBwb2ludCBpZGVudGlmaWNhdGlvblwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiRW1haWwgc3VwcG9ydFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByaWNlSWQ6XHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXHJcbiAgICAgICAgICAgID8gXCJwcmljZV8xTzVLdGNBeHlOcHJEcDdpZnRLbnJycHdcIlxyXG4gICAgICAgICAgICA6IFwicHJpY2VfNDU2XCIsXHJcbiAgICAgICAgLy8gVGhpcyBwbGFuIHdpbGwgbG9vayBkaWZmZXJlbnQgb24gdGhlIHByaWNpbmcgcGFnZSwgaXQgd2lsbCBiZSBoaWdobGlnaHRlZC4gWW91IGNhbiBvbmx5IGhhdmUgb25lIHBsYW4gd2l0aCBpc0ZlYXR1cmVkOiB0cnVlXHJcbiAgICAgICAgaXNGZWF0dXJlZDogdHJ1ZSxcclxuICAgICAgICBuYW1lOiBcIlByb1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vc3QgcG9wdWxhciBmb3IgaW5kaXZpZHVhbCBzYWxlcyBwcm9mZXNzaW9uYWxzXCIsXHJcbiAgICAgICAgcHJpY2U6IDEyLjk5LFxyXG4gICAgICAgIHByaWNlQW5jaG9yOiAwLFxyXG4gICAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiNTAgcXVlcmllcyBwZXIgbW9udGhcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiRXZlcnl0aGluZyBpbiBGcmVlXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJBZHZhbmNlZCBBSSBpbnNpZ2h0c1wiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiUmVhbC10aW1lIHByb3NwZWN0IHVwZGF0ZXNcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIkludGVncmF0aW9uIHdpdGggQ1JNXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJQcmlvcml0eSBzdXBwb3J0XCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJDb252ZXJzYXRpb24gc3RhcnRlciBzdWdnZXN0aW9uc1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByaWNlSWQ6XHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXHJcbiAgICAgICAgICAgID8gXCJwcmljZV8xTzVLdGNBeHlOcHJEcDdpZnRLbnJycHdcIlxyXG4gICAgICAgICAgICA6IFwicHJpY2VfNDU2XCIsXHJcbiAgICAgICAgbmFtZTogXCJCdXNpbmVzc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlBlcmZlY3QgZm9yIHNhbGVzIHRlYW1zIGFuZCBzbWFsbCBidXNpbmVzc2VzXCIsXHJcbiAgICAgICAgcHJpY2U6IDI0Ljk5LFxyXG4gICAgICAgIHByaWNlQW5jaG9yOiAwLFxyXG4gICAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiMTAwIHF1ZXJpZXMgcGVyIG1vbnRoIHBlciB1c2VyXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIkV2ZXJ5dGhpbmcgaW4gUHJvXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJUZWFtIGNvbGxhYm9yYXRpb24gdG9vbHNcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIlNoYXJlZCBwcm9zcGVjdCBkYXRhYmFzZVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiVGVhbSBwZXJmb3JtYW5jZSBhbmFseXRpY3NcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIkFkbWluIGRhc2hib2FyZFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiQnVsayBwcm9zcGVjdCByZXNlYXJjaFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiQ3VzdG9tIGludGVncmF0aW9uc1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByaWNlSWQ6XHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXHJcbiAgICAgICAgICAgID8gXCJwcmljZV8xTzVLdGNBeHlOcHJEcDdpZnRLbnJycHdcIlxyXG4gICAgICAgICAgICA6IFwicHJpY2VfNDU2XCIsXHJcbiAgICAgICAgbmFtZTogXCJFbnRlcnByaXNlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3VzdG9tIHNvbHV0aW9uIGZvciBsYXJnZSBzYWxlcyBvcmdhbml6YXRpb25zXCIsXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgcHJpY2VBbmNob3I6IDAsXHJcbiAgICAgICAgZmVhdHVyZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJVbmxpbWl0ZWQgcXVlcmllc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJFdmVyeXRoaW5nIGluIEJ1c2luZXNzXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJDdXN0b20gQUkgdHJhaW5pbmdcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIkRlZGljYXRlZCBhY2NvdW50IG1hbmFnZXJcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIkFkdmFuY2VkIHNlY3VyaXR5IGZlYXR1cmVzXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJDdXN0b20gaW50ZWdyYXRpb25zXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJTTEEgZ3VhcmFudGVlc1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICBhd3M6IHtcclxuICAgIC8vIElmIHlvdSB1c2UgQVdTIFMzL0Nsb3VkZnJvbnQsIHB1dCB2YWx1ZXMgaW4gaGVyZVxyXG4gICAgYnVja2V0OiBcImJ1Y2tldC1uYW1lXCIsXHJcbiAgICBidWNrZXRVcmw6IGBodHRwczovL2J1Y2tldC1uYW1lLnMzLmFtYXpvbmF3cy5jb20vYCxcclxuICAgIGNkbjogXCJodHRwczovL2Nkbi1pZC5jbG91ZGZyb250Lm5ldC9cIixcclxuICB9LFxyXG4gIHJlc2VuZDoge1xyXG4gICAgLy8gUkVRVUlSRUQg4oCUIEVtYWlsICdGcm9tJyBmaWVsZCB0byBiZSB1c2VkIHdoZW4gc2VuZGluZyBtYWdpYyBsb2dpbiBsaW5rc1xyXG4gICAgZnJvbU5vUmVwbHk6IGBXYXJtQ2FsbEFJIDxub3JlcGx5QHJlc2VuZC53YXJtY2FsbGFpLmNvbT5gLFxyXG4gICAgLy8gUkVRVUlSRUQg4oCUIEVtYWlsICdGcm9tJyBmaWVsZCB0byBiZSB1c2VkIHdoZW4gc2VuZGluZyBvdGhlciBlbWFpbHMsIGxpa2UgYWJhbmRvbmVkIGNhcnRzLCB1cGRhdGVzIGV0Yy4uXHJcbiAgICBmcm9tQWRtaW46IGBXYXJtQ2FsbEFJIFRlYW0gPHRlYW1AcmVzZW5kLndhcm1jYWxsYWkuY29tPmAsXHJcbiAgICAvLyBFbWFpbCBzaG93biB0byBjdXN0b21lciBpZiB0aGV5IG5lZWQgc3VwcG9ydC4gTGVhdmUgZW1wdHkgaWYgbm90IG5lZWRlZCA9PiBpZiBlbXB0eSwgc2V0IHVwIENyaXNwIGFib3ZlLCBvdGhlcndpc2UgeW91IHdvbid0IGJlIGFibGUgdG8gb2ZmZXIgY3VzdG9tZXIgc3VwcG9ydC5cIlxyXG4gICAgc3VwcG9ydEVtYWlsOiBcInN1cHBvcnRAd2FybWNhbGxhaS5jb21cIixcclxuICB9LFxyXG4gIGNvbG9yczoge1xyXG4gICAgLy8gUkVRVUlSRUQg4oCUIFRoZSBEYWlzeVVJIHRoZW1lIHRvIHVzZSAoYWRkZWQgdG8gdGhlIG1haW4gbGF5b3V0LmpzKS4gTGVhdmUgYmxhbmsgZm9yIGRlZmF1bHQgKGxpZ2h0ICYgZGFyayBtb2RlKS4gSWYgeW91IHVzZSBhbnkgdGhlbWUgb3RoZXIgdGhhbiBsaWdodC9kYXJrLCB5b3UgbmVlZCB0byBhZGQgaXQgaW4gY29uZmlnLnRhaWx3aW5kLmpzIGluIGRhaXN5dWkudGhlbWVzLlxyXG4gICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgIC8vIFJFUVVJUkVEIOKAlCBUaGlzIGNvbG9yIHdpbGwgYmUgcmVmbGVjdGVkIG9uIHRoZSB3aG9sZSBhcHAgb3V0c2lkZSBvZiB0aGUgZG9jdW1lbnQgKGxvYWRpbmcgYmFyLCBDaHJvbWUgdGFicywgZXRjLi4pLiBCeSBkZWZhdWx0IGl0IHRha2VzIHRoZSBwcmltYXJ5IGNvbG9yIGZyb20geW91ciBEYWlzeVVJIHRoZW1lIChtYWtlIHN1cmUgdG8gdXBkYXRlIHlvdXIgdGhlIHRoZW1lIG5hbWUgYWZ0ZXIgXCJkYXRhLXRoZW1lPVwiKVxyXG4gICAgLy8gT1IgeW91IGNhbiBqdXN0IGRvIHRoaXMgdG8gdXNlIGEgY3VzdG9tIGNvbG9yOiBtYWluOiBcIiNmMzcwNTVcIi4gSEVYIG9ubHkuXHJcbiAgICBtYWluOiBcIiMxRTQwQUZcIiwgLy8gRGVlcCBCbHVlIGZvciB0cnVzdCBhbmQgcHJvZmVzc2lvbmFsaXNtXHJcbiAgfSxcclxuICBhdXRoOiB7XHJcbiAgICAvLyBSRVFVSVJFRCDigJQgdGhlIHBhdGggdG8gbG9nIGluIHVzZXJzLiBJdCdzIHVzZSB0byBwcm90ZWN0IHByaXZhdGUgcm91dGVzIChsaWtlIC9kYXNoYm9hcmQpLiBJdCdzIHVzZWQgaW4gYXBpQ2xpZW50ICgvbGlicy9hcGkuanMpIHVwb24gNDAxIGVycm9ycyBmcm9tIG91ciBBUElcclxuICAgIGxvZ2luVXJsOiBcIi9hcGkvYXV0aC9zaWduaW5cIixcclxuICAgIC8vIFJFUVVJUkVEIOKAlCB0aGUgcGF0aCB5b3Ugd2FudCB0byByZWRpcmVjdCB1c2VycyB0byBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9naW4gKGkuZS4gL2Rhc2hib2FyZCwgL3ByaXZhdGUpLiBUaGlzIGlzIG5vcm1hbGx5IGEgcHJpdmF0ZSBwYWdlIGZvciB1c2VycyB0byBtYW5hZ2UgdGhlaXIgYWNjb3VudHMuIEl0J3MgdXNlZCBpbiBhcGlDbGllbnQgKC9saWJzL2FwaS5qcykgdXBvbiA0MDEgZXJyb3JzIGZyb20gb3VyIEFQSSAmIGluIEJ1dHRvblNpZ25pbi5qc1xyXG4gICAgY2FsbGJhY2tVcmw6IFwiL2Rhc2hib2FyZFwiLFxyXG4gIH0sXHJcbn0gYXMgQ29uZmlnUHJvcHM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiJdLCJuYW1lcyI6WyJjb25maWciLCJhcHBOYW1lIiwiYXBwRGVzY3JpcHRpb24iLCJkb21haW5OYW1lIiwiY3Jpc3AiLCJpZCIsIm9ubHlTaG93T25Sb3V0ZXMiLCJzdHJpcGUiLCJwbGFucyIsInByaWNlSWQiLCJwcm9jZXNzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwcmljZUFuY2hvciIsImZlYXR1cmVzIiwiaXNGZWF0dXJlZCIsImF3cyIsImJ1Y2tldCIsImJ1Y2tldFVybCIsImNkbiIsInJlc2VuZCIsImZyb21Ob1JlcGx5IiwiZnJvbUFkbWluIiwic3VwcG9ydEVtYWlsIiwiY29sb3JzIiwidGhlbWUiLCJtYWluIiwiYXV0aCIsImxvZ2luVXJsIiwiY2FsbGJhY2tVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./config.ts\n");

/***/ }),

/***/ "(rsc)/./libs/mongo.ts":
/*!***********************!*\
  !*** ./libs/mongo.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!uri) {\n    console.group(\"⚠️ MONGODB_URI missing from .env\");\n    console.error(\"It's not mandatory but a database is required for Magic Links.\");\n    console.error(\"If you don't need it, remove the code from /libs/next-auth.js (see connectMongo())\");\n    console.groupEnd();\n} else if (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQVd0QyxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNOLEtBQUs7SUFDUk8sUUFBUUMsS0FBSyxDQUFDO0lBQ2RELFFBQVFFLEtBQUssQ0FDWDtJQUVGRixRQUFRRSxLQUFLLENBQ1g7SUFFRkYsUUFBUUcsUUFBUTtBQUNsQixPQUFPLElBQUlULElBQXNDLEVBQUU7SUFDakQsSUFBSSxDQUFDVSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQlAsU0FBUyxJQUFJTixnREFBV0EsQ0FBQ0MsS0FBS0k7UUFDOUJPLE9BQU9DLG1CQUFtQixHQUFHUCxPQUFPUSxPQUFPO0lBQzdDO0lBQ0FQLGdCQUFnQkssT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFHTjtBQUVELGlFQUFlTixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcC1mYXN0LWNvZGUvLi9saWJzL21vbmdvLnRzPzczMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy8gVGhpcyBsaWIgaXMgdXNlIGp1c3QgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2UgaW4gbmV4dC1hdXRoLlxyXG4vLyBXZSBkb24ndCB1c2UgaXQgYW55d2hlcmUgZWxzZSBpbiB0aGUgQVBJIHJvdXRlc+KAlHdlIHVzZSBtb25nb29zZS5qcyBpbnN0ZWFkICh0byBiZSBhYmxlIHRvIHVzZSBtb2RlbHMpXHJcbi8vIFNlZSAvbGlicy9uZXh0YXV0aC5qcyBmaWxlLlxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG4gIHZhciBfbW9uZ29DbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PiB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbmNvbnN0IG9wdGlvbnMgPSB7fTtcclxuXHJcbmxldCBjbGllbnQ6IE1vbmdvQ2xpZW50IHwgdW5kZWZpbmVkO1xyXG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD4gfCB1bmRlZmluZWQ7XHJcblxyXG5pZiAoIXVyaSkge1xyXG4gIGNvbnNvbGUuZ3JvdXAoXCLimqDvuI8gTU9OR09EQl9VUkkgbWlzc2luZyBmcm9tIC5lbnZcIik7XHJcbiAgY29uc29sZS5lcnJvcihcclxuICAgIFwiSXQncyBub3QgbWFuZGF0b3J5IGJ1dCBhIGRhdGFiYXNlIGlzIHJlcXVpcmVkIGZvciBNYWdpYyBMaW5rcy5cIlxyXG4gICk7XHJcbiAgY29uc29sZS5lcnJvcihcclxuICAgIFwiSWYgeW91IGRvbid0IG5lZWQgaXQsIHJlbW92ZSB0aGUgY29kZSBmcm9tIC9saWJzL25leHQtYXV0aC5qcyAoc2VlIGNvbm5lY3RNb25nbygpKVwiXHJcbiAgKTtcclxuICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiY29uc29sZSIsImdyb3VwIiwiZXJyb3IiLCJncm91cEVuZCIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongo.ts\n");

/***/ }),

/***/ "(rsc)/./libs/next-auth.ts":
/*!***************************!*\
  !*** ./libs/next-auth.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/email */ \"(rsc)/./node_modules/next-auth/providers/email.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config */ \"(rsc)/./config.ts\");\n/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mongo */ \"(rsc)/./libs/mongo.ts\");\n\n\n\n\n\n\nconst authOptions = {\n    // Set any random key in .env.local\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            // Follow the \"Login with Google\" tutorial to get your credentials\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            async profile (profile) {\n                return {\n                    id: profile.sub,\n                    name: profile.given_name ? profile.given_name : profile.name,\n                    email: profile.email,\n                    image: profile.picture,\n                    createdAt: new Date()\n                };\n            }\n        }),\n        // Follow the \"Login with Email\" tutorial to set up your email server\n        // Requires a MongoDB database. Set MONOGODB_URI env variable.\n        ..._mongo__WEBPACK_IMPORTED_MODULE_5__[\"default\"] ? [\n            (0,next_auth_providers_email__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                server: {\n                    host: \"smtp.resend.com\",\n                    port: 465,\n                    auth: {\n                        user: \"resend\",\n                        pass: process.env.RESEND_API_KEY\n                    }\n                },\n                from: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].resend.fromNoReply\n            })\n        ] : []\n    ],\n    // New users will be saved in Database (MongoDB Atlas). Each user (model) has some fields like name, email, image, etc..\n    // Requires a MongoDB database. Set MONOGODB_URI env variable.\n    // Learn more about the model type: https://next-auth.js.org/v3/adapters/models\n    ..._mongo__WEBPACK_IMPORTED_MODULE_5__[\"default\"] && {\n        adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_3__.MongoDBAdapter)(_mongo__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n    },\n    callbacks: {\n        session: async ({ session, token })=>{\n            if (session?.user) {\n                session.user.id = token.sub;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    theme: {\n        brandColor: _config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].colors.main,\n        // Add you own logo below. Recommended size is rectangle (i.e. 200x50px) and show your logo + name.\n        // It will be used in the login flow to display your logo. If you don't add it, it will look faded.\n        logo: `/icon.png`\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL25leHQtYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFFdUI7QUFDRjtBQUNDO0FBQ3pCO0FBQ0s7QUFNNUIsTUFBTU0sY0FBdUM7SUFDbEQsbUNBQW1DO0lBQ25DQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLFdBQVc7UUFDVFYsc0VBQWNBLENBQUM7WUFDYixrRUFBa0U7WUFDbEVXLFVBQVVKLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkMsY0FBY04sUUFBUUMsR0FBRyxDQUFDTSxhQUFhO1lBQ3ZDLE1BQU1DLFNBQVFBLE9BQU87Z0JBQ25CLE9BQU87b0JBQ0xDLElBQUlELFFBQVFFLEdBQUc7b0JBQ2ZDLE1BQU1ILFFBQVFJLFVBQVUsR0FBR0osUUFBUUksVUFBVSxHQUFHSixRQUFRRyxJQUFJO29CQUM1REUsT0FBT0wsUUFBUUssS0FBSztvQkFDcEJDLE9BQU9OLFFBQVFPLE9BQU87b0JBQ3RCQyxXQUFXLElBQUlDO2dCQUNqQjtZQUNGO1FBQ0Y7UUFDQSxxRUFBcUU7UUFDckUsOERBQThEO1dBQzFEcEIsOENBQVlBLEdBQ1o7WUFDRUgscUVBQWFBLENBQUM7Z0JBQ1p3QixRQUFRO29CQUNOQyxNQUFNO29CQUNOQyxNQUFNO29CQUNOQyxNQUFNO3dCQUNKQyxNQUFNO3dCQUNOQyxNQUFNdkIsUUFBUUMsR0FBRyxDQUFDdUIsY0FBYztvQkFDbEM7Z0JBQ0Y7Z0JBQ0FDLE1BQU03QiwrQ0FBTUEsQ0FBQzhCLE1BQU0sQ0FBQ0MsV0FBVztZQUNqQztTQUNELEdBQ0QsRUFBRTtLQUNQO0lBQ0Qsd0hBQXdIO0lBQ3hILDhEQUE4RDtJQUM5RCwrRUFBK0U7SUFDL0UsR0FBSTlCLDhDQUFZQSxJQUFJO1FBQUUrQixTQUFTakMscUVBQWNBLENBQUNFLDhDQUFZQTtJQUFFLENBQUM7SUFFN0RnQyxXQUFXO1FBQ1RDLFNBQVMsT0FBTyxFQUFFQSxPQUFPLEVBQUVDLEtBQUssRUFBRTtZQUNoQyxJQUFJRCxTQUFTUixNQUFNO2dCQUNqQlEsUUFBUVIsSUFBSSxDQUFDYixFQUFFLEdBQUdzQixNQUFNckIsR0FBRztZQUM3QjtZQUNBLE9BQU9vQjtRQUNUO0lBQ0Y7SUFDQUEsU0FBUztRQUNQRSxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMQyxZQUFZdEMsK0NBQU1BLENBQUN1QyxNQUFNLENBQUNDLElBQUk7UUFDOUIsbUdBQW1HO1FBQ25HLG1HQUFtRztRQUNuR0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNuQjtBQUNGLEVBQUU7QUFFRixpRUFBZTdDLGdEQUFRQSxDQUFDTSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcC1mYXN0LWNvZGUvLi9saWJzL25leHQtYXV0aC50cz80M2EzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCI7XHJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSBcIkBhdXRoL21vbmdvZGItYWRhcHRlclwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCJAL2NvbmZpZ1wiO1xyXG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuL21vbmdvXCI7XHJcblxyXG5pbnRlcmZhY2UgTmV4dEF1dGhPcHRpb25zRXh0ZW5kZWQgZXh0ZW5kcyBOZXh0QXV0aE9wdGlvbnMge1xyXG4gIGFkYXB0ZXI6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnNFeHRlbmRlZCA9IHtcclxuICAvLyBTZXQgYW55IHJhbmRvbSBrZXkgaW4gLmVudi5sb2NhbFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICAvLyBGb2xsb3cgdGhlIFwiTG9naW4gd2l0aCBHb29nbGVcIiB0dXRvcmlhbCB0byBnZXQgeW91ciBjcmVkZW50aWFsc1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXHJcbiAgICAgIGFzeW5jIHByb2ZpbGUocHJvZmlsZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpZDogcHJvZmlsZS5zdWIsXHJcbiAgICAgICAgICBuYW1lOiBwcm9maWxlLmdpdmVuX25hbWUgPyBwcm9maWxlLmdpdmVuX25hbWUgOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcclxuICAgICAgICAgIGltYWdlOiBwcm9maWxlLnBpY3R1cmUsXHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgLy8gRm9sbG93IHRoZSBcIkxvZ2luIHdpdGggRW1haWxcIiB0dXRvcmlhbCB0byBzZXQgdXAgeW91ciBlbWFpbCBzZXJ2ZXJcclxuICAgIC8vIFJlcXVpcmVzIGEgTW9uZ29EQiBkYXRhYmFzZS4gU2V0IE1PTk9HT0RCX1VSSSBlbnYgdmFyaWFibGUuXHJcbiAgICAuLi4oY29ubmVjdE1vbmdvXHJcbiAgICAgID8gW1xyXG4gICAgICAgICAgRW1haWxQcm92aWRlcih7XHJcbiAgICAgICAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgICAgICAgIGhvc3Q6IFwic210cC5yZXNlbmQuY29tXCIsXHJcbiAgICAgICAgICAgICAgcG9ydDogNDY1LFxyXG4gICAgICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IFwicmVzZW5kXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzOiBwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmcm9tOiBjb25maWcucmVzZW5kLmZyb21Ob1JlcGx5LFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgXVxyXG4gICAgICA6IFtdKSxcclxuICBdLFxyXG4gIC8vIE5ldyB1c2VycyB3aWxsIGJlIHNhdmVkIGluIERhdGFiYXNlIChNb25nb0RCIEF0bGFzKS4gRWFjaCB1c2VyIChtb2RlbCkgaGFzIHNvbWUgZmllbGRzIGxpa2UgbmFtZSwgZW1haWwsIGltYWdlLCBldGMuLlxyXG4gIC8vIFJlcXVpcmVzIGEgTW9uZ29EQiBkYXRhYmFzZS4gU2V0IE1PTk9HT0RCX1VSSSBlbnYgdmFyaWFibGUuXHJcbiAgLy8gTGVhcm4gbW9yZSBhYm91dCB0aGUgbW9kZWwgdHlwZTogaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3YzL2FkYXB0ZXJzL21vZGVsc1xyXG4gIC4uLihjb25uZWN0TW9uZ28gJiYgeyBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjb25uZWN0TW9uZ28pIH0pLFxyXG5cclxuICBjYWxsYmFja3M6IHtcclxuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcclxuICAgICAgaWYgKHNlc3Npb24/LnVzZXIpIHtcclxuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5zdWI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2Vzc2lvbjoge1xyXG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXHJcbiAgfSxcclxuICB0aGVtZToge1xyXG4gICAgYnJhbmRDb2xvcjogY29uZmlnLmNvbG9ycy5tYWluLFxyXG4gICAgLy8gQWRkIHlvdSBvd24gbG9nbyBiZWxvdy4gUmVjb21tZW5kZWQgc2l6ZSBpcyByZWN0YW5nbGUgKGkuZS4gMjAweDUwcHgpIGFuZCBzaG93IHlvdXIgbG9nbyArIG5hbWUuXHJcbiAgICAvLyBJdCB3aWxsIGJlIHVzZWQgaW4gdGhlIGxvZ2luIGZsb3cgdG8gZGlzcGxheSB5b3VyIGxvZ28uIElmIHlvdSBkb24ndCBhZGQgaXQsIGl0IHdpbGwgbG9vayBmYWRlZC5cclxuICAgIGxvZ286IGAvaWNvbi5wbmdgLCAvLyBVc2luZyB0aGUgaWNvbiBmcm9tIHRoZSBhcHAgcm9vdFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiRW1haWxQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY29uZmlnIiwiY29ubmVjdE1vbmdvIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfU0VDUkVUIiwicHJvZmlsZSIsImlkIiwic3ViIiwibmFtZSIsImdpdmVuX25hbWUiLCJlbWFpbCIsImltYWdlIiwicGljdHVyZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJzZXJ2ZXIiLCJob3N0IiwicG9ydCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsIlJFU0VORF9BUElfS0VZIiwiZnJvbSIsInJlc2VuZCIsImZyb21Ob1JlcGx5IiwiYWRhcHRlciIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInN0cmF0ZWd5IiwidGhlbWUiLCJicmFuZENvbG9yIiwiY29sb3JzIiwibWFpbiIsImxvZ28iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./libs/next-auth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/nodemailer","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@auth","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Ccm%5CNexPhaz%20Dropbox%5CMEELKO%20CO%5CPersonal%5Cmdc%20cris%5CSummer%202025%5Ccapstone%5Ccapstone-main%5CMendez_Moreno%5CCristian_Moreno2%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccm%5CNexPhaz%20Dropbox%5CMEELKO%20CO%5CPersonal%5Cmdc%20cris%5CSummer%202025%5Ccapstone%5Ccapstone-main%5CMendez_Moreno%5CCristian_Moreno2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();