 'use strict';

angular.module('sampleGradleApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleGradleApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleGradleApp-params')});
                }
                return response;
            }
        };
    });
