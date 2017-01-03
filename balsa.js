!(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myModule = factory();
  }
}(this, function factory() {
  var toArray = function toArray(val) {
    return Array.prototype.slice.call(val);
  };

  var isUndefined = function isUndefined(value) {
    return typeof value === 'undefined';
  };

  var has = function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
  };

  var keys = function keys(object) {
    var array = [];
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        array.push(key);
      }
    }
    return array;
  };

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var isArray = function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };

  var pick = function pick(object, keys) {
    var newObject = {};
    keys = isString(keys) ? [keys] : keys;
    keys.forEach(function(v) {
      if (object.hasOwnProperty(v)) {
        newObject[v] = clone(object[v]);
      }
    });
    return newObject;
  };

  var isObject = function isObject(value) {
    // Avoid a V8 JIT bug in Chrome 19-20.
    // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
    var type = typeof value;
    return type === 'function' || value && type === 'object' || false;
  };

  var clone = function clone(value) {
    return JSON.parse(JSON.stringify(value));
  };

  var Balsa = function Balsa() { };

  Balsa.prototype.isUndefined = isUndefined;
  Balsa.prototype.isString = isString;
  Balsa.prototype.isArray = isArray;
  Balsa.prototype.isObject = isObject;

  Balsa.prototype.has = has;
  Balsa.prototype.keys = keys;
  Balsa.prototype.clone = clone;
  Balsa.prototype.pick = pick;

  return new Balsa();
}));
