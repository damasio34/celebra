(function(angular) {

    var controllers = angular.module('celebra.controllers');
    controllers.controller('CultoListarController', function($scope, $state, CultoService) {

		CultoService.getAll().success(function(data) {
			$scope.cultos = data.results;
		});

	});

})(angular);