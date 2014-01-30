var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('TodoListCtrl', ['$scope', 'Todo', function ($scope, Todo) {
    $scope.searchBy = null;
    $scope.isDisabled = !$scope.searchBy;
    $scope.notes = Todo.query();

    $scope.onSearch = function () {
        // to be implemented
    };

    $scope.$watch('searchBy', function () {
        $scope.isDisabled = !$scope.searchBy;
    });
}]);
