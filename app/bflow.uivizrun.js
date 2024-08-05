'use strict';

angular.module('bflow')
    .run(function ($uiRouter) {
        var vis = window['ui-router-visualizer'];
        vis.visualizer($uiRouter);
    });