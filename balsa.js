!(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myModule = factory();
  }
}(this, function factory() {
  var isUndefined = function isUndefined(value) {
    return typeof value === 'undefined';
  };

  var has = function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
  };

  var keys = function keys(object) {
    return Object.keys(object);
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
    return Object.prototype.toString.call(value) === '[object Object]';
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
