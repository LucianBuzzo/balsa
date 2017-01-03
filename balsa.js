!(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myModule = factory();
  }
}(this, function factory() {
  var root = this;

  var toArray = function toArray(val) {
    return Array.prototype.slice.call(val);
  };

  var forEach = function forEach(collection, fn) {
    var i = 0;
    for (i; i < collection.length; i++) {
      fn(collection[i]);
    }
  };

  var map = function map(collection, fn) {
    var i = 0;
    var newCollection = [];
    for (i; i < collection.length; i++) {
      newCollection.push(fn(collection[i]));
    }
    return newCollection;
  };

  var filter = function filter(collection, fn) {
    var i = 0;
    var newCollection = [];
    for (i; i < collection.length; i++) {
      if (fn(collection[i])) {
        newCollection.push(collection[i]);
      }
    }
    return newCollection;
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
    forEach(keys, function(v) {
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

  var chainFunctions = [map, forEach, isUndefined, has, keys, clone, filter, pick, isString, isArray];

  var BalsaConstructor = function() {
    var balsa = function balsa(val) {
      var methods = {};
      if (val !== undefined) {
        forEach(chainFunctions, function(chainable) {
          methods[chainable.name] = function() {
            var argsArray = toArray(arguments);
            argsArray.unshift(val);
            return chainable.apply(null, argsArray);
          };
        });

        return methods;
      }
    };

    balsa.map = map;
    balsa.forEach = forEach;
    balsa.filter = filter;

    balsa.isUndefined = isUndefined;
    balsa.isString = isString;
    balsa.isArray = isArray;
    balsa.isObject = isObject;

    balsa.has = has;
    balsa.keys = keys;
    balsa.clone = clone;
    balsa.pick = pick;

    return balsa;
  };

  root.B = new BalsaConstructor();

}));
