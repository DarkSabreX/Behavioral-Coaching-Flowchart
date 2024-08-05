'use strict';

angular.module('bflow')
    .config(function ($mdThemingProvider) {

        var hitMap = $mdThemingProvider.extendPalette('red', {
            '50': '#FFF9C4'
        });
        var missMap = $mdThemingProvider.extendPalette('green', {
            '50': '#FFF9C4'
        });
        var buttonsMap = $mdThemingProvider.extendPalette('deep-purple', {
            '50': '#FFF9C4'
        });


        $mdThemingProvider.definePalette('hit', hitMap);
        $mdThemingProvider.definePalette('miss', missMap);
        $mdThemingProvider.definePalette('buttons', buttonsMap);


        $mdThemingProvider.theme('default')
            .warnPalette('deep-purple')
            .accentPalette('buttons');
        
        $mdThemingProvider.theme('flow')
            .warnPalette('hit')
            .accentPalette('miss');
        
        $mdThemingProvider.theme('buttons')
            .primaryPalette('indigo')    
            .warnPalette('purple')
            .accentPalette('deep-purple');

        $mdThemingProvider.theme('hit')
            .primaryPalette('hit');
        
        $mdThemingProvider.theme('miss')
            .primaryPalette('miss');

        $mdThemingProvider.alwaysWatchTheme(true);
    });    