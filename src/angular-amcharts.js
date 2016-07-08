'use strict';

angular.module('amCharts', []).directive('amCharts', function () {
    return {
        replace: true,
        scope: {
            options: '=',
            id: '@'
        },
        template: "<div class='chart'></div>",
        link: function (scope, $el, controller) {
            var id = guid();
            $el.attr('id', id);
            renderChart(scope.options);

            scope.$watch('options', function (newValue, oldValue) {
                if (id === $el[0].id || !id) {
                    renderChart(newValue);
                }
            });

            //Function to render chart
            function renderChart(amChartOptions) {
                var chartOptions = {};
                var option = amChartOptions || scope.options;
                if (scope.options && scope.options.data) {
                    chartOptions.dataProvider = option.data;
                    //Making object options chart
                    var chartKeys = Object.keys(option);
                    for (var i = 0; i < chartKeys.length; i++) {
                        if (chartKeys[i] !== "theme") {
                            if (typeof option[chartKeys[i]] !== 'object' && typeof option[chartKeys[i]] !== 'function') {
                                chartOptions[chartKeys[i]] = option[chartKeys[i]];
                            } else {
                                chartOptions[chartKeys[i]] = angular.copy(option[chartKeys[i]]);
                            }
                        }
                    }
                    //Render AmCharts to element id
                    AmCharts.makeChart(id, chartOptions);
                }
            }

            function guid() {
                if (scope.id) return scope.id;
                function s4() {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                }

                return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
            }

        }
    };
});