(function(angular){

    var app = angular.module('celebra');

    app.config(function($ionicConfigProvider) {
  		// note that you can also chain configs
	  	$ionicConfigProvider.backButton.previousTitleText(false);
	  	$ionicConfigProvider.backButton.text('').icon('ion-android-arrow-back');
	});

})(angular);