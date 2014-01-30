'use strict';

describe("todoApp.controllers", function() {
    beforeEach(function() {
        this.addMatchers({
            toEqualData: function (expected) {
                return angular.equals(this.actual, expected);
            }
        });
    })

    beforeEach(module('todoApp'));
    beforeEach(module('todoServices'));

    describe('TodoListCtrl', function() {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET("data/todos.json")
                .respond([{title: '1', desc: 'one'}, {title:'2', desc:'two'}])
            scope = $rootScope.$new();
            ctrl = $controller('TodoListCtrl', {$scope: scope});
        }))

        it('should create "todos" model wth 2 task items fetched from xhr', function() {
            expect(scope.todos).toEqualData([]);
            $httpBackend.flush();

            expect(scope.todos).toEqualData([{title: '1', desc: 'one'}, {title:'2', desc:'two'}]);
        });

        it('should have empty search criteria', function() {
            expect(scope.searchBy).toBeNull();
        });
    });
});
