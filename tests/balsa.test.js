/* eslint no-undefined: "off" */
const T = require('./tinyTest');
const B = require('../balsa');


/**
 * isUndefined
 */
T.block('When using the "isUndefined" method:', function() {
  T.assert(!B.isUndefined(1), 'It should return false if the value is a number');
  T.assert(!B.isUndefined(0), 'It should return false if the value is the number zero');
  T.assert(!B.isUndefined(false), 'It should return false if the value is a boolean');
  T.assert(!B.isUndefined('string'), 'It should return false if the value is a string');
  T.assert(!B.isUndefined({ foo: 'bar' }), 'It should return false if the value is an object');
  T.assert(!B.isUndefined([1, 2, 3]), 'It should return false if the value is an array');
  T.assert(!B.isUndefined(null), 'It should return false if the value is null');
  T.assert(B.isUndefined(), 'It should return true if called with no value');
  T.assert(B.isUndefined(undefined), 'It should return true if the value is the type "undefined"');

  var foo;

  T.assert(B.isUndefined(foo), 'It should return true if the value is not defined');
});


/**
 * isString
 */
T.block('When using the "isString" method:', function() {
  T.assert(!B.isString(1), 'It should return false if the value is a number');
  T.assert(!B.isString(0), 'It should return false if the value is the number zero');
  T.assert(!B.isString(false), 'It should return false if the value is a boolean');
  T.assert(!B.isString({ foo: 'bar' }), 'It should return false if the value is an object');
  T.assert(!B.isString(null), 'It should return false if the value is null');
  T.assert(!B.isString(), 'It should return false if called with no value');
  T.assert(!B.isString(undefined), 'It should return false if the value is the type "undefined"');

  T.assert(B.isString('string'), 'It should return true if the value is a string');
  T.assert(B.isString(''), 'It should return true if the value is an empty string');
});


/**
 * isArray
 */
T.block('When using the "isArray" method:', function() {
  T.assert(!B.isArray(1), 'It should return false if the value is a number');
  T.assert(!B.isArray(false), 'It should return false if the value is a boolean');
  T.assert(!B.isArray('string'), 'It should return false if the value is a string');
  T.assert(!B.isArray({ foo: 'bar' }), 'It should return false if the value is an object');
  T.assert(!B.isArray(null), 'It should return false if the value is null');
  T.assert(!B.isArray(), 'It should return false if called with no value');
  T.assert(!B.isArray(undefined), 'It should return false if the value is the type "undefined"');

  T.assert(B.isArray([]), 'It should return true if the value is an array');
});


/**
 * isObject
 */
T.block('When using the "isObject" method:', function() {
  T.assert(!B.isObject(1), 'It should return false if the value is a number');
  T.assert(!B.isObject(false), 'It should return false if the value is a boolean');
  T.assert(!B.isObject('string'), 'It should return false if the value is a string');
  T.assert(!B.isObject([]), 'It should return false if the value is an array');
  T.assert(!B.isObject(function() { }), 'It should return false if the value is a function');
  T.assert(!B.isObject(null), 'It should return false if the value is null');
  T.assert(!B.isObject(), 'It should return false if called with no value');
  T.assert(!B.isObject(undefined), 'It should return false if the value is the type "undefined"');

  T.assert(B.isObject({ foo: 'bar' }), 'It should return true if the value is an object');
});


/**
 * has
 */
T.block('When using the "has" method:', function() {
  const testObj = { foo: 'bar' };
  T.assert(!B.has(testObj, 'hello'), 'It should return false if the object doesn\'t contain the given key');
  T.assert(B.has(testObj, 'foo'), 'It should return true if the object contains the given key');
});


/**
 * keys
 */
T.block('When using the "keys" method:', function() {
  const testObj = {
    foo: 'bar',
    hello: 'world'
  };

  const result = B.keys(testObj);

  T.assert(result.length, 'It should return an array with a length equal to the number of object keys');
  T.assert(result.indexOf('foo') > -1 && result.indexOf('foo') > -1, 'It should return an array containing the object\'s keys');
});


/**
 * clone
 */
T.block('When using the "clone" method:', function() {
  let initial = { foo: 'bar' };
  let result = B.clone(initial);

  T.assert(initial !== result, 'It should return a different object to the one provided');

  initial.hello = 'world';

  T.assert(!result.hasOwnProperty('hello'), 'Modifying the original object should not affect the cloned object');
});


/**
 * pick
 */
T.block('When using the "pick" method:', function() {
  let testObj = {
    foo: 1,
    bar: 2,
    hello: 'world'
  };

  let result = B.pick(testObj, 'hello');

  T.assert(result.hasOwnProperty('hello'), 'The returned object should contain the chosen property');
  T.assert(Object.keys(result).length === 1 && !result.hasOwnProperty('foo') && !result.hasOwnProperty('bar'), 'The returned object should only contain the chosen property');

  let result2 = B.pick(testObj, ['foo', 'bar']);

  T.assert(result2.hasOwnProperty('foo') && result2.hasOwnProperty('bar'), 'If the keys argument is an array, the returned object should contain the chosen property');

  T.assert(Object.keys(result2).length === 2 && !result2.hasOwnProperty('hello'), 'If the keys argument is an array, the returned object should only contain the chosen property');
});

T.end();
