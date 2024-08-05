'use strict';

angular.module('bflow')
    .component('stepthru', {
        bindings: { behaviors: '<', behavior: '<' },
        controller: function () {
            this.isResult = false;
            this.nextStep = function () {
                return parseInt(this.behavior.id)+1;  
            };
        },
        templateUrl: 'app/pages/stepthru.html'
    });