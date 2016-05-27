(function() {
    'use strict';

    angular
        .module('jhipsterGradleSampleApplicationApp')
        .controller('BankAccountDetailController', BankAccountDetailController);

    BankAccountDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'BankAccount', 'User', 'Operation'];

    function BankAccountDetailController($scope, $rootScope, $stateParams, entity, BankAccount, User, Operation) {
        var vm = this;

        vm.bankAccount = entity;

        var unsubscribe = $rootScope.$on('jhipsterGradleSampleApplicationApp:bankAccountUpdate', function(event, result) {
            vm.bankAccount = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
