'use strict';

angular.module('bflow')
    .service('BFlowchartService', function ($http) { 

        var service = {
            getAllBehaviors: function () {
                return $http.get('data/bflowchart.json', { cache: true }).then(function (resp) {
                    return resp.data;
                });
            },

            getBehavior: function (id) {
                function behaviorMatchesParam(behavior) {
                    return behavior.id === behavior;
                }

                return service.getAllBehaviors().then(function (behaviors) {
                    return behaviors.find(behaviorMatchesParam)
                });
            },

            getAllCategories: function () {
                return $http.get('data/bcat.json', { cache: true }).then(function (resp) {
                    return resp.data;
                });
            },

            getCategory: function (id) {
                function categoryMatchesParam(category) {
                    return category.id === category;
                }

                return service.getAllCategories().then(function (categories) {
                    return categories.find(categoryMatchesParam)
                });
            },
        }

        return service;
    })