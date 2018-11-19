const app = angular.module('app', [])
app.controller('myController', ['$scope', $scope => {
    $scope.test = 'Welcome'
    $scope.so1 = ''
    $scope.so2 = ''

    $scope.divHidden = 'display: none'
    $scope.showResult = () => {
        if ($scope.calForm.$valid) {
            $scope.phepcong = Number($scope.so1) + Number($scope.so2)
            $scope.pheptru = Number($scope.so1) - Number($scope.so2)
            $scope.phepnhan = Number($scope.so1) * Number($scope.so2)
            $scope.phepchia = Number($scope.so1) / Number($scope.so2)
            $scope.divHidden = 'display: block'
        }
        else $scope.divHidden = 'display: none'
    }
}])