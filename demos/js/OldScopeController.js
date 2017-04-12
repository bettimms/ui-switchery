/**
 * Created by betim on 4/11/2017.
 */

(function (app) {
    app.controller("TestController", ["$scope", TestController])
    function TestController($scope) {
        $scope.switchA = {};
        $scope.switchA.on = true;
    }

})(angular.module("app"));