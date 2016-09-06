WPAngularStarter.controller('PizzaCreateController', function($scope, $state, $stateParams, Pizza) {
    $scope.pizza = new Pizza();

    $scope.addPizza = function() {
        $scope.pizza.$save(function() {
            $state.go('pizza');
        });
    };
});