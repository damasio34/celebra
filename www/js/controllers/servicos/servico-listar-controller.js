(function(angular) {

    var controllers = angular.module('esteticApp.controllers');
    controllers.controller('ServicoListarController', function($scope, $state, ServicoService) {

		ServicoService.getAll().success(function(data) {
			$scope.servicos = data.results;
		});

	});

})(angular);