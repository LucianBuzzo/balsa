const TinyTest = function() {
  this.failed = 0;
  this.passed = 0;
};

TinyTest.prototype.assert = function(expression, message) {
  if (expression) {
    this.passed++;
  } else {
    this.failed++;
  }

  console.log(expression ? '    PASS' : '--> FAIL', message);
};

TinyTest.prototype.block = (message, fn) => {
  console.log(`\r\n\r\n${message}\r\n`);
  fn();
  console.log();
};

TinyTest.prototype.end = function() {
  console.log(`\r\n${this.passed} tests passed`);
  console.log(`${this.failed} tests failed`);
  console.log();
};

module.exports = new TinyTest();
