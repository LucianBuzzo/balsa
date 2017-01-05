!(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myModule = factory();
  }
}(this, function factory() {


  /**
   * @function isUndefined
   * @desc Returns a boolean indicating if the value is undefined.
   *
   * @param {Mixed} value - Value to check.
   * @return {Boolean} - true if the value is undefined, false otherwise.
   */
  var isUndefined = function isUndefined(value) {
    return typeof value === 'undefined';
  };


  /**
   * @function isString
   * @desc Returns a boolean indicating if the value is a string.
   *
   * @param {Mixed} value - Value to check.
   * @return {Boolean} - true if the value is a string, false otherwise.
   */
  var isString = function isString(value) {
    return typeof value === 'string';
  };


  /**
   * @function isArray
   * @desc Returns a boolean indicating if the value is an array.
   *
   * @param {Mixed} value - Value to check.
   * @return {Boolean} - true if the value is an array, false otherwise.
   */
  var isArray = function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };


  /**
   * @function isObject
   * @desc Returns a boolean indicating if the value is an object literal.
   *
   * @param {Mixed} value - Value to check.
   * @return {Boolean} - true if the value is an object, false otherwise.
   */
  var isObject = function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  };


  /**
   * @function has
   * @desc Checks if key is a direct property of object.
   *
   * @param {Object} object - The object to check.
   * @param {String} key - The key to check.
   * @return {undefined} - Returns true if the key exists, else false.
   */
  var has = function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
  };

  /**
   * @function keys
   * @desc Creates an array of the own enumerable property names of object.
   *
   * @param {Object} object - The object to retrieve property names from.
   * @return {Array} - An array of property names.
   */
  var keys = function keys(object) {
    return Object.keys(object);
  };

  /**
   * @function pick
   * @desc Creates an object composed of the picked object properties.
   *
   * @param {Object} object - The source object.
   * @param {String | Array} keys - The property keys to pick.
   * @return {Object} - The new object.
   */
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

  /**
   * @TODO expand types that can be cloned using https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
   *
   * @function clone
   * @desc Creates a clone of a simple object
   *
   * @param {Object} value - The object to clone.
   *
   * @return {Object} - The cloned object.
   */
  var clone = function clone(value) {
    return JSON.parse(JSON.stringify(value));
  };

  /**
   * @desc Base function to add prototype methods to.
   * @returns {void}
   */
  var Beedrill = function Beedrill() { };

  Beedrill.prototype.isUndefined = isUndefined;
  Beedrill.prototype.isString = isString;
  Beedrill.prototype.isArray = isArray;
  Beedrill.prototype.isObject = isObject;

  Beedrill.prototype.has = has;
  Beedrill.prototype.keys = keys;
  Beedrill.prototype.clone = clone;
  Beedrill.prototype.pick = pick;

  return new Beedrill();
}));
