'use strict';

angular.module('samplegradleApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
