# angular-amcharts

Angular directive for angularjs. This repo is for distribution on bower.

### bower

```shell
bower install angular-amcharts --save
```

Include `amcharts.js` plus files you will be using for each chart type, i.e.
`serial.js`, `pie.js`:

```html
<script src="/bower_components/amcharts3/amcharts/amcharts.js"></script>
<script src="/bower_components/amcharts3/amcharts/serial.js"></script>
```


Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-amcharts/angular-route.js"></script>
```

Then add `ngRoute` as a dependency for your app:

```javascript
angular.module('myApp', ['amChart']);
```

### How use
```html
<am-chart options="options"></am-chart>
```

```javascript
$scope.options = {
    "type": "pie",
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "titleField": "country",
    "valueField": "litres",
    "fontSize": 12,
    "theme": "chalk",
    "allLabels": [],
    "balloon": {},
    "titles": [],
    "dataProvider": [
        {
            "country": "Czech Republic",
            "litres": "356.9"
        },
        {
            "country": "Ireland",
            "litres": 131.1
        },
        {
            "country": "Germany",
            "litres": 115.8
        },
        {
            "country": "Australia",
            "litres": 109.9
        },
        {
            "country": "Austria",
            "litres": 108.3
        },
        {
            "country": "UK",
            "litres": 65
        },
        {
            "country": "Belgium",
            "litres": "20"
        }
    ]
 };
```

## License

The MIT License (MIT)

Copyright (c) 2016 Jonas Ribeiro

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