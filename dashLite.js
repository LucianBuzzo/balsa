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

  var LiteDashConstructor = function() {

    function liteDash(val) {
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

    liteDash.map = map;
    liteDash.forEach = forEach;

    return liteDash;
  };





  root.l = new LiteDashConstructor();

}.call(this));
