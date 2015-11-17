TargetOptions
===========

#### Expand the HTML Target attribute and give you a new option called `_options`.

Sometime, users are filling out long forms or reading a long website with lot of links and sometimes they don't want to click on that links because they think they will loose the actual page they are reading or filling out, so, why don't give them the possibility to choose between open the link in a new tab, in the same window or in an iframe into the same page? With a single click or tap.

## Installation

Download and include `jquery.targetOptions.js` in your document after including jQuery.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="/path/to/jquery.targetOptions.min.js"></script>
```

## CSS

Download and include the `.CSS` files into your CSS folder. The script will automatically include the CSS depending on your theme configurations.




## Usage


Just like normal target options inlcude the value `_options` to give the user the posibility to choose how they want to open that link. Giving the user the final decision:

```html
<a href="#" target="_options">Text</a>
```


Normal attributes:
```html
<a target="_blank|_self|_parent|_top">
```


### Via JavaScript

To call the targetOptions plugin, simply select your `<a>` target element with jQuery and do the following:

```javascript
$('a').targetOptions();
```

or if you prefer:

```javascript
$('a[target="_options"]').targetOptions();
```

### Notes

What targetOptions.js will do is create a wraping div for each `<a target="_options">` link. That wrapping div will be in a relative-position and will hide all the options until click over the link. The normal click event over the link will be blocked out and will show you the options instead.


## Options

Options can be passed like this:

```javascript
$('a').targetOptions({
	title: 'Open link in',
    theme: 'ios', //default is auto detect
    blank: {
    	text: "A new Window",
        class: "icon icon-window"
    },
    self:{
    	display: false
    },
    frame{
    	display: true,
        text: "A frame"
    }
});
```

<table class="table table-bordered table-striped">
	<thead>
		<tr>
			<th style="width: 100px;">Name</th>
			<th style="width: 100px;">type</th>
			<th style="width: 150px;">default</th>
			<th>description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Title</td>
			<td>String</td>
			<td>''</td>
			<td>You can provide a title to the options</td>
		</tr>
		<tr>
			<td>Theme</td>
			<td>String</td>
			<td>auto</td>
			<td>You can choose diferent themes like: auto, ios, mac, ie, chrome or biuld your own.<br>auto: means the will detect your browser and OS and give a look and feel similar to your OS and browser.</td>
		</tr>
        <tr>
			<td>blank</td>
			<td>Object</td>
			<td>display: true,<br>text: (string),<br>class: null</td>
			<td>You can specify:<br><strong>display:</strong> true | false.<br><strong>text:</strong> Text to show in this option.<br><strong>class:</strong> you can add css class.</td>
		</tr>
        <tr>
			<td>self</td>
			<td>Object</td>
			<td>display: true,<br>text: (string),<br>class: null</td>
			<td>You can specify:<br><strong>display:</strong> true | false.<br><strong>text:</strong> Text to show in this option.<br><strong>class:</strong> you can add css class.</td>
		</tr>
        <tr>
			<td>parent</td>
			<td>Object</td>
			<td>display: false,<br>text: (string),<br>class: null</td>
			<td>You can specify:<br><strong>display:</strong> true | false.<br><strong>text:</strong> Text to show in this option.<br><strong>class:</strong> you can add css class.</td>
		</tr>
        <tr>
			<td>top</td>
			<td>Object</td>
			<td>display: false,<br>text: (string),<br>class: null</td>
			<td>You can specify:<br><strong>display:</strong> true | false.<br><strong>text:</strong> Text to show in this option.<br><strong>class:</strong> you can add css class.</td>
		</tr>
        <tr>
			<td>frame</td>
			<td>Object</td>
			<td>Diplay an iFrame into the current page.<br>display: false,<br>text: (string),<br>class: null</td>
			<td>You can specify:<br><strong>display:</strong> true | false.<br><strong>text:</strong> Text to show in this option.<br><strong>class:</strong> you can add css class.</td>
		</tr>
	</tbody>
</table>

## Contributing

Please feel free to contribute, it will be awesome to see how far and clever we can be all together  ;)


LICENSE
=======

The MIT License (MIT)

Copyright (c) 2015 Matias Tofful.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
