(function(angular){

    var app = angular.module('celebra');
    app.config(function($stateProvider, $urlRouterProvider) {

        // Rotas ou states
        $stateProvider

        // Login
        .state('login', {
            url: "/login",            
            templateUrl: "views/login/login.html",
            controller: 'LoginController'
        })

        // App
        .state('app', {
    		url: "/app",
    		abstract: true,
    		templateUrl: "views/app.html",
    		controller: 'AppController'
        })

        // Dashboard
        .state('app.dashboard', {
            url:'/dashboard',
            views: {
    	        'mainContent' :{
            		templateUrl:'views/dashboard/dashboard.html',
            		controller:'DashboardController'
    	        }
          	}
        })

    });

})(angular);