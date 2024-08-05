'use strict';

angular.module('bflow')
    .component('bflowmap', {
        bindings: { behaviors: '<', categories: '<' },
        templateUrl: 'app/pages/bflowmap.html'
     });