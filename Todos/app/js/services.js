var keeperApp = angular.module('todoServices', ['ngResource']);

keeperApp.service('Todo', ['$resource',
    function($resource){
        return $resource('data/:taskId.json', {}, {
            query: {method:'GET', params:{taskId:'todos'}, isArray:false}
        });
    }]);