(function(angular){

	var controllers = angular.module('celebra.controllers');
	controllers.controller('AppController', function($scope, $state, LoginService) {

		if (!LoginService.usuarioAutenticado()) {
			$state.go('login');
			console.log("Usuário não autenticado.");
		};

		$scope.Sair = function() { 
			LoginService.logout().success(function() {
				$state.go('login');
			});
		};

	});

})(angular);