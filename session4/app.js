const app = angular.module('app', [])
app.controller("myController", ['$scope', 'stringService', ($scope, stringService) => {
    $scope.input = ""
    $scope.AddSpace = input => {
        $scope.output = stringService.AddSpace(input)
    }
    $scope.Lower = input => {
        $scope.output = stringService.toLower(input)
    }
}])