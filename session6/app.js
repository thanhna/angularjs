const app = angular.module('app', ['ngSanitize'])

app.controller('myController', ['$scope', '$window', ($scope, $window) => {
    $scope.test = "String"
    $scope.href = "<a href='https://thanhvp.herokuapp.com/'>This is my blog</a>"

    $scope.list = []
    $scope.text = ''

    $scope.username = ''
    $scope.password = ''
    $scope.submit = () => {
        if ($scope.text.length > 0) {
            $scope.list.push($scope.text)
            $scope.text = ''
        }
    }
    $scope.login = () => {
        if ($scope.username = 'thanhdeptrai' && $scope.password == '123456') {
            $window.alert("success")
            $scope.username = ''
            $scope.password = ''
        } else {
            $window.alert("failed")
        }
    }

    $scope.value = new Date();

    $scope.students = [
        { name: 'thehalfheart@gmail.com', age: 25, gender: 'boy' },
        { name: 'freetuts.net', age: 30, gender: 'girl' },
        { name: 'Johanna', age: 28, gender: 'girl' },
        { name: 'Joy', age: 15, gender: 'girl' },
        { name: 'Mary', age: 28, gender: 'girl' },
        { name: 'Peter', age: 95, gender: 'boy' },
        { name: 'Sebastian', age: 50, gender: 'boy' },
        { name: 'Erika', age: 27, gender: 'girl' },
        { name: 'Patrick', age: 40, gender: 'boy' },
        { name: 'Samantha', age: 60, gender: 'girl' }
    ]
}])