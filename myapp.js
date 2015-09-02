(function() {
	var app = angular.module('store', ['ngRoute']);
	app.controller('StoreController', function(){
		this.products = categories;
	});
	var categories = [
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

	app.controller('CategoryController', function(){
		this.products = products;
	});
	var products = [
	{
		id: 1,
		name: 'Mokra karma',
		link: 'index3.html'
	},
	{
		id: 2,
		name: 'Sucha karma',
		link: 'index3.html'
	},
	{
		id: 3,
		name: 'Przekąski',
		link: 'index3.html'

	},
	{
		id: 4,
		name: 'Żwirki',
		link: 'index3.html'

	},
	{
		id: 5,
		name: 'Akcesoria',
		link: 'index3.html'

	},
	{
		id: 6,
		name: 'Zabawki',
		link: 'index3.html'

	}];

	app.controller('RightsideController', function(){
		this.products = products;
	});
	var products = [
	
	{
		id: 1,
		name: 'Automat na karmę na microchip',
		link: 'index3.html',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7116460P.jpg'
	},
	{
		id: 2,
		name: 'Pojemnnik na jedzenie',
		link: 'index3.html',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7108756P.jpg'

	},
	{
		id: 3,
		name: 'Miski ceramiczne',
		link: 'index3.html',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7114740P.jpg'

	},
	{
		id: 4,
		name: 'Kuwety',
		link: 'index3.html',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/37039P.jpg'

	},
	{
		id: 5,
		name: 'Smycze',
		link: 'index3.html',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/P3659.jpg'

	},
	{
		id: 6,
		name: 'Szelki',
		link: 'index3.html',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/28539P.jpg'

	}];

	app.directive('recommendation', function(){
		return {
			restrict: 'E',
			templateUrl: 'recommendation.html'
		};
	});
	
	

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			
			//route for home page
			.when('/', {
				templateUrl: 'index.html',
				/*controller: 'StoreController'*/
			})

			//route for product category - automat
			.when('/automat', {
				templateUrl: 'automat.html',
				controller: 'automatController'
			})

			.when('/pojemnik', {
				templateUrl: 'pojemnik.html',
				controller: 'boxController'
			})

			.when('/miski', {
				templateUrl: 'miski.html',
				controller:  'bowlController'
			})

			.when('/kuwety', {
				templateUrl: 'kuwety.html',
				controller:  'litterController'
			})

			.when('/smycze', {
				templateUrl: 'smycze.html',
				controller: 'leashController'
			})

			.when('/szelki', {
				templateUrl: 'szelki.html',
				controller: 'bodyController'
			});
	}]);


	app.controller('StoreController', function($scope) {
		$scope.message = 'Everyone come and see how good I look!';
	});

	app.controller('automatController', function($scope) {
		$scope.message = 'automat page';
	});

	app.controller('boxController', function($scope) {
		$scope.message = 'box page';
	});

	app.controller('bowlController', function($scope) {
		$scope.message = 'bowl page';
	});

	app.controller('litterController', function($scope) {
		$scope.message = 'litter page';
	});

	app.controller('leashController', function($scope) {
		$scope.message = 'leash page';
	});

	app.controller('bodyController', function($scope) {
		$scope.message = 'body page';
	});



/*
	app.controller('mainController', function($scope, CartService) {
		$scope.message = 'bla bla bla';

		var product = {
			id: 1,
			price: 22.99,
			url: 'http://image.jpg',
			title: 'aasdasdasd'
		};

		// $scope.addToCart = CartService.addItem(product); dodawanie koszyka 
		$scope.addToCart = function(product) {

			var item = {
				id: product.id,
				price: product.price
			};

			CartService.addItem(item);
		};
	});


	app.service('CartService', function(){
		var items = [];

		return {

			addItem: function(product) {

				var inCart = items.filter(function(item){
					return item.id === product.id;
				});

				if ( !!inCart.length ) {
					var obj = inCart[0];
					obj.qty += 1;

					var index;

					// 

					items[index].qty += 1;

					// var newItems = items.filter(function(item){
					// 	return item.id !== product.id;
					// });
					// newItems.push(obj);
					// TODO - set qty + 1

				} else {
					// inCart => [];
					items.push(product);
				}
			},

			removeItem: function(id) {

			},

			getTotalQty: function() {

			},

			getTotalCost: function() {
				var total = 0;
				// forEach
				return 123.89;

			}

		};

	});*/


})();
