function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var InternalState =
/*#__PURE__*/
function () {
  function InternalState() {
    _classCallCheck(this, InternalState);

    this.sourcePointer = 0;
    this.active = true;
    this.fetch = null;
  }

  _createClass(InternalState, [{
    key: "isActive",
    value: function isActive() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Internal state has been reset => we received new props
      if (state.internal !== this) return false;
      if (!this.fetch) return false;
      if (this.active !== true) return false;
      return true;
    }
  }]);

  return InternalState;
}();

export { InternalState as default };