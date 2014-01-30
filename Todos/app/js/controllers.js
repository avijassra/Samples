var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('TodoCtrl', ['$scope', 'Todo', function ($scope, Todo) {
    $scope.searchBy = null;
    $scope.isDisabled = !$scope.searchBy;
    Todo.query(function(data) {
        $scope.notes = data.items;
    });

    $scope.onSearch = function () {
        // to be implemented
    };

    $scope.$watch('searchBy', function () {
        $scope.isDisabled = !$scope.searchBy;
    });
}]);
