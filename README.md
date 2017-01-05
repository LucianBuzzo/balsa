# Beedrill

A micro library containing high level utility functions.

# Installation

Install `beedrill` by running:

```sh
$ npm install --save beedrill
```

# Documentation

* [beedrill](#module_beedrill)
    * [.isUndefined(value)](#module_beedrill.isUndefined)
    * [.isString(value)](#module_beedrill.isString)
    * [.isArray(value)](#module_beedrill.isArray)
    * [.isObject(value)](#module_beedrill.isObject)
    * [.has(object, key)](#module_beedrill.has)
    * [.keys(object)](#module_beedrill.keys)
    * [.clone(value)](#module_beedrill.clone)
    * [.pick(object, keys)](#module_beedrill.pick)


<a name="module_beedrill.isUndefined"></a>

### beedrill.isUndefined(value)
Returns a boolean indicating if the value is undefined.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Mixed</code> | The value to check |

**Example**  
```js
const B = require('beedrill');

var foo;

B.isUndefined(foo); // --> true
```


<a name="module_beedrill.isString"></a>

### beedrill.isString(value)
Returns a boolean indicating if the value is a string.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Mixed</code> | The value to check |

**Example**  
```js
const B = require('beedrill');

const foo = 'string';
const bar = 123;

B.isString(foo); // --> true
B.isString(bar); // --> false
```


<a name="module_beedrill.isArray"></a>

### beedrill.isArray(value)
Returns a boolean indicating if the value is an array.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Mixed</code> | The value to check |

**Example**  
```js
const B = require('beedrill');

const foo = 'string';
const bar = [1, 2, 3];

B.isArray(foo); // --> false
B.isArray(bar); // --> true
```


<a name="module_beedrill.isObject"></a>

### beedrill.isObject(value)
Returns a boolean indicating if the value is an object.

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Mixed</code> | The value to check |

**Example**  
```js
const B = require('beedrill');

const foo = 'string';
const bar = { hello: 'world' };

B.isObject(foo); // --> false
B.isObject(bar); // --> true
```


<a name="module_beedrill.has"></a>

### beedrill.has(object, key)
Checks if key is a direct property of object. Returns true if the key exists,
else false.

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to check |
| key | <code>String</code> | The key to check |

**Example**  
```js
const B = require('beedrill');

const foo = { hello: 'world' };

B.has(foo, 'bar'); // --> false
B.has(foo, 'hello'); // --> true
```


<a name="module_beedrill.keys"></a>

### beedrill.keys(object)
Creates an array of the own enumerable property names of object.

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to retrieve property names from |

**Example**  
```js
const B = require('beedrill');

const object = {
  hello: 'world',
  foo: 'bar'
};

B.keys(object); // --> ['hello', 'foo']
```


<a name="module_beedrill.clone"></a>

### beedrill.clone(object)
Creates a clone of a simple object.

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to clone |

**Example**  
```js
const B = require('beedrill');

const object = { foo: 'bar' };

B.clone(object); // --> { foo: 'bar' }
```


<a name="module_beedrill.pick"></a>

### beedrill.pick(object, keys)
Creates an object composed of the picked object properties. The keys parameter can either be
a single string or an array of strings.

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The source object |
| keys | <code>String / Array</code> | The property keys to pick |

**Example**  
```js
const B = require('beedrill');

const object = { 
  foo: 1,
  bar: 2,
  hello: 3
};

B.pick(object, 'foo'); // --> { foo: 1 }
B.pick(object, ['bar', 'hello']); // --> { bar: 2, hello: 3 }
```
