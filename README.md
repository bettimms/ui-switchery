# ui-switchery
#### AngularJS directive for [Switchery](https://github.com/abpetkov/switchery)


## Description

ui-switchery is a simple angularjs directive, wrapper for [switchery.js](https://github.com/abpetkov/switchery).
Solves known problems(of other libraries/directives) with ng-model synchronization!


![Preview](http://i.imgur.com/0PcuTbO.jpg)

## Installation

##### Standalone:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/switchery/0.8.2/switchery.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/switchery/0.8.2/switchery.js"></script>
<script src="../src/js/ui.switchery.js"></script>
```

##### Bower:

```shell
$ bower install ui-switchery
```

## Usage

```js
angular.module("app", ["ui.switchery"]);
```

###### Note: ng-model is required
```html
<input type="checkbox" ui-switchery ng-model="switch.on"/>
```

## Usage with options

```html
<input type="checkbox"  ui-switchery="{color:'skyblue'}" ng-model="switch.on"/>
<input type="checkbox"  ui-switchery="options" ng-model="switch.on"/>
```

- `color` : color of the switch element (HEX or RGB value)
- `secondaryColor` : secondary color for background color and border, when the switch is off
- `jackColor` : default color of the jack/handle element
- `jackSecondaryColor` : color of unchecked jack/handle element
- `className` : class name for the switch element (by default styled in switchery.css)
- `disabled` : enable or disable click events and changing the state of the switch (boolean value)
- `disabledOpacity` : opacity of the switch when it's disabled (0 to 1)
- `speed` : length of time that the transition will take, ex. '0.4s', '1s', '2.2s' (Note: transition speed of the handle is twice shorter)
- `size` : size of the switch element (small or large)

##### Enable/Disable


```html
<input type="checkbox" ng-model="switch.on" ng-disabled="switch.disabled"/>
```


##### On change:

```html
<input type="checkbox" ng-model="switch.on" ng-change="onChangeEvent()"/>
```

## Contact

[Twitter](https://twitter.com/bettimms), [GitHub](https://github.com/bettimms).


## License

The MIT License (MIT)

Copyright (c) 2017 Betim S.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
