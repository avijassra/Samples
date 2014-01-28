var keeperApp = angular.module('TodoApp', ['ngRoute']);

keeperApp.service('TodoSrvc', function () {
    return {
        get: function () {
            return [{
                title: 'F#',
                desc: 'learn f#'
            }, {
                title: 'lib',
                desc: 'return books'
            }];
        }
    };
});

keeperApp.controller('TodoCtrl', ['$scope', 'TodoSrvc', function ($scope, TodoSrvc) {
    $scope.searchBy = null;
    $scope.isDisabled = !$scope.searchBy;
    $scope.notes = TodoSrvc.get();

    $scope.onSearch = function () {
        // to be implemented
    };

    $scope.$watch('searchBy', function () {
        $scope.isDisabled = !$scope.searchBy;
    });
}]);