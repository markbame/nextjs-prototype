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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _style3 = require('../style/style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/clouduser/knowledgeview/nextprot/layout/header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);

    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: _style4.default.__scopedHash,
        css: _style4.default.__scoped
      }), _react2.default.createElement('ul', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('li', { className: 'navLink', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_link2.default, { href: '/index', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('a', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'Home'))), _react2.default.createElement('li', { className: 'navLink', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_link2.default, { href: '/items', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('a', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Items'))), _react2.default.createElement('li', { className: 'navLink', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_link2.default, { href: '/cart', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('a', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Cart'))), _react2.default.createElement('li', { className: 'navLink', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_link2.default, { href: '/tracking', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Tracking'))), _react2.default.createElement('li', { className: 'navLink', 'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('a', {
        'data-jsx-ext': _style4.default.__scopedHash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'About')))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', {});

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Header;
}(_react.Component);

exports.default = Header;