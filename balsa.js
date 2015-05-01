;(function() {
  var root = this;

  function toArray(val) {
    return Array.prototype.slice.call(val);
  }

  function forEach(collection, fn) {
    var i = 0;
    for(i; i < collection.length; i++) {
      fn(collection[i]);
    }
  }

  function map(collection, fn) {
    var i = 0;
    var newCollection = [];
    for(i; i < collection.length; i++) {
      newCollection.push(fn(collection[i]));
    }
    return newCollection;
  }

  function filter(collection, fn) {
    var i = 0;
    var newCollection = [];
    for(i; i < collection.length; i++) {
      if (fn(collection[i])) {
        newCollection.push(collection[i]);
      }
    }
    return newCollection;
  }

  function isUndefined(value) {
    return typeof value == 'undefined';
  }

  function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
  }

  function keys(object) {
    var array = [];
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        array.push(key);
      }
    }
    return array;
  }

  function isObject(value) {
    // Avoid a V8 JIT bug in Chrome 19-20.
    // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
    var type = typeof value;
    return type == 'function' || (value && type == 'object') || false;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(obj));
  }

  var chainFunctions = [map, forEach, isUndefined, has, keys, clone, filter];

  var BalsaConstructor = function() {

    function balsa(val) {
      var methods = {};
      if(val !== undefined) {
        forEach(chainFunctions, function(chainable) {
          methods[chainable.name] = function() {
            var argsArray = toArray(arguments);
            argsArray.unshift(val);
            return chainable.apply(null, argsArray);
          };
        });

        return methods;
      }
    }

    balsa.map = map;
    balsa.forEach = forEach;
    balsa.filter = filter;

    balsa.isUndefined = isUndefined;

    balsa.has = has;
    balsa.keys = keys;
    balsa.clone = clone;

    return balsa;
  };





  root['𐅉'] = root.b = new BalsaConstructor();

}.call(this));
