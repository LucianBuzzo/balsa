# Beedrill

A micro library containing high level utility functions.

# Installation

Install `beedrill` by running:

```sh
$ npm install --save beedrill
```

# Documentation


* [beedrill](#module_beedrill)
    * [~isUndefined(value)](#module_beedrill..isUndefined) ⇒ <code>Boolean</code>
    * [~isString(value)](#module_beedrill..isString) ⇒ <code>Boolean</code>
    * [~isArray(value)](#module_beedrill..isArray) ⇒ <code>Boolean</code>
    * [~isObject(value)](#module_beedrill..isObject) ⇒ <code>Boolean</code>
    * [~has(object, key)](#module_beedrill..has) ⇒ <code>undefined</code>
    * [~keys(object)](#module_beedrill..keys) ⇒ <code>Array</code>
    * [~pick(object, keys)](#module_beedrill..pick) ⇒ <code>Object</code>
    * [~clone(value)](#module_beedrill..clone) ⇒ <code>Object</code>
    * [~random(min, max)](#module_beedrill..random) ⇒ <code>Number</code>
    * [~unique(array)](#module_beedrill..unique) ⇒ <code>Array</code>

<a name="module_beedrill..isUndefined"></a>

### beedrill~isUndefined(value) ⇒ <code>Boolean</code>
Returns a boolean indicating if the value is undefined.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Boolean</code> - - true if the value is undefined, false otherwise.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Mixed</code> | Value to check. |

**Example**  
```js
const B = require('beedrill');var foo;B.isUndefined(foo); // --> true
```
<a name="module_beedrill..isString"></a>

### beedrill~isString(value) ⇒ <code>Boolean</code>
Returns a boolean indicating if the value is a string.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Boolean</code> - - true if the value is a string, false otherwise.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Mixed</code> | Value to check. |

**Example**  
```js
const B = require('beedrill');const foo = 'string';const bar = 123;B.isString(foo); // --> trueB.isString(bar); // --> false
```
<a name="module_beedrill..isArray"></a>

### beedrill~isArray(value) ⇒ <code>Boolean</code>
Returns a boolean indicating if the value is an array.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Boolean</code> - - true if the value is an array, false otherwise.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Mixed</code> | Value to check. |

**Example**  
```js
const B = require('beedrill');const foo = 'string';const bar = [1, 2, 3];B.isArray(foo); // --> falseB.isArray(bar); // --> true
```
<a name="module_beedrill..isObject"></a>

### beedrill~isObject(value) ⇒ <code>Boolean</code>
Returns a boolean indicating if the value is an object literal.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Boolean</code> - - true if the value is an object, false otherwise.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Mixed</code> | Value to check. |

**Example**  
```js
const B = require('beedrill');const foo = 'string';const bar = { hello: 'world' };B.isObject(foo); // --> falseB.isObject(bar); // --> true
```
<a name="module_beedrill..has"></a>

### beedrill~has(object, key) ⇒ <code>undefined</code>
Checks if key is a direct property of object.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>undefined</code> - - Returns true if the key exists, else false.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to check. |
| key | <code>String</code> | The key to check. |

**Example**  
```js
const B = require('beedrill');const foo = { hello: 'world' };B.has(foo, 'bar'); // --> falseB.has(foo, 'hello'); // --> true
```
<a name="module_beedrill..keys"></a>

### beedrill~keys(object) ⇒ <code>Array</code>
Creates an array of the own enumerable property names of object.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Array</code> - - An array of property names.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The object to retrieve property names from. |

**Example**  
```js
const B = require('beedrill');const object = {  hello: 'world',  foo: 'bar'};B.keys(object); // --> ['hello', 'foo']
```
<a name="module_beedrill..pick"></a>

### beedrill~pick(object, keys) ⇒ <code>Object</code>
Creates an object composed of the picked object properties.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Object</code> - - The new object.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | The source object. |
| keys | <code>String</code> &#124; <code>Array</code> | The property keys to pick. |

**Example**  
```js
const B = require('beedrill');const object = {  foo: 1,  bar: 2,  hello: 3};B.pick(object, 'foo'); // --> { foo: 1 }B.pick(object, ['bar', 'hello']); // --> { bar: 2, hello: 3 }
```
<a name="module_beedrill..clone"></a>

### beedrill~clone(value) ⇒ <code>Object</code>
Creates a clone of a simple object

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Object</code> - - The cloned object.  
**Access:** public  
**Todo**

- [ ] expand types that can be cloned using https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm


| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | The object to clone. |

**Example**  
```js
const B = require('beedrill');const object = { foo: 'bar' };B.clone(object); // --> { foo: 'bar' }
```
<a name="module_beedrill..random"></a>

### beedrill~random(min, max) ⇒ <code>Number</code>
Returns a random integer between min and max, inclusive.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Number</code> - - A random number between min and max  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>Number</code> | The lowest possible random number. |
| max | <code>Number</code> | The highest possible random number. |

**Example**  
```js
const B = require('beedrill');const num = B.random(0, 100); // --> 36
```
<a name="module_beedrill..unique"></a>

### beedrill~unique(array) ⇒ <code>Array</code>
Produces a duplicate-free version of the array, using === to test object equality.

**Kind**: inner method of <code>[beedrill](#module_beedrill)</code>  
**Returns**: <code>Array</code> - - Returns the new duplicate free array.  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array to inspect |

**Example**  
```js
const B = require('beedrill');const source = [1, 2, 3, 1, 5, 5, 3, 2, 1];const uniqueSource = B.unique(source); // -->  [1, 2, 3, 5,]
```

