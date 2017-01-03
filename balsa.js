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

  var chainFunctions = [isUndefined, has, keys, clone, pick, isString, isArray];

  var BalsaConstructor = function() {
    var balsa = function balsa(val) {
      var methods = {};
      if (val !== undefined) {
        chainFunctions.forEach(function(chainable) {
          methods[chainable.name] = function() {
            var argsArray = toArray(arguments);
            argsArray.unshift(val);
            return chainable.apply(null, argsArray);
          };
        });

        return methods;
      }
    };

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

  return new BalsaConstructor();
}));
