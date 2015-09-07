/*
	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			
			//route for home page
			.when('/', {
				templateUrl: 'index.html',
				controller: 'ProductsController'
			})

			//route for product category - automat
			.when('/automat', {
				templateUrl: 'automat.html',
				controller: 'ProductsController'
			})

			.when('/pojemnik', {
				templateUrl: 'pojemnik.html',
				controller: 'ProductsController'
			})

			.when('/miski', {
				templateUrl: 'miski.html',
				controller:  'ProductsController'
			})

			.when('/kuwety', {
				templateUrl: 'kuwety.html',
				controller:  'ProductsController'
			})

			.when('/smycze', {
				templateUrl: 'smycze.html',
				controller: 'ProductsController'
			})

			.when('/szelki', {
				templateUrl: 'szelki.html',
				controller: 'ProductsController'
			});
	}]);*/


	/*app.controller('ProductsController', function() {
		this.products = objects;
	});

	var objects = [
	{
		id: 1,
		name: 'Automat na karmę na microchip',
		img: 
		price: 450.00
	},
	{
		id: 2,
		name: 'Pojemniki na jedzenie',
		img:
		price: 20.00
		
	},
	{
		id: 3,
		name: 'Miski ceramiczne',
		img:
		price: 50.00
		
		
	},
	{
		id: 4,
		name: 'Kuwety',
		img:
		price: 70.00
		
		
	},
	{
		id: 5,
		name: 'Smycze',
		img:
		price: 15.00
		
		
	},
	{
		id: 6,
		name: 'Szelki',
		img:
		price: 30.00
		
		
	}];*/



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