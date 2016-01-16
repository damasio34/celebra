(function(angular){

    var app = angular.module('celebra');

    app.config(function($ionicConfigProvider) {
	  	$ionicConfigProvider.backButton.previousTitleText(false);
	  	$ionicConfigProvider.backButton.text('').icon('ion-android-arrow-back');
	});
    
    app.config(function ($httpProvider) {
            $httpProvider.interceptors.push(function ($rootScope) {
                return {
                    request: function (config) {
                        $rootScope.$broadcast('loading:show')
                        return config
                    },
                    response: function (response) {
                        $rootScope.$broadcast('loading:hide')
                        return response
                    }
                }
            })
        })
    
    app.config(function ($wopoProvider) {
        $wopoProvider.setAppId('pYCcYOnvL95eWDZOpB7UfTHHcwA36stKoxPT2GLI');
        $wopoProvider.setRestApiKey('f8Xt9MpZzSRKmlPn2qRQXkBiV1A4Sg3LWfwgJini');
        $wopoProvider.setUsuarioPrecisaEstarAutenticado(false);
    });

})(angular);