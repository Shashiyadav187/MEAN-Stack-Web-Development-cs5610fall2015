"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("SearchController", SearchController);

    function SearchController($scope, $location) {
        $scope.$location = $location;
    }
})();
