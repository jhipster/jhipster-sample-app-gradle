'use strict';

angular.module('sampleGradleApp').controller('OperationDialogController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Operation', 'BankAccount', 'Label',
        function($scope, $stateParams, $modalInstance, entity, Operation, BankAccount, Label) {

        $scope.operation = entity;
        $scope.bankaccounts = BankAccount.query();
        $scope.labels = Label.query();
        $scope.load = function(id) {
            Operation.get({id : id}, function(result) {
                $scope.operation = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('sampleGradleApp:operationUpdate', result);
            $modalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.operation.id != null) {
                Operation.update($scope.operation, onSaveSuccess, onSaveError);
            } else {
                Operation.save($scope.operation, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $modalInstance.dismiss('cancel');
        };
}]);
