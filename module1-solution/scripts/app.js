(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.dishes = "";
        $scope.message = "";
        $scope.messageColor = "dark";
        
        $scope.handleMessage = function () {
            var dishesArray = $scope.dishes.split(",");
            var emptyDishes = getEmpty(dishesArray);
            var numItems = 0;
            var tooMuch;
            if (emptyDishes.length != 0) {
                numItems = emptyDishes.length;
                tooMuch = numItems > 3;
                $scope.message = tooMuch ? "Too much!" : "Enjoy!";
                $scope.messageColor = "success";
            } else {
                $scope.message = "Please enter data first (empty items doesn't count)";
                $scope.messageColor = "danger";
                
            }
            console.log( "Lunch list:" + numItems);
        };

        function getEmpty(array) {
            var filterArray = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i].trim() !== "")
                    filterArray.push(array[i]);
            }
            return filterArray;
        };
    }
})();