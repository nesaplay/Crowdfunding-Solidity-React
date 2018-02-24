'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var provider = void 0;

// works with metamask only currently
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    provider = window.web3.currentProvider;
} else {
    provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/AwwXWAl8guoakZ1wyKtI');
}
exports.default = new _web2.default(provider);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInByb3ZpZGVyIiwid2luZG93Iiwid2ViMyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQSxJQUFJLGdCQUFKOztBQUVBO0FBQ0EsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDckU7ZUFBVyxPQUFPLEFBQVAsS0FBWSxBQUF2QixBQUNIO0FBRkQsT0FFTyxBQUNIO2VBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxBQUFoQyxBQUFYLEFBQ0g7QUFDRDtrQkFBZSxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2lTaG9uZS9Qcm9qZWN0cy9jcm93ZGZ1bmRpbmctc29saWRpdHktcmVhY3QifQ==