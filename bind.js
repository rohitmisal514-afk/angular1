// Define AngularJS app
var app = angular.module("studentApp", []);

// Define Controller
app.controller("studentcontroller", function ($scope) {
    $scope.student = {
        name: "John Doe",
        roll: "101",
        course: "Computer Science"
    };
});