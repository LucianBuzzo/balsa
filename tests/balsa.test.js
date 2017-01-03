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
