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
                .respond({})
        }))
    })
});
