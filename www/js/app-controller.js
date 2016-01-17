(function(angular){

	var controllers = angular.module('celebra.controllers');
	controllers.controller('AppController', function($scope, $state, $rootScope, $ionicHistory, LoginService) {

		if (!LoginService.usuarioAutenticado()) {
			$state.go('login');
			console.log("Usuário não autenticado.");
		};

		$scope.Sair = function() { 
			LoginService.logout().success(function() {
				$state.go('login');
			});
		};
        
        $scope.novo = function() {             
            $state.go($ionicHistory.currentView().stateName + '_incluir');			
		};

	});

})(angular);