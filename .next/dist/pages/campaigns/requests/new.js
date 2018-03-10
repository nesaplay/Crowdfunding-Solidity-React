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

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iShone/Projects/crowdfunding-solidity-react/pages/campaigns/requests/new.js?entry';


var RequestsNew = function (_Component) {
    (0, _inherits3.default)(RequestsNew, _Component);

    function RequestsNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestsNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestsNew.__proto__ || (0, _getPrototypeOf2.default)(RequestsNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            error: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var _this$state, description, value, recipient, address, campaign, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _this.setState({ loading: true, error: '' });

                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;
                                address = _this.props.address;
                                _context.next = 6;
                                return (0, _campaign2.default)(address);

                            case 6:
                                campaign = _context.sent;
                                _context.prev = 7;
                                _context.next = 10;
                                return _web2.default.eth.getAccounts();

                            case 10:
                                accounts = _context.sent;
                                _context.next = 13;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

                            case 13:

                                _routes.Router.pushRoute('/campaigns/' + address + '/requests');
                                _context.next = 19;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](7);

                                _this.setState({ error: _context.t0.message });

                            case 19:

                                _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[7, 16]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestsNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                recipient = _state.recipient,
                value = _state.value,
                description = _state.description,
                loading = _state.loading,
                error = _state.error;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!error, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: description,
                onChange: function onChange(_ref3) {
                    var target = _ref3.target;
                    return _this3.setState({ description: target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Amount in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: value,
                onChange: function onChange(_ref4) {
                    var target = _ref4.target;
                    return _this3.setState({ value: target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: recipient,
                onChange: function onChange(_ref5) {
                    var target = _ref5.target;
                    return _this3.setState({ recipient: target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: error, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Create')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref6.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestsNew;
}(_react.Component);

exports.default = RequestsNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJNZXNzYWdlIiwiTGluayIsIlJvdXRlciIsIkNhbXBhaWduIiwid2ViMyIsIkxheW91dCIsIlJlcXVlc3RzTmV3Iiwic3RhdGUiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBpZW50IiwiZXJyb3IiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImFkZHJlc3MiLCJwcm9wcyIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0IiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVE7O0FBQzlCLEFBQVMsQUFBTSxBQUFjOztBQUU3QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRUUsQTs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ2pCO21CQUFRLEFBQ0csQUFDUDt5QkFGSSxBQUVTLEFBQ2I7dUJBSEksQUFHTyxBQUNYO21CQUpJLEFBSUcsQUFDUDtxQkFBUyxBLEFBTEw7QUFBQSxBQUNKLGlCLEFBYUo7aUdBQVcsaUJBQUEsQUFBTyxHQUFQO21GQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtrQ0FBQSxBQUFFLEFBRUY7O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLE9BSHhCLEFBR1AsQUFBYyxBQUF3Qjs7OENBRUcsTUFMbEMsQUFLdUMsT0FMdkMsQUFLQywwQkFMRCxBQUtDLGFBTEQsQUFLYyxvQkFMZCxBQUtjLE9BTGQsQUFLcUIsd0JBTHJCLEFBS3FCLEFBQ3BCO0FBTkQsMENBTWEsTUFOYixBQU1rQixNQU5sQixBQU1DO2dEQU5EO3VDQVFnQix3QkFSaEIsQUFRZ0IsQUFBUzs7aUNBQTFCO0FBUkMsb0RBQUE7Z0RBQUE7Z0RBQUE7dUNBV29CLGNBQUEsQUFBSyxJQVh6QixBQVdvQixBQUFTOztpQ0FBMUI7QUFYSCxvREFBQTtnREFBQTt1Q0FZRyxTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUNGLGFBQWEsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BRDVCLEFBQ1csQUFBd0IsVUFEbkMsQUFDNkMsV0FEN0MsQUFFSixLQUFLLEVBQUUsTUFBTSxTQWRaLEFBWUcsQUFFQyxBQUFRLEFBQVM7O2lDQUV4Qjs7K0NBQUEsQUFBTywwQkFBUCxBQUErQixVQWhCNUI7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBa0JIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLFlBbEJwQixBQWtCSCxBQUFjLEFBQVc7O2lDQUc3Qjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FyQlQsQUFxQlAsQUFBYyxBQUFXOztpQ0FyQmxCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBd0JGO3lCQUFBOzt5QkFDcUQsS0FEckQsQUFDMEQ7Z0JBRDFELEFBQ0csbUJBREgsQUFDRztnQkFESCxBQUNjLGVBRGQsQUFDYztnQkFEZCxBQUNxQixxQkFEckIsQUFDcUI7Z0JBRHJCLEFBQ2tDLGlCQURsQyxBQUNrQztnQkFEbEMsQUFDMkMsZUFEM0MsQUFDMkMsQUFFaEQ7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFFSiwwQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EscUNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQXZDLEFBQXdDOzhCQUF4QztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsZ0NBQUEsQUFBQzt1QkFBRCxBQUNXLEFBQ1A7MEJBQVUseUJBQUE7d0JBQUEsQUFBRyxlQUFILEFBQUc7MkJBQWEsT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE9BQTdDLEFBQWdCLEFBQWMsQUFBc0I7QUFGbEU7OzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxvQ0FBQSxBQUFDO3VCQUFELEFBQ1csQUFDUDswQkFBVSx5QkFBQTt3QkFBQSxBQUFHLGVBQUgsQUFBRzsyQkFBYSxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sT0FBdkMsQUFBZ0IsQUFBYyxBQUFnQjtBQUY1RDs7OEJBQUE7Z0NBVlIsQUFRSSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhCQUFBLEFBQUM7dUJBQUQsQUFDVyxBQUNQOzBCQUFVLHlCQUFBO3dCQUFBLEFBQUcsZUFBSCxBQUFHOzJCQUFhLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxPQUEzQyxBQUFnQixBQUFjLEFBQW9CO0FBRmhFOzs4QkFBQTtnQ0FqQlIsQUFlSSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlSLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUE5QixBQUF1Qzs4QkFBdkM7Z0NBdEJKLEFBc0JJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBeUI7OEJBQXpCO2dDQUFBO0FBQUE7ZUE3QlosQUFDSSxBQUtJLEFBdUJJLEFBSWY7Ozs7O21IQWxFNEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE1BQWxCLEE7a0VBRUQsRUFBRSxTQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFaMEIsQTs7a0JBQXBCLEEiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9pU2hvbmUvUHJvamVjdHMvY3Jvd2RmdW5kaW5nLXNvbGlkaXR5LXJlYWN0In0=