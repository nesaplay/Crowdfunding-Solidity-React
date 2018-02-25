'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            console.log(this.props);
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, 'Your address is : ', this.props.url.query.address);
        }
    }]);

    return ShowCampaign;
}(_react.Component);

exports.default = ShowCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2hvd0NhbXBhaWduIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwidXJsIiwicXVlcnkiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0ksQUFFSzs7Ozs7Ozs7Ozs7aUNBQ1IsQUFDTDtvQkFBQSxBQUFRLElBQUksS0FBWixBQUFpQixBQUNqQjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQUN1QiwyQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFGMUMsQUFDSSxBQUM0QyxBQUduRDs7Ozs7QUFScUMsQTs7a0JBQXJCLEEiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaVNob25lL1Byb2plY3RzL2Nyb3dkZnVuZGluZy1zb2xpZGl0eS1yZWFjdCJ9