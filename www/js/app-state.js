(function(angular){

    var app = angular.module('celebra');
    app.config(function($stateProvider, $urlRouterProvider) {

        // Rotas ou states
        $stateProvider

            // Login
            .state('login', {
                url: "/login",            
                templateUrl: "views/login/login-view.html",
                controller: 'LoginController'
            })
            
            .state('cadastrar', {
                url: '/cadastrar',
                controller: 'LoginIncluirController',
                templateUrl: 'views/login/login-incluir-editar-view.html'
            })

            .state('recuperarSenha', {
                url: '/recuperarSenha',
                controller: 'RecuperarSenhaController',
                templateUrl: 'views/login/login-recuperar-senha-view.html'
            })

            // App
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "views/app-view.html",
                controller: 'AppController'
            })

            // Dashboard
            .state('app.dashboard', {
                url:'/dashboard',
                views: {
                    'mainContent' :{
                        templateUrl:'views/dashboard/dashboard-view.html',
                        controller:'DashboardController'
                    }
                }
            })
            
            // Cultos
            .state('app.culto', {
                url:'/culto',
                views: {
                    'mainContent' :{
                        templateUrl:'views/culto/culto-listar-view.html',
                        controller:'CultoListarController'
                    }
                }
            })
            .state('app.culto_incluir', {
                url:'/culto/incluir',
                views: {
                    'mainContent' :{
                        templateUrl:'views/culto/culto-incluir-editar-view.html',
                        controller:'CultoIncluirController'
                    }
                }
            });
            
        $urlRouterProvider.otherwise('/app/dashboard');

    });

})(angular);