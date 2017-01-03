const B = require('../balsa');

let fail = 0;
let pass = 0;

const assert = function(expression, message) {
  if (expression) {
    pass++;
  } else {
    fail++;
  }

  console.log('    ' + (expression ? 'PASS' : 'FAIL'), message);
};

const end = () => {
  console.log(`\r\n${pass} tests passed`);
  console.log(`${fail} tests failed`);
};

/**
 * isUndefined
 */
(function() {
  console.log('When using the "isUndefined" method:');

  assert(!B.isUndefined(1), 'It should return false if the value is a number');
  assert(!B.isUndefined(0), 'It should return false if the value is the number zero');
  assert(!B.isUndefined(false), 'It should return false if the value is a boolean');
  assert(!B.isUndefined({ foo: 'bar' }), 'It should return false if the value is an object');
  assert(!B.isUndefined(null), 'It should return false if the value is null');
  assert(B.isUndefined(), 'It should return true if called with no value');
  assert(B.isUndefined(undefined), 'It should return true if the value is the type "undefined"');

  var foo;

  assert(B.isUndefined(foo), 'It should return true if the value is not defined');
}());

(function() {
  console.log('When using the "pick" method:');
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
}());

end();
