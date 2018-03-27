var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    var products = [{
        name: "Chacha",
        price: 10,
        imageurl: "images/images (1).jpg",
        check: false

    },
    {
        name: "Lays",
        price: 20,
        imageurl: "images/download.jpg",
        check:false
    },
    {
        name: "Tropicana",
        price: 15,
        imageurl: "images/images (2).jpg",
        check: false


    },
    {
        name: "Kurkure",
        price: 20,
        imageurl: "images/kurkure.jpg",
        check: false

    },
    {
        name: "Oreo Biscuit",
        price: 20,
        imageurl: "images/oreo.jpg",
        check: false


    },
    {
        name: "Wafers",
        price: 15,
        imageurl: "images/wafers.jpg",
        check: false

    },
    {
        name: "Tiger Biscuit",
        price: 10,
        imageurl: "images/tigerbiscuit.jpg",
        check: false

    }
    ];
    $scope.products = products;

    $scope.delete = function () {
        var newList = $scope.products;
        $scope.products = [];
        angular.forEach(newList, function (x) {
            if (!x.check) $scope.products.push(x);
        }
        )
    }
});