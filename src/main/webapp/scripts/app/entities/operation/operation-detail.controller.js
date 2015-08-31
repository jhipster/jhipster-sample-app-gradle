'use strict';

angular.module('samplegradleApp')
    .controller('OperationDetailController', function ($scope, $rootScope, $stateParams, entity, Operation, BankAccount, Label) {
        $scope.operation = entity;
        $scope.load = function (id) {
            Operation.get({id: id}, function(result) {
                $scope.operation = result;
            });
        };
        $rootScope.$on('samplegradleApp:operationUpdate', function(event, result) {
            $scope.operation = result;
        });
    });
