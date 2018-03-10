'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _RequestView = require('../../../components/RequestView');

var _RequestView2 = _interopRequireDefault(_RequestView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iShone/Projects/crowdfunding-solidity-react/pages/campaigns/requests/index.js?entry';


var Requests = function (_Component) {
    (0, _inherits3.default)(Requests, _Component);

    function Requests() {
        (0, _classCallCheck3.default)(this, Requests);

        return (0, _possibleConstructorReturn3.default)(this, (Requests.__proto__ || (0, _getPrototypeOf2.default)(Requests)).apply(this, arguments));
    }

    (0, _createClass3.default)(Requests, [{
        key: 'renderRequests',
        value: function renderRequests() {
            var _props = this.props,
                requests = _props.requests,
                address = _props.address,
                approversCount = _props.approversCount;

            return requests.map(function (request, i) {
                return _react2.default.createElement(_RequestView2.default, {
                    key: i,
                    id: i,
                    request: request,
                    address: address,
                    approversCount: approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Requests List'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, this.renderRequests())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Found ', this.props.requestCount, ' requests'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
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
                                return campaign.methods.getRequestCount().call();

                            case 6:
                                requestCount = _context.sent;
                                _context.next = 9;
                                return campaign.methods.approversCount().call();

                            case 9:
                                approversCount = _context.sent;
                                _context.next = 12;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (el, i) {
                                    return campaign.methods.requests(i).call();
                                }));

                            case 12:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 14:
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

    return Requests;
}(_react.Component);

exports.default = Requests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwid2ViMyIsIkxheW91dCIsIlJlcXVlc3RWaWV3IiwiUmVxdWVzdHMiLCJwcm9wcyIsInJlcXVlc3RzIiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwibWFwIiwicmVxdWVzdCIsImkiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJlcXVlc3RzIiwicmVxdWVzdENvdW50IiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFROztBQUNqQixBQUFTLEFBQVk7O0FBRXJCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7Ozs7OztJQUVILEE7Ozs7Ozs7Ozs7O3lDQWVBO3lCQUNpQyxLQURqQyxBQUNzQztnQkFEdEMsQUFDTCxrQkFESyxBQUNMO2dCQURLLEFBQ0ssaUJBREwsQUFDSztnQkFETCxBQUNjLHdCQURkLEFBQ2MsQUFFM0I7OzRCQUFPLEFBQVMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLEdBQVY7dUNBQ2hCLEFBQUM7eUJBQUQsQUFDUyxBQUNMO3dCQUZKLEFBRVEsQUFDSjs2QkFISixBQUdhLEFBQ1Q7NkJBSkosQUFJYSxBQUNUO29DQUxKLEFBS29COztrQ0FMcEI7b0NBRGdCLEFBQ2hCO0FBQUE7QUFDSSxpQkFESjtBQURKLEFBQU8sQUFTVixhQVRVOzs7O2lDQVdGO2dCQUFBLEFBQ0csU0FESCxBQUNxQyx1QkFEckMsQUFDRztnQkFESCxBQUNXLE1BRFgsQUFDcUMsdUJBRHJDLEFBQ1c7Z0JBRFgsQUFDZ0IsYUFEaEIsQUFDcUMsdUJBRHJDLEFBQ2dCO2dCQURoQixBQUM0QixPQUQ1QixBQUNxQyx1QkFEckMsQUFDNEIsQUFFakM7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGtDQUFBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQWhCLEFBQXdCLFNBQVEsT0FBTyxFQUFFLGNBQXpDLEFBQXVDLEFBQWdCOzhCQUF2RDtnQ0FBQTtBQUFBO2VBSlosQUFFSSxBQUNJLEFBQ0ksQUFLUixrQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUNBLGdDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhKLEFBR0ksQUFDQSwyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFKSixBQUlJLEFBQ0EsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUNBLG1DQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQU5KLEFBTUksQUFDQSw0QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFUWixBQUNJLEFBQ0ksQUFPSSxBQUdSLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQXJCUixBQVNJLEFBWUksQUFDSyxBQUFLLEFBR2Qsb0NBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVksZUFBQSxBQUFLLE1BQWpCLEFBQXVCLGNBMUIvQixBQUNJLEFBeUJJLEFBR1g7Ozs7O2lILEFBNUQ0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTUFBTSxBLE0sQUFBbEI7O3VDQUNlLHdCQUFBLEFBQVMsQTs7aUNBQTFCO0E7O3VDQUNxQixTQUFBLEFBQVMsUUFBVCxBQUFpQixrQixBQUFqQixBQUFtQzs7aUNBQXhEO0E7O3VDQUN1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQixBQUFqQixBQUFrQzs7aUNBQXpEO0E7O3lEQUVpQixBQUFRLFVBQ3JCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFDSyxJQUFJLFVBQUEsQUFBQyxJQUFELEFBQUssR0FBTDsyQ0FBVyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixHQUFyQyxBQUFXLEFBQTZCO0FBRjlCLEFBQ25CLEEsaUNBQUEsQ0FEbUI7O2lDQUFqQjtBO2lFQUtDLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsY0FBbUMsZ0JBQW5DLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFadUIsQTs7a0JBQWpCLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2lTaG9uZS9Qcm9qZWN0cy9jcm93ZGZ1bmRpbmctc29saWRpdHktcmVhY3QifQ==