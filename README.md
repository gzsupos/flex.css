# [Flex.css]

Flex based CSS grid

### Browser support
* Chrome
* Edge
* Firefox
* Internet Explorer 10+
* Opera
* Safari 9.1+

### Install
Using bower:
```sh
bower install flex.css
```

### How to use
Either include `flex.min.css` file located in the dist folder:

```html
<link rel="stylesheet" href="YOUR_STYLE_PATH/flex.min.css">
```

or include the `flex.scss` to customize it, do not modify the `_variables.scss` instead add those changes to your own settings to override.

### Development
Install the npm packages described in the `package.json` and verify that it works:

```sh
$ git clone https://github.com/gzsupos/flex.css.git
$ npm i -g gulp
$ npm install
$ gulp
```
