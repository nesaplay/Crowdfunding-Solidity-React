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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/iShone/Projects/crowdfunding-solidity-react/pages/campaigns/show.js?entry';


var ShowCampaign = function (_Component) {
    (0, _inherits3.default)(ShowCampaign, _Component);

    function ShowCampaign() {
        (0, _classCallCheck3.default)(this, ShowCampaign);

        return (0, _possibleConstructorReturn3.default)(this, (ShowCampaign.__proto__ || (0, _getPrototypeOf2.default)(ShowCampaign)).apply(this, arguments));
    }

    (0, _createClass3.default)(ShowCampaign, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var _props = this.props,
                minimumContribution = _props.minimumContribution,
                balance = _props.balance,
                manager = _props.manager,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                description: 'Manager is asking for this spending request',
                meta: 'Address of Manager',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                description: 'This is the minimum amount to become a contributor',
                meta: 'Minimum Contribution (in wei)'
            }, {
                header: requestsCount,
                description: 'A request is in place to spending purposes. Approvers must approve it first.',
                meta: 'Number of current requests'
            }, {
                header: approversCount,
                description: 'Number of people who have already donated.',
                meta: 'Number of Approvers'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                description: 'How much money this campaign currently have.',
                meta: 'Campaign Balance (ether)'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Show Campaign'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, this.renderCampaigns()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, 'View Requests')))))));
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
                                    manager: details[4],
                                    address: address
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGF5b3V0IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMaW5rIiwiQ29udHJpYnV0ZUZvcm0iLCJTaG93Q2FtcGFpZ24iLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwibWFuYWdlciIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYW1wYWlnbnMiLCJhZGRyZXNzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRBbGxEZXRhaWxzIiwiY2FsbCIsImRldGFpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFFaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0ksQUFFTjs7Ozs7Ozs7Ozs7MENBZ0JDO3lCQU9WLEtBUFUsQUFPTDtnQkFQSyxBQUVWLDZCQUZVLEFBRVY7Z0JBRlUsQUFHVixpQkFIVSxBQUdWO2dCQUhVLEFBSVYsaUJBSlUsQUFJVjtnQkFKVSxBQUtWLHVCQUxVLEFBS1Y7Z0JBTFUsQUFNVix3QkFOVSxBQU1WLEFBR0o7O2dCQUFNO3dCQUNGLEFBQ1ksQUFDUjs2QkFGSixBQUVpQixBQUNiO3NCQUhKLEFBR1UsQUFDTjt1QkFBTyxFQUFFLGNBTEgsQUFDVixBQUlXLEFBQWdCO0FBSjNCLEFBQ0ksYUFGTTt3QkFPVixBQUNZLEFBQ1I7NkJBRkosQUFFaUIsQUFDYjtzQkFWTSxBQU9WLEFBR1U7QUFIVixBQUNJO3dCQUlKLEFBQ1ksQUFDUjs2QkFGSixBQUVpQixBQUNiO3NCQWZNLEFBWVYsQUFHVTtBQUhWLEFBQ0k7d0JBSUosQUFDWSxBQUNSOzZCQUZKLEFBRWlCLEFBQ2I7c0JBcEJNLEFBaUJWLEFBR1U7QUFIVixBQUNJO3dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQvQixBQUNZLEFBQTRCLEFBQ3BDOzZCQUZKLEFBRWlCLEFBQ2I7c0JBekJSLEFBQWMsQUFzQlYsQUFHVSxBQUlkO0FBUEksQUFDSTs7aURBTUQsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGtDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSztBQURMO29CQURKLEFBQ0ksQUFDSyxBQUFLLEFBR1Ysb0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQVBaLEFBQ0ksQUFLSSxBQUNJLEFBR1I7QUFIUTtrQ0FHUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQWpCNUIsQUFDSSxBQUVJLEFBVUksQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQVEvQjs7Ozs7aUhBbEY0QixBOzs7OztpQ0FDakI7QSwwQ0FBWSxNLEFBQU0sTSxBQUFsQjs7dUNBQ2Usd0JBQUEsQUFBUyxBOztpQ0FBMUI7QTs7dUNBQ2dCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGdCLEFBQWpCLEFBQWlDOztpQ0FBakQ7QTs7eURBR21CLFFBRGxCLEFBQ2tCLEFBQVEsQUFDN0I7NkNBQVMsUUFGTixBQUVNLEFBQVEsQUFDakI7bURBQWUsUUFIWixBQUdZLEFBQVEsQUFDdkI7b0RBQWdCLFFBSmIsQUFJYSxBQUFRLEFBQ3hCOzZDQUFTLFFBTE4sQUFLTSxBQUFRLEFBQ2pCOzZDQU5HLEE7QUFBQSxBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUDhCLEE7O2tCQUFyQixBIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2lTaG9uZS9Qcm9qZWN0cy9jcm93ZGZ1bmRpbmctc29saWRpdHktcmVhY3QifQ==