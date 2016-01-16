(function(angular) {

    var controllers = angular.module('esteticApp.controllers');
    controllers.controller('ProfissionalListarController', function($scope, $state, ProfissionalService) {

		ProfissionalService.getAll().success(function(data) {
			$scope.profissionais = data.results;
		});

	});

})(angular);