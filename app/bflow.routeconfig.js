'use strict';

angular.module('bflow')
    .config(function ($urlRouterProvider) {
        // if the path doesn't match any of the urls you configured
        // otherwise will take care of routing the user to the specified url
        $urlRouterProvider.otherwise('/starthere');
       
    })
    .config(function ($stateProvider) {


        var states = [
            {
                name: 'bflowcontainer',
                component: 'container',
                resolve: {
                    behaviors: function (BFlowchartService) {
                        return BFlowchartService.getAllBehaviors();
                    }
                }
            },
            {
                name: 'starthere',
                url: '/starthere',
                parent: 'bflowcontainer',
                component: 'starthere',
                resolve: {
                    behaviors: function (BFlowchartService) {
                        return BFlowchartService.getAllBehaviors();
                    }
                }
            },
            {
                name: 'step',
                url: '/Step_{stepId}',
                parent: 'bflowcontainer',
                component: 'stepthru',
                resolve: {
                    behaviors: function (BFlowchartService) {
                        return BFlowchartService.getAllBehaviors();
                    },
                    behavior: function (behaviors, $stateParams) {
                        return behaviors.find(function (behavior) {
                            return behavior.id === $stateParams.stepId;
                        });
                    },
                    categories: function (BFlowchartService) {
                        return BFlowchartService.getAllCategories();
                    }
                }
            },
            {
                name: 'action',
                url: '/Recommended_Action_{stepId}',
                parent: 'bflowcontainer',
                component: 'action',
                resolve: {
                    behaviors: function (BFlowchartService) {
                        return BFlowchartService.getAllBehaviors();
                    },
                    behavior: function (behaviors, $stateParams) {
                        return behaviors.find(function (behavior) {
                            return behavior.id === $stateParams.stepId;
                        });
                    },
                    categories: function (BFlowchartService) {
                        return BFlowchartService.getAllCategories();
                    }
                }
            },
            {
                name: 'tree',
                url: '/BehaviorMap',
                parent: 'bflowcontainer',
                component: 'bflowmap',
                resolve: {
                    behaviors: function (BFlowchartService) {
                        return BFlowchartService.getAllBehaviors();
                    },
                    categories: function (BFlowchartService) {
                        return BFlowchartService.getAllCategories();
                    }
                }
            }
        ]

        // Loop over the state definitions and register them
        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });