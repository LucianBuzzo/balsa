!(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myModule = factory();
  }
}(this, function factory() {

  /**
   * @module beedrill
   */

  /**
   * @function isUndefined
   * @desc Returns a boolean indicating if the value is undefined.
   * @public
   *
   * @param {Mixed} value - Value to check.
   * @return {Boolean} - true if the value is undefined, false otherwise.
   *
   * @example
   * const B = require('beedrill');
   *
   * var foo;
   *
   * B.isUndefined(foo); // --> true
   */
  var isUndefined = function isUndefined(value) {
    return typeof value === 'undefined';
  };


  /**
   * @function isString
   * @desc Returns a boolean indicating if the value is a string.
   * @public
   *
   * @param {Mixed} value - Value to check.
   * @return {Boolean} - true if the value is a string, false otherwise.
   *
   * @example
   * const B = require('beedrill');
   *
   * const foo = 'string';
   * const bar = 123;
   *
   * B.isString(foo); // --> true
   * B.isString(bar); // --> false
   */
  var isString = function isString(value) {
    return typeof value === 'string';
  };


  /**
   * @function isArray
   * @desc Returns a boolean indicating if the value is an array.
   * @public
   *
   * @param {Mixed} value - Value to check.
   * @return {Boolean} - true if the value is an array, false otherwise.
   *
   * @example
   * const B = require('beedrill');
   *
   * const foo = 'string';
   * const bar = [1, 2, 3];
   *
   * B.isArray(foo); // --> false
   * B.isArray(bar); // --> true
   */
  var isArray = function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  };


  /**
   * @function isObject
   * @desc Returns a boolean indicating if the value is an object literal.
   * @public
   *
   * @param {Mixed} value - Value to check.
   * @return {Boolean} - true if the value is an object, false otherwise.
   *
   * @example
   * const B = require('beedrill');
   *
   * const foo = 'string';
   * const bar = { hello: 'world' };
   *
   * B.isObject(foo); // --> false
   * B.isObject(bar); // --> true
   */
  var isObject = function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  };


  /**
   * @function has
   * @desc Checks if key is a direct property of object.
   * @public
   *
   * @param {Object} object - The object to check.
   * @param {String} key - The key to check.
   * @return {undefined} - Returns true if the key exists, else false.
   *
   * @example
   * const B = require('beedrill');
   *
   * const foo = { hello: 'world' };
   *
   * B.has(foo, 'bar'); // --> false
   * B.has(foo, 'hello'); // --> true
   */
  var has = function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
  };

  /**
   * @function keys
   * @desc Creates an array of the own enumerable property names of object.
   * @public
   *
   * @param {Object} object - The object to retrieve property names from.
   * @return {Array} - An array of property names.
   *
   * @example
   * const B = require('beedrill');
   *
   * const object = {
   *   hello: 'world',
   *   foo: 'bar'
   * };
   *
   * B.keys(object); // --> ['hello', 'foo']
   */
  var keys = function keys(object) {
    return Object.keys(object);
  };

  /**
   * @function pick
   * @desc Creates an object composed of the picked object properties.
   * @public
   *
   * @param {Object} object - The source object.
   * @param {String | Array} keys - The property keys to pick.
   * @return {Object} - The new object.
   *
   * @example
   * const B = require('beedrill');
   *
   * const object = {
   *   foo: 1,
   *   bar: 2,
   *   hello: 3
   * };
   *
   * B.pick(object, 'foo'); // --> { foo: 1 }
   * B.pick(object, ['bar', 'hello']); // --> { bar: 2, hello: 3 }
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
   * @public
   *
   * @param {Object} value - The object to clone.
   *
   * @return {Object} - The cloned object.
   *
   * @example
   * const B = require('beedrill');
   *
   * const object = { foo: 'bar' };
   *
   * B.clone(object); // --> { foo: 'bar' }
   */
  var clone = function clone(value) {
    return JSON.parse(JSON.stringify(value));
  };


  /**
   * @function random
   * @desc Returns a random integer between min and max, inclusive.
   * @public
   *
   * @param {Number} min - The lowest possible random number.
   * @param {Number} max - The highest possible random number.
   *
   * @returns {Number} - A random number between min and max
   *
   * @example
   * const B = require('beedrill');
   * const num = B.random(0, 100); // --> 36
   */
  const random = function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  };


  /**
   * @function unique
   * @desc Produces a duplicate-free version of the array, using === to test object equality.
   * @public
   *
   * @param {Array} array - The array to inspect
   *
   * @returns {Array} - Returns the new duplicate free array.
   *
   * @example
   * const B = require('beedrill');
   * const source = [1, 2, 3, 1, 5, 5, 3, 2, 1];
   *
   * const uniqueSource = B.unique(source); // -->  [1, 2, 3, 5,]
   */
  const unique = function unique(array) {
    var len = array.length;
    var computed = [];
    for (var i = 0; i < len; i++) {
      var item = array[i];
      var seen = false;
      if (!computed.length) {
        computed.push(item);
        continue;
      }

      for (var j = 0; j < computed.length; j++) {
        if (item === computed[j]) {
          seen = true;
          break;
        }
      }

      if (!seen) {
        computed.push(item);
      }
    }

    return computed;
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
  Beedrill.prototype.random = random;
  Beedrill.prototype.unique = unique;

  return new Beedrill();
}));
