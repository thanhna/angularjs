const app = angular.module("app", [])

app.controller('myController', ['$scope', ($scope) => {
    $scope.title = "Học angularjs"
    $scope.table = [
        {
            name: "Hoàng",
            price: 15000000,
            status: false,
            gender: "male",
            dateOfBirth: new Date('12/3/1989')
        },
        {
            name: "Tuấn",
            price: 17000000,
            status: true,
            gender: "male",
            dateOfBirth: new Date('12/2/1970')
        },
        {
            name: "Hương",
            price: 29000000,
            status: false,
            gender: "female",
            dateOfBirth: new Date('1/3/1982')
        },
        {
            name: "Hoàng",
            price: 15000000,
            status: true,
            gender: "male",
            dateOfBirth: new Date('5/3/2000')
        },
        {
            name: "Giang",
            price: 7000000,
            status: false,
            gender: "female",
            dateOfBirth: new Date('9/8/1603')
        }
    ]
    $scope.sortColumn = 'name'
    $scope.reverse = false
    $scope.seachText = ''
    $scope.hidden = false
    $scope.emloyeeView = "table1.html"

    $scope.sortData = (column) => {
        if (column === $scope.sortColumn) {
            $scope.reverse = !$scope.reverse
        }
        else {
            $scope.reverse = false
            $scope.sortColumn = column
        }

    }
    $scope.getSortClass = (column) => {
        if (column == $scope.sortColumn) {
            return $scope.reverse ? 'arrow-up' : 'arrow-down'
        }
        return ''
    }

}])
app.filter("status", () => {
    return input => {
        if (input == true) return "Kích hoạt"
        else return "Khóa"
    }
})