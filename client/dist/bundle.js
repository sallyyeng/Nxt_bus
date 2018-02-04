/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./client/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 389);
/******/ })
/************************************************************************/
/******/ ({

/***/ 389:
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// import ReactDOM from 'react-dom';\n// import React, { Component } from 'react'\n// import { Grid, Divider } from 'semantic-ui-react'\n// import axios from 'axios'\n\n// import VerticalBar from './components/vertical_bar.jsx'\n// import Predictions from './components/predictions.jsx'\n// import SearchPanes from './components/search_panes.jsx'\n\n// class App extends Component {\n//   constructor(props) {\n//     super(props);\n\n//     this.state = {\n//       predictions: [],\n//       direction: '',\n//       busSelection: '',\n//       busStop: ''\n//     }\n//   }\n\n//   setPredictions = (predictions) => {\n//     this.setState({\n//       predictions: predictions\n//     })\n//   }\n\n//   // destructure when you can\n//   updateLabelsOnPastSearch = (e, { value }) => {\n//     let inputs = value.split(',')\n//     this.setState({\n//       busSelection: inputs[0],\n//       busStopId: inputs[1],\n//       busStop: inputs[2],\n//       direction: inputs[3]\n//     }, this.getPredictions(inputs[0], inputs[1]))\n//   }\n\n//   getPredictions = (busSelection, busStopId, busStop, direction, name) => {\n//     axios.get('/predictions', {\n//       params: {\n//         name: name,\n//         busSelection: busSelection,\n//         busStopId: busStopId,\n//         busStop: busStop,\n//         direction: direction,\n//       }\n//     })\n//     .then((res) => {\n//       this.setPredictions(res.data.slice(0,3))\n//     })\n//     .catch((error) => {\n//       console.error('unsuccessful getPredictions req: ', error);\n//     });\n//   }\n\n//   setDirectionLabel = (direction) => this.setState({ direction: direction });\n//   setBusLabel = (busSelection) => this.setState({ busSelection: busSelection });\n//   setStopLabel = (busStop) => this.setState({ busStop: busStop });\n\n//   render() {\n//     const style = {\n//       verticalBar: {\n//         display: 'flex',\n//         alignItems: 'center',\n//         justifyContent: 'center',\n//         height: '900px'\n//       }\n//     }\n\n//     const { predictions, direction, busSelection, busStop } = this.state;\n\n//     return (\n//       <Grid padded='vertically'>\n//           <Grid.Column style={style.verticalBar} color='grey' width={4} textAlign='right'>\n//             <VerticalBar />\n//           </Grid.Column>\n\n//           <Grid.Column width={8}>\n//             <Predictions\n//               predictions={predictions}\n//               direction={direction}\n//               busSelection={busSelection}\n//               busStop={busStop}\n//             />\n//             { predictions.length > 0 ? ( <Divider /> ) : null }\n//             <SearchPanes\n//               getPredictions={this.getPredictions}\n//               setDirectionLabel={this.setDirectionLabel}\n//               setBusLabel={this.setBusLabel}\n//               setStopLabel={this.setStopLabel}\n//               updateLabelsOnPastSearch={this.updateLabelsOnPastSearch}\n//             />\n//           </Grid.Column>\n//       </Grid>\n//     )\n\n//   }\n// }\n\n// ReactDOM.render(<App />, document.getElementById('app'))\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvYXBwLmpzeD80YWE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgR3JpZCwgRGl2aWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG4vLyBpbXBvcnQgVmVydGljYWxCYXIgZnJvbSAnLi9jb21wb25lbnRzL3ZlcnRpY2FsX2Jhci5qc3gnXG4vLyBpbXBvcnQgUHJlZGljdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL3ByZWRpY3Rpb25zLmpzeCdcbi8vIGltcG9ydCBTZWFyY2hQYW5lcyBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoX3BhbmVzLmpzeCdcblxuLy8gY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IocHJvcHMpIHtcbi8vICAgICBzdXBlcihwcm9wcyk7XG5cbi8vICAgICB0aGlzLnN0YXRlID0ge1xuLy8gICAgICAgcHJlZGljdGlvbnM6IFtdLFxuLy8gICAgICAgZGlyZWN0aW9uOiAnJyxcbi8vICAgICAgIGJ1c1NlbGVjdGlvbjogJycsXG4vLyAgICAgICBidXNTdG9wOiAnJ1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIHNldFByZWRpY3Rpb25zID0gKHByZWRpY3Rpb25zKSA9PiB7XG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4vLyAgICAgICBwcmVkaWN0aW9uczogcHJlZGljdGlvbnNcbi8vICAgICB9KVxuLy8gICB9XG5cbi8vICAgLy8gZGVzdHJ1Y3R1cmUgd2hlbiB5b3UgY2FuXG4vLyAgIHVwZGF0ZUxhYmVsc09uUGFzdFNlYXJjaCA9IChlLCB7IHZhbHVlIH0pID0+IHtcbi8vICAgICBsZXQgaW5wdXRzID0gdmFsdWUuc3BsaXQoJywnKVxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuLy8gICAgICAgYnVzU2VsZWN0aW9uOiBpbnB1dHNbMF0sXG4vLyAgICAgICBidXNTdG9wSWQ6IGlucHV0c1sxXSxcbi8vICAgICAgIGJ1c1N0b3A6IGlucHV0c1syXSxcbi8vICAgICAgIGRpcmVjdGlvbjogaW5wdXRzWzNdXG4vLyAgICAgfSwgdGhpcy5nZXRQcmVkaWN0aW9ucyhpbnB1dHNbMF0sIGlucHV0c1sxXSkpXG4vLyAgIH1cblxuLy8gICBnZXRQcmVkaWN0aW9ucyA9IChidXNTZWxlY3Rpb24sIGJ1c1N0b3BJZCwgYnVzU3RvcCwgZGlyZWN0aW9uLCBuYW1lKSA9PiB7XG4vLyAgICAgYXhpb3MuZ2V0KCcvcHJlZGljdGlvbnMnLCB7XG4vLyAgICAgICBwYXJhbXM6IHtcbi8vICAgICAgICAgbmFtZTogbmFtZSxcbi8vICAgICAgICAgYnVzU2VsZWN0aW9uOiBidXNTZWxlY3Rpb24sXG4vLyAgICAgICAgIGJ1c1N0b3BJZDogYnVzU3RvcElkLFxuLy8gICAgICAgICBidXNTdG9wOiBidXNTdG9wLFxuLy8gICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbi8vICAgICAgIH1cbi8vICAgICB9KVxuLy8gICAgIC50aGVuKChyZXMpID0+IHtcbi8vICAgICAgIHRoaXMuc2V0UHJlZGljdGlvbnMocmVzLmRhdGEuc2xpY2UoMCwzKSlcbi8vICAgICB9KVxuLy8gICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Vuc3VjY2Vzc2Z1bCBnZXRQcmVkaWN0aW9ucyByZXE6ICcsIGVycm9yKTtcbi8vICAgICB9KTtcbi8vICAgfVxuXG4vLyAgIHNldERpcmVjdGlvbkxhYmVsID0gKGRpcmVjdGlvbikgPT4gdGhpcy5zZXRTdGF0ZSh7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH0pO1xuLy8gICBzZXRCdXNMYWJlbCA9IChidXNTZWxlY3Rpb24pID0+IHRoaXMuc2V0U3RhdGUoeyBidXNTZWxlY3Rpb246IGJ1c1NlbGVjdGlvbiB9KTtcbi8vICAgc2V0U3RvcExhYmVsID0gKGJ1c1N0b3ApID0+IHRoaXMuc2V0U3RhdGUoeyBidXNTdG9wOiBidXNTdG9wIH0pO1xuXG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zdCBzdHlsZSA9IHtcbi8vICAgICAgIHZlcnRpY2FsQmFyOiB7XG4vLyAgICAgICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4vLyAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbi8vICAgICAgICAgaGVpZ2h0OiAnOTAwcHgnXG4vLyAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgeyBwcmVkaWN0aW9ucywgZGlyZWN0aW9uLCBidXNTZWxlY3Rpb24sIGJ1c1N0b3AgfSA9IHRoaXMuc3RhdGU7XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgPEdyaWQgcGFkZGVkPSd2ZXJ0aWNhbGx5Jz5cbi8vICAgICAgICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3N0eWxlLnZlcnRpY2FsQmFyfSBjb2xvcj0nZ3JleScgd2lkdGg9ezR9IHRleHRBbGlnbj0ncmlnaHQnPlxuLy8gICAgICAgICAgICAgPFZlcnRpY2FsQmFyIC8+XG4vLyAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cblxuLy8gICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4vLyAgICAgICAgICAgICA8UHJlZGljdGlvbnNcbi8vICAgICAgICAgICAgICAgcHJlZGljdGlvbnM9e3ByZWRpY3Rpb25zfVxuLy8gICAgICAgICAgICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cbi8vICAgICAgICAgICAgICAgYnVzU2VsZWN0aW9uPXtidXNTZWxlY3Rpb259XG4vLyAgICAgICAgICAgICAgIGJ1c1N0b3A9e2J1c1N0b3B9XG4vLyAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgeyBwcmVkaWN0aW9ucy5sZW5ndGggPiAwID8gKCA8RGl2aWRlciAvPiApIDogbnVsbCB9XG4vLyAgICAgICAgICAgICA8U2VhcmNoUGFuZXNcbi8vICAgICAgICAgICAgICAgZ2V0UHJlZGljdGlvbnM9e3RoaXMuZ2V0UHJlZGljdGlvbnN9XG4vLyAgICAgICAgICAgICAgIHNldERpcmVjdGlvbkxhYmVsPXt0aGlzLnNldERpcmVjdGlvbkxhYmVsfVxuLy8gICAgICAgICAgICAgICBzZXRCdXNMYWJlbD17dGhpcy5zZXRCdXNMYWJlbH1cbi8vICAgICAgICAgICAgICAgc2V0U3RvcExhYmVsPXt0aGlzLnNldFN0b3BMYWJlbH1cbi8vICAgICAgICAgICAgICAgdXBkYXRlTGFiZWxzT25QYXN0U2VhcmNoPXt0aGlzLnVwZGF0ZUxhYmVsc09uUGFzdFNlYXJjaH1cbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbi8vICAgICAgIDwvR3JpZD5cbi8vICAgICApXG5cbi8vICAgfVxuLy8gfVxuXG4vLyBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9zcmMvYXBwLmpzeCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///389\n");

/***/ })

/******/ });