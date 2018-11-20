var app = angular.module("app", [])
app.controller("myController", ['$scope', '$location', ($scope, $location) => {
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
    var absUrl = $location.absUrl(); 
    console.log('absUrl :', absUrl);
    var url = $location.url()
    console.log('url :', url);
    var path = $location.path()
    console.log('path :', path);
    var search = $location.search()
    console.log('search :', search);
    // var path = $location.path() //=> 'some/path'
    // var search = $location.search() => '{foo: 'bar', baz: 'xoxo'}'
}])