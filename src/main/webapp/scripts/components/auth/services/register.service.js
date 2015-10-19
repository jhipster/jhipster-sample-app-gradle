'use strict';

angular.module('sampleGradleApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


