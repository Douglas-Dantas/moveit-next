webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css":
/*!****************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./src/styles/components/Countdown.module.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Countdown_CountdownContainer__2EVoX {\\n    display: flex;\\n    align-items: center;\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n}\\n\\n.Countdown_CountdownContainer__2EVoX > div {\\n    flex: 1 1;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n\\n    background-color: var(--white);\\n    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n    border-radius: 5px;\\n    font-size: 8.5rem;\\n    text-align: center;\\n}\\n\\n.Countdown_CountdownContainer__2EVoX > div span {\\n    flex: 1 1\\n}\\n\\n.Countdown_CountdownContainer__2EVoX > div span:first-child {\\n    border-right: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_CountdownContainer__2EVoX > div span:last-child {\\n    border-right: 1px solid #f0f1f3;\\n}\\n\\n.Countdown_CountdownContainer__2EVoX > span {\\n    font-size:  6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.Countdown_countdownButton__2cSHU {\\n    width:  100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n\\n    background: var(--blue);\\n    color: var(--white);\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n\\n    transition:  background-color 0.2s;\\n}\\n\\n.Countdown_countdownButton__2cSHU:not(:disabled):hover {\\n    background: var(--blue-dark);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc {\\n    background: var(--white);\\n    color: var(--title);\\n}\\n\\n.Countdown_countdownButtonActive__37GOc:not(:disabled):hover {\\n    background: var(--red);\\n    color: var(--white);\\n}\\n\\n.Countdown_countdownButton__2cSHU:disabled {\\n    background: var(--white);\\n    color: var(--text);\\n    cursor: not-allowed;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/components/Countdown.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,SAAO;;IAEP,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,8BAA8B;IAC9B,wCAAwC;IACxC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI;AACJ;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;;IAEZ,gBAAgB;;IAEhB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,SAAS;IACT,kBAAkB;;IAElB,uBAAuB;IACvB,mBAAmB;;IAEnB,kBAAkB;IAClB,gBAAgB;;IAEhB,kCAAkC;AACtC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,mBAAmB;AACvB\",\"sourcesContent\":[\".CountdownContainer {\\n    display: flex;\\n    align-items: center;\\n    font-family: Rajdhani;\\n    font-weight: 600;\\n    color: var(--title);\\n}\\n\\n.CountdownContainer > div {\\n    flex: 1;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-evenly;\\n\\n    background-color: var(--white);\\n    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);\\n    border-radius: 5px;\\n    font-size: 8.5rem;\\n    text-align: center;\\n}\\n\\n.CountdownContainer > div span {\\n    flex: 1\\n}\\n\\n.CountdownContainer > div span:first-child {\\n    border-right: 1px solid #f0f1f3;\\n}\\n\\n.CountdownContainer > div span:last-child {\\n    border-right: 1px solid #f0f1f3;\\n}\\n\\n.CountdownContainer > span {\\n    font-size:  6.25rem;\\n    margin: 0 0.5rem;\\n}\\n\\n.countdownButton {\\n    width:  100%;\\n    height: 5rem;\\n\\n    margin-top: 2rem;\\n\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\\n    border: 0;\\n    border-radius: 5px;\\n\\n    background: var(--blue);\\n    color: var(--white);\\n\\n    font-size: 1.25rem;\\n    font-weight: 600;\\n\\n    transition:  background-color 0.2s;\\n}\\n\\n.countdownButton:not(:disabled):hover {\\n    background: var(--blue-dark);\\n}\\n\\n.countdownButtonActive {\\n    background: var(--white);\\n    color: var(--title);\\n}\\n\\n.countdownButtonActive:not(:disabled):hover {\\n    background: var(--red);\\n    color: var(--white);\\n}\\n\\n.countdownButton:disabled {\\n    background: var(--white);\\n    color: var(--text);\\n    cursor: not-allowed;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"CountdownContainer\": \"Countdown_CountdownContainer__2EVoX\",\n\t\"countdownButton\": \"Countdown_countdownButton__2cSHU\",\n\t\"countdownButtonActive\": \"Countdown_countdownButtonActive__37GOc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzPzQyZTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNEQ7QUFDdEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHlDQUF5QyxvQkFBb0IsMEJBQTBCLDRCQUE0Qix1QkFBdUIsMEJBQTBCLEdBQUcsZ0RBQWdELGdCQUFnQixzQkFBc0IsMEJBQTBCLG9DQUFvQyx1Q0FBdUMsK0NBQStDLHlCQUF5Qix3QkFBd0IseUJBQXlCLEdBQUcscURBQXFELGtCQUFrQixpRUFBaUUsc0NBQXNDLEdBQUcsZ0VBQWdFLHNDQUFzQyxHQUFHLGlEQUFpRCwwQkFBMEIsdUJBQXVCLEdBQUcsdUNBQXVDLG1CQUFtQixtQkFBbUIseUJBQXlCLHNCQUFzQiwwQkFBMEIsOEJBQThCLGtCQUFrQix5QkFBeUIsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsdUJBQXVCLDJDQUEyQyxHQUFHLDREQUE0RCxtQ0FBbUMsR0FBRyw2Q0FBNkMsK0JBQStCLDBCQUEwQixHQUFHLGtFQUFrRSw2QkFBNkIsMEJBQTBCLEdBQUcsZ0RBQWdELCtCQUErQix5QkFBeUIsMEJBQTBCLEdBQUcsT0FBTywyR0FBMkcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsK0NBQStDLG9CQUFvQiwwQkFBMEIsNEJBQTRCLHVCQUF1QiwwQkFBMEIsR0FBRywrQkFBK0IsY0FBYyxzQkFBc0IsMEJBQTBCLG9DQUFvQyx1Q0FBdUMsK0NBQStDLHlCQUF5Qix3QkFBd0IseUJBQXlCLEdBQUcsb0NBQW9DLGdCQUFnQixnREFBZ0Qsc0NBQXNDLEdBQUcsK0NBQStDLHNDQUFzQyxHQUFHLGdDQUFnQywwQkFBMEIsdUJBQXVCLEdBQUcsc0JBQXNCLG1CQUFtQixtQkFBbUIseUJBQXlCLHNCQUFzQiwwQkFBMEIsOEJBQThCLGtCQUFrQix5QkFBeUIsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsdUJBQXVCLDJDQUEyQyxHQUFHLDJDQUEyQyxtQ0FBbUMsR0FBRyw0QkFBNEIsK0JBQStCLDBCQUEwQixHQUFHLGlEQUFpRCw2QkFBNkIsMEJBQTBCLEdBQUcsK0JBQStCLCtCQUErQix5QkFBeUIsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQ3g2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvdW50ZG93bl9Db3VudGRvd25Db250YWluZXJfXzJFVm9YIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnRkb3duX0NvdW50ZG93bkNvbnRhaW5lcl9fMkVWb1ggPiBkaXYge1xcbiAgICBmbGV4OiAxIDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4LjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkNvdW50ZG93bl9Db3VudGRvd25Db250YWluZXJfXzJFVm9YID4gZGl2IHNwYW4ge1xcbiAgICBmbGV4OiAxIDFcXG59XFxuXFxuLkNvdW50ZG93bl9Db3VudGRvd25Db250YWluZXJfXzJFVm9YID4gZGl2IHNwYW46Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjBmMWYzO1xcbn1cXG5cXG4uQ291bnRkb3duX0NvdW50ZG93bkNvbnRhaW5lcl9fMkVWb1ggPiBkaXYgc3BhbjpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLkNvdW50ZG93bl9Db3VudGRvd25Db250YWluZXJfXzJFVm9YID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogIDYuMjVyZW07XFxuICAgIG1hcmdpbjogMCAwLjVyZW07XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVSB7XFxuICAgIHdpZHRoOiAgMTAwJTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFxuICAgIHRyYW5zaXRpb246ICBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uX18yY1NIVTpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5Db3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPYyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25BY3RpdmVfXzM3R09jOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBTzs7SUFFUCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2Qjs7SUFFN0IsOEJBQThCO0lBQzlCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7O0lBRVosZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsU0FBUztJQUNULGtCQUFrQjs7SUFFbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjs7SUFFaEIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQ291bnRkb3duQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFJhamRoYW5pO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUpO1xcbn1cXG5cXG4uQ291bnRkb3duQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDguNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uQ291bnRkb3duQ29udGFpbmVyID4gZGl2IHNwYW4ge1xcbiAgICBmbGV4OiAxXFxufVxcblxcbi5Db3VudGRvd25Db250YWluZXIgPiBkaXYgc3BhbjpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmMGYxZjM7XFxufVxcblxcbi5Db3VudGRvd25Db250YWluZXIgPiBkaXYgc3BhbjpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YwZjFmMztcXG59XFxuXFxuLkNvdW50ZG93bkNvbnRhaW5lciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6ICA2LjI1cmVtO1xcbiAgICBtYXJnaW46IDAgMC41cmVtO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uIHtcXG4gICAgd2lkdGg6ICAxMDAlO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG5cXG4gICAgdHJhbnNpdGlvbjogIGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLmNvdW50ZG93bkJ1dHRvbjpub3QoOmRpc2FibGVkKTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtZGFyayk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZSk7XFxufVxcblxcbi5jb3VudGRvd25CdXR0b25BY3RpdmU6bm90KDpkaXNhYmxlZCk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uY291bnRkb3duQnV0dG9uOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkNvdW50ZG93bkNvbnRhaW5lclwiOiBcIkNvdW50ZG93bl9Db3VudGRvd25Db250YWluZXJfXzJFVm9YXCIsXG5cdFwiY291bnRkb3duQnV0dG9uXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbl9fMmNTSFVcIixcblx0XCJjb3VudGRvd25CdXR0b25BY3RpdmVcIjogXCJDb3VudGRvd25fY291bnRkb3duQnV0dG9uQWN0aXZlX18zN0dPY1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./src/styles/components/Countdown.module.css\n");

/***/ })

})