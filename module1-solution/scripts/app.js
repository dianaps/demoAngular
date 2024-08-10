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
            if (emptyDishes.length!=0) {
                var numItems = emptyDishes.length;
                var tooMuch = numItems > 3;
                $scope.message = tooMuch ? "Too much!" : "Enjoy!";
                $scope.messageColor = "success";
                console.log(dishesArray + " " + emptyDishes + " " + numItems + " " + tooMuch);
            } else {
                $scope.message = "Please enter data first (empty items doesn't count)";
                $scope.messageColor = "danger";
                
            }
        }

        function getEmpty(array) {
            var filterArray = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i].trim() !== "")
                    filterArray.push(array[i]);
            }
            console.log(filterArray);
            return filterArray;
        }
        // function getNumberItems(items) {
        //     items = items.trim();
        //     var itemsArray = items.split(",");
        //     itemsArray = itemsArray.filter(str => str != "");
        //     return itemsArray.length();
        // }
    }
})();