*This repository is a mirror of the [component](http://component.io) module [ramitos/hexrgb](http://github.com/ramitos/hexrgb). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-hexrgb`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# hexrgb

convert a hex string to a rgb array and back

## install

```bash
component install ramitos/hexrgb
```

## example

```js
var hexrgb = require('hexrgb')
var assert = require('assert')

assert.deepEqual(hexrgb.rgb('#fef'), [255, 238, 255, 1])
assert.deepEqual(hexrgb.rgb('#fffFEF'), [255, 255, 239, 1])
assert.deepEqual(hexrgb.rgb('rgb(244, 233, 100)'), [244, 233, 100, 1])
assert.deepEqual(hexrgb.rgb('rgb(100%, 30%, 90%)'), [255, 77, 229, 1])
assert.deepEqual(hexrgb.rgb('rgba(200, 20, 233, 0.2)'), [200, 20, 233, 0.2])
assert.deepEqual(hexrgb.rgb('rgba(200, 20, 233, 0)'), [200, 20, 233, 0])
assert.deepEqual(hexrgb.rgb('rgba(100%, 30%, 90%, 0.2)'), [255, 77, 229, 0.2])
assert.deepEqual(hexrgb.rgb('rgba(300, 600, 100, 3)'), [255, 255, 100, 1])
assert.deepEqual(hexrgb.rgb('rgba(8000%, 100%, 333%, 88)'), [255, 255, 255, 1])
assert.equal(hexrgb.hex([255, 10, 35]), '#FF0A23')
```
