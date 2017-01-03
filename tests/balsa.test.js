const B = require('../balsa');

let fail = 0;
let pass = 0;

const assert = function(expression, message) {
  if (expression) {
    pass++;
  } else {
    fail++;
  }

  console.log(expression ? '    PASS' : '--> FAIL', message);
};

const testBlock = (message, fn) => {
  console.log(`\r\n\r\n${message}\r\n`);
  fn();
  console.log();
};

const end = () => {
  console.log(`\r\n${pass} tests passed`);
  console.log(`${fail} tests failed`);
  console.log();
};


/**
 * isUndefined
 */
testBlock('When using the "isUndefined" method:', function() {
  assert(!B.isUndefined(1), 'It should return false if the value is a number');
  assert(!B.isUndefined(0), 'It should return false if the value is the number zero');
  assert(!B.isUndefined(false), 'It should return false if the value is a boolean');
  assert(!B.isUndefined('string'), 'It should return false if the value is a string');
  assert(!B.isUndefined({ foo: 'bar' }), 'It should return false if the value is an object');
  assert(!B.isUndefined([1 , 2, 3]), 'It should return false if the value is an array');
  assert(!B.isUndefined(null), 'It should return false if the value is null');
  assert(B.isUndefined(), 'It should return true if called with no value');
  assert(B.isUndefined(undefined), 'It should return true if the value is the type "undefined"');

  var foo;

  assert(B.isUndefined(foo), 'It should return true if the value is not defined');
});


/**
 * isString
 */
testBlock('When using the "isString" method:', function() {
  assert(!B.isString(1), 'It should return false if the value is a number');
  assert(!B.isString(0), 'It should return false if the value is the number zero');
  assert(!B.isString(false), 'It should return false if the value is a boolean');
  assert(!B.isString({ foo: 'bar' }), 'It should return false if the value is an object');
  assert(!B.isString(null), 'It should return false if the value is null');
  assert(!B.isString(), 'It should return false if called with no value');
  assert(!B.isString(undefined), 'It should return false if the value is the type "undefined"');

  assert(B.isString('string'), 'It should return true if the value is a string');
  assert(B.isString(''), 'It should return true if the value is an empty string');
});


/**
 * isArray
 */
testBlock('When using the "isArray" method:', function() {
  assert(!B.isArray(1), 'It should return false if the value is a number');
  assert(!B.isArray(false), 'It should return false if the value is a boolean');
  assert(!B.isArray('string'), 'It should return false if the value is a string');
  assert(!B.isArray({ foo: 'bar' }), 'It should return false if the value is an object');
  assert(!B.isArray(null), 'It should return false if the value is null');
  assert(!B.isArray(), 'It should return false if called with no value');
  assert(!B.isArray(undefined), 'It should return false if the value is the type "undefined"');

  assert(B.isArray([]), 'It should return true if the value is an array');
});


/**
 * pick
 */
testBlock('When using the "pick" method:', function() {
  let testObj = {
    foo: 1,
    bar: 2,
    hello: 'world'
  };

  let result = B.pick(testObj, 'hello');

  assert(result.hasOwnProperty('hello'), 'The returned object should contain the chosen property');
  assert(Object.keys(result).length === 1 && !result.hasOwnProperty('foo') && !result.hasOwnProperty('bar'), 'The returned object should only contain the chosen property');

  let result2 = B.pick(testObj, ['foo', 'bar']);

  assert(result2.hasOwnProperty('foo') && result2.hasOwnProperty('bar'), 'If the keys argument is an array, the returned object should contain the chosen property');

  assert(Object.keys(result2).length === 2 && !result2.hasOwnProperty('hello'), 'If the keys argument is an array, the returned object should only contain the chosen property');
});

end();
