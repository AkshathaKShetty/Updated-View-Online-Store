var myProducts = angular.module("myProducts", []);

myProducts.controller('ProductDetailsController', function ($http,$stateParams) {
   var vm = this;
    $http({
        url: "Products.json",
        method: "get",
        params: { name: $stateParams.name }
    }).then(function (response) {
        console.log(response.data);
        vm.products = response.data;        
    });  
});

