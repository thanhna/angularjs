const app = angular.module("app", [])

app.controller('MyController', ['$scope', ($scope) => {
    $scope.mapVietnam = [
        {
            "name": "Hà Nội",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Hà Giang",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Cao Bằng",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Bắc Kạn",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Tuyên Quang",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Lào Cai",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Điện Biên",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Lai Châu",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Sơn La",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Yên Bái",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Hòa Bình",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Thái Nguyên",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Lạng Sơn",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Quảng Ninh",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Bắc Giang",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Phú Thọ",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Vĩnh Phúc",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Bắc Ninh",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Hải Dương",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Hải Phòng",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Hưng Yên",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Thái Bình",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Hà Nam",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Nam Định",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Ninh Bình",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Thanh Hóa",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Nghệ An",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Hà Tĩnh",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Quảng Bình",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Quảng Trị",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Thừa Thiên–Huế",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Đà Nẵng",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Quảng Nam",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Quảng Ngãi",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Bình Định",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Phú Yên",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Khánh Hòa",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Ninh Thuận",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Bình Thuận",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Kon Tum",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Gia Lai",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Đắk Lắk",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Đắk Nông",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Lâm Đồng",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Bình Phước",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Tây Ninh",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Bình Dương",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Đồng Nai",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Bà Rịa–Vũng Tàu",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Thành phố Hồ Chí Minh",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Long An",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Tiền Giang",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Bến Tre",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Trà Vinh",
            "country": "VN",
            "date": Date.now(),
            "status": false
        },
        {
            "name": "Vĩnh Long",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Đồng Tháp",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "An Giang",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Kiên Giang",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Cần Thơ",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Hậu Giang",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Sóc Trăng",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Bạc Liêu",
            "country": "VN",
            "date": Date.now(),
            "status": true
        },
        {
            "name": "Cà Mau",
            "country": "VN",
            "date": Date.now(),
            "status": true
        }
    ]
    $scope.limitRow = 3
    $scope.Like = 0
    $scope.Dislike = 0
    $scope.Minus = $scope.Like - $scope.Dislike

    $scope.likeFun = () => {
        $scope.Like++
        $scope.Minus = $scope.Like - $scope.Dislike
    }
    $scope.dislikeFun = () => {
        $scope.Dislike++
        $scope.Minus = $scope.Like - $scope.Dislike
    }
}])

app.filter('status', () => {
    return (input) => {
        if (input == true) return "Kích hoạt"
        else return "Khóa"
    }
})