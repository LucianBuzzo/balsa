; (function() {
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

  var chainFunctions = [map, forEach];

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

    return balsa;
  };





  root['𐅉'] = root.b = new BalsaConstructor();

}.call(this));
