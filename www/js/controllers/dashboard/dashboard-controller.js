(function(angular){

	var controllers = angular.module('celebra.controllers');
	controllers.controller('DashboardController', function($scope, $ionicHistory, DashboardService) {

		$ionicHistory.clearHistory();

	});

})(angular);