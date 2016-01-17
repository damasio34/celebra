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
            
            .state('cadastrar', {
                url: '/cadastrar',
                controller: 'LoginIncluirController',
                templateUrl: 'views/login/cadastrar.html'
            })

            .state('recuperarSenha', {
                url: '/recuperarSenha',
                controller: 'RecuperarSenhaController',
                templateUrl: 'views/login/recuperar-senha.html'
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
            
            // Cultos
            .state('app.cultos', {
                url:'/cultos',
                views: {
                    'mainContent' :{
                        templateUrl:'views/culto/listar.html',
                        controller:'CultoListarController'
                    }
                }
            });
            
        $urlRouterProvider.otherwise('/app/dashboard');

    });

})(angular);