'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';

var GithubSource = function GithubSource(props) {
  var _this = this;

  _classCallCheck(this, GithubSource);

  _defineProperty(this, "props", null);

  _defineProperty(this, "isCompatible", function () {
    return !!_this.props.githubHandle;
  });

  _defineProperty(this, "get", function (setState) {
    var _this$props = _this.props,
        size = _this$props.size,
        githubHandle = _this$props.githubHandle;
    var url = "https://avatars.githubusercontent.com/".concat(githubHandle, "?v=4&s=").concat(size);
    setState({
      sourceName: 'github',
      src: url
    });
  });

  this.props = props;
};

_defineProperty(GithubSource, "propTypes", {
  githubHandle: PropTypes.string
});

export { GithubSource as default };