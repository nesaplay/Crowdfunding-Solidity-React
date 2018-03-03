'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Crowdfunding = require('./build/Crowdfunding.json');

var _Crowdfunding2 = _interopRequireDefault(_Crowdfunding);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

exports.default = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return new _web2.default.eth.Contract(JSON.parse(_Crowdfunding2.default.interface), address);

                    case 2:
                        return _context.abrupt('return', _context.sent);

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, _this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBcUIsQUFBckIsQUFFQTs7Ozs7Ozs7OEJBQUE7d0ZBQWUsaUJBQU8sQUFBUCxTQUFBO3NFQUFBO3NCQUFBO2lEQUFBO3lCQUFBO3dDQUFBOytCQUNFLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNULEtBQUssQUFBTCxNQUFXLHVCQUFTLEFBQXBCLEFBRFMsWUFDdUIsQUFEdkIsQUFERjs7eUJBQUE7a0VBQUE7O3lCQUFBO3lCQUFBO3dDQUFBOztBQUFBO29CQUFBO0FBQWY7O3lCQUFBO2dDQUFBO0FBQUEiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2lTaG9uZS9Qcm9qZWN0cy9jcm93ZGZ1bmRpbmctc29saWRpdHktcmVhY3QifQ==