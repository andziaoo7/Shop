(function() {
	var app = angular.module('store', [ ]);
	app.controller('StoreController', function(){
		this.products = products;
	});
	var products = [
	{
		id: 1,
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/wet_cat_food.png',
		name: 'mokra karma',
		link: 'index2.html'
	},
	{
		id: 2,
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/dry_cat_food.png',
		name: 'sucha karma',
		link: 'index2.html'
	},
	{
		id: 3,
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/cat_treats.png',
		name: 'przekąski',
		link: 'index2.html'
	},
	{
		id: 4,
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/cat_litter.png',
		name: 'żwirki',
		link: 'index2.html'
	},
	{
		id: 5,
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/cat_bowls.png',
		name: 'akcesoria',
		link: 'index2.html'
	},
	{
		id: 6,
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/cat_beds.png',
		name: 'legowiska',
		link: 'index2.html'
	}];
	
	app.directive('navigationSection', function(){
		return {
			restrict: 'E',
			templateUrl: 'navigation-section.html'
		};
	});
	
	app.directive('footerSection', function(){
		return{
			restrict: 'E',
			templateUrl: 'footer-section.html'
		};
	});


	app.controller('PopupController', function($scope){
		$scope.popupVisible = false;
		$scope.toggle = function(){
			$scope.popupVisible = !$scope.popupVisible;
		};
	});


	app.directive('popupSection', function(){
		return{
			restrict: 'E',
			templateUrl: 'popup-section.html'
		};
	});
	
})();
