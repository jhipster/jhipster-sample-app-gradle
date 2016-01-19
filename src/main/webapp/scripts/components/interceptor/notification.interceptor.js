 'use strict';

angular.module('samplegradleApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-samplegradleApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-samplegradleApp-params')});
                }
                return response;
            }
        };
    });
