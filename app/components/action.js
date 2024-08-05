'use strict';

angular.module('bflow')
    .component('action', {
        bindings: { behaviors: '<', behavior: '<' },
        controller: function () {
            this.nextStep = function () {
                return parseInt(this.behavior.id)+1;  
            };
        },
        templateUrl: 'app/pages/action.html'
    });