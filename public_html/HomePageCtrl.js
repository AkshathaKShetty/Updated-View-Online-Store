var myHome = angular.module("myHome", []);

//Service to get JSON Data
myHome.service('getDataService', function ($http) {
    this.getallproducts = function () {
        return $http.get('Products.json');
    };
});

////Directive for Tile View
//myHome.directive("tileView", function () {
//        return {
//            restrict: 'E',
//            templateUrl: 'TileView.html',
//            scope: {
//                itemInfo:'=itemInfo'
//            }
//        }
//    });

myHome.controller('HomePageCtrl', function ($scope, getDataService) {
    getDataService.getallproducts().then(function (resp) {
        $scope.products = resp.data;
        $scope.count = $scope.products.length;
    });

//Search Module
    $scope.search = function (item) {
       
        if ($scope.searchText == undefined) {
            return true;
        }
        else {
            
            if (item.name.toLowerCase()
                                 .indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.cost.toString()
                                 .indexOf($scope.searchText) != -1||
                        item.rating.toString()
                                 .indexOf($scope.searchText) != -1) {
                return true;
            }
        }

        return false;
    };

});


//myHome.filter("PriceFilter",function(){
//    return function(item,)
//});






