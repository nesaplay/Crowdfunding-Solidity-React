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

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iShone/Projects/crowdfunding-solidity-react/components/ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = { value: '', loading: false, error: '' }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var address, campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _this.setState({ loading: true, error: '' });

                                address = _this.props.address;
                                _context.next = 5;
                                return (0, _campaign2.default)(address);

                            case 5:
                                campaign = _context.sent;
                                _context.prev = 6;
                                _context.next = 9;
                                return _web2.default.eth.getAccounts();

                            case 9:
                                accounts = _context.sent;
                                _context.next = 12;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 12:

                                _routes.Router.replaceRoute('/campaigns/' + address);
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](6);

                                _this.setState({ error: _context.t0.message });

                            case 18:

                                _this.setState({ loading: false, value: '' });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[6, 15]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.error, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(_ref3) {
                    var target = _ref3.target;
                    return _this3.setState({ value: target.value });
                },
                label: 'ether',
                labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.error, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Contribute!'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwibG9hZGluZyIsImVycm9yIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImFkZHJlc3MiLCJwcm9wcyIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUUvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJQUVGLEE7Ozs7Ozs7Ozs7Ozs7OztnT0FDakIsQSxRQUFRLEVBQUUsT0FBRixBQUFTLElBQUksU0FBYixBQUFzQixPQUFPLE8sQUFBN0IsQUFBb0MsWUFFNUMsQTtpR0FBVyxpQkFBQSxBQUFPLEdBQVA7dUNBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7a0NBQUEsQUFBRSxBQUVGOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxPQUEvQixBQUFjLEFBQXdCLEFBRTlCOztBQUxELDBDQUthLE1BTGIsQUFLa0IsTUFMbEIsQUFLQztnREFMRDt1Q0FNZ0Isd0JBTmhCLEFBTWdCLEFBQVM7O2lDQUExQjtBQU5DLG9EQUFBO2dEQUFBO2dEQUFBO3VDQVNvQixjQUFBLEFBQUssSUFUekIsQUFTb0IsQUFBUzs7aUNBQTFCO0FBVEgsb0RBQUE7Z0RBQUE7Z0RBVUcsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCOzBDQUMxQixTQUQrQixBQUMvQixBQUFTLEFBQ2Y7MkNBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVpwQyxBQVVHLEFBQW1DLEFBRTlCLEFBQW1DO0FBRkwsQUFDckMsaUNBREU7O2lDQUtOOzsrQ0FBQSxBQUFPLDZCQWZKLEFBZUgsQUFBa0M7Z0RBZi9CO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWlCSDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxZQWpCcEIsQUFpQkgsQUFBYyxBQUFXOztpQ0FHN0I7O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BcEJ6QixBQW9CUCxBQUFjLEFBQXlCOztpQ0FwQmhDO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBdUJGO3lCQUNMOzttQ0FDSSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBO3dCQUFBLEFBQUcsZUFBSCxBQUFHOzJCQUFhLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxPQUF2QyxBQUFnQixBQUFjLEFBQWdCO0FBRjVELEFBR0k7dUJBSEosQUFHVSxBQUNOOytCQUpKLEFBSWtCOzs4QkFKbEI7Z0NBSFIsQUFDSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1SLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBVkosQUFVSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBWlIsQUFDSSxBQVdJLEFBR1g7Ozs7O0FBMUN1QyxBOztrQkFBdkIsQSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaVNob25lL1Byb2plY3RzL2Nyb3dkZnVuZGluZy1zb2xpZGl0eS1yZWFjdCJ9