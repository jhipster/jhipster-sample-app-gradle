'use strict';

angular.module('samplegradleApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


