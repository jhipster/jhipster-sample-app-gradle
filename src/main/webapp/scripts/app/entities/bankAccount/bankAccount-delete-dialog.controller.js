'use strict';

angular.module('sampleGradleApp')
	.controller('BankAccountDeleteController', function($scope, $uibModalInstance, entity, BankAccount) {

        $scope.bankAccount = entity;
        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        $scope.confirmDelete = function (id) {
            BankAccount.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };

    });
