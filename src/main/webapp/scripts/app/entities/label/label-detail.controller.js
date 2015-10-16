'use strict';

angular.module('samplegradleApp')
    .controller('LabelDetailController', function ($scope, $rootScope, $stateParams, entity, Label, Operation) {
        $scope.label = entity;
        $scope.load = function (id) {
            Label.get({id: id}, function(result) {
                $scope.label = result;
            });
        };
        var unsubscribe = $rootScope.$on('samplegradleApp:labelUpdate', function(event, result) {
            $scope.label = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
