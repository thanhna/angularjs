const app = angular.module("app", [])

const myController = $scope => {
    $scope.message = "String test"

    $scope.table = [
        { "name": "Ford", "models": ["Fiesta", "Focus", "Mustang"] },
        { "name": "BMW", "models": ["320", "X3", "X5"] },
        { "name": "Fiat", "models": ["500", "Panda"] }
    ]

    $scope.clickTest = () => {
        $scope.message = "Hello" + $scope.message
    }
}

app.directive("testDirective", () => {
    let html = "<h1> What the fuck? </h1>"
    return {
        template: html
        // templateUrl: "test.html"
    }
})

myController.$inject = ['$scope']
app.controller('myController', myController)
