'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iShone/Projects/crowdfunding-solidity-react/pages/campaigns/show.js?entry';


var ShowCampaign = function (_Component) {
    (0, _inherits3.default)(ShowCampaign, _Component);

    function ShowCampaign() {
        (0, _classCallCheck3.default)(this, ShowCampaign);

        return (0, _possibleConstructorReturn3.default)(this, (ShowCampaign.__proto__ || (0, _getPrototypeOf2.default)(ShowCampaign)).apply(this, arguments));
    }

    (0, _createClass3.default)(ShowCampaign, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            });
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, details;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                _context.next = 3;
                                return (0, _campaign2.default)(address);

                            case 3:
                                campaign = _context.sent;
                                _context.next = 6;
                                return campaign.methods.getAllDetails().call();

                            case 6:
                                details = _context.sent;
                                return _context.abrupt('return', {
                                    minimumContribution: details[0],
                                    balance: details[1],
                                    requestsCount: details[2],
                                    approversCount: details[3],
                                    manager: details[4]
                                });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ShowCampaign;
}(_react.Component);

exports.default = ShowCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJTaG93Q2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldEFsbERldGFpbHMiLCJjYWxsIiwiZGV0YWlscyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFQSxBOzs7Ozs7Ozs7OztpQ0FlUixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQURKLEFBQ0ksQUFHUDtBQUhPO0FBQUEsYUFBQTs7Ozs7aUhBaEJxQixBOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTSxBQUFsQjs7dUNBQ2Usd0JBQUEsQUFBUyxBOztpQ0FBMUI7QTs7dUNBQ2dCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCQUFqQixBQUFpQyxBOztpQ0FBakQ7QTs7eURBR21CLFFBRGxCLEFBQ2tCLEFBQVEsQUFDN0I7NkNBQVMsUUFGTixBQUVNLEFBQVEsQUFDakI7bURBQWUsUUFIWixBQUdZLEFBQVEsQUFDdkI7b0RBQWdCLFFBSmIsQUFJYSxBQUFRLEFBQ3hCOzZDQUFTLFFBTE4sQUFLTSxBQUFRLEE7QUFMZCxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUDhCLEE7O2tCQUFyQixBIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2lTaG9uZS9Qcm9qZWN0cy9jcm93ZGZ1bmRpbmctc29saWRpdHktcmVhY3QifQ==