'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CrowdfundingFactory = require('./build/CrowdfundingFactory.json');

var _CrowdfundingFactory2 = _interopRequireDefault(_CrowdfundingFactory);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _web2.default.eth.Contract(JSON.parse(_CrowdfundingFactory2.default.interface), _constants.FACTORY_ADDRESS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNyb3dkZnVuZGluZ0ZhY3RvcnkiLCJGQUNUT1JZX0FERFJFU1MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWdDLEFBQWhDOzs7O0FBQ0EsQUFBUyxBQUFULEFBQWdDLEFBQWhDLEFBRUE7Ozs7a0JBQWUsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ1gsS0FBSyxBQUFMLE1BQVcsOEJBQW9CLEFBQS9CLEFBRFcsQUFFWCxBQUZXLEFBQWYiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaVNob25lL1Byb2plY3RzL2Nyb3dkZnVuZGluZy1zb2xpZGl0eS1yZWFjdCJ9