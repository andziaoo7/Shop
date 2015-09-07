(function() {
	var app = angular.module('store', ['ngRoute']);
	
	app.controller('StoreController', function($scope){
	
		var categories = [
		{
			id: 1,
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/wet_cat_food.png',
			name: 'mokra karma',
			link: '#/category'
		},
		{
			id: 2,
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/dry_cat_food.png',
			name: 'sucha karma',
			link: '#/category'
		},
		{
			id: 3,
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/cat_treats.png',
			name: 'przekąski',
			link: '#/category'
		},
		{
			id: 4,
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/cat_litter.png',
			name: 'żwirki',
			link: '#/category'
		},
		{
			id: 5,
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/cat_bowls.png',
			name: 'akcesoria',
			link: '#/category'
		},
		{
			id: 6,
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//c/cat_beds.png',
			name: 'legowiska',
			link: '#/category'
		}];


		$scope.products = categories;

	});

	//Rout - nie działa
	app.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'mainpage.html',
			controller: 'StoreController'
		})
		.when('/category', {
			templateUrl: 'category.html',
			controller: 'RightsideController'
		})
		// .when('/category', {
		// 	templateUrl: 'category2.html',
		// 	controller: 'CategoryController'
		// })
		.when('/product/:id', {
			templateUrl: 'products.html',
			controller: 'RightsideController'
		})
		.when('/cart', {
			templateUrl: 'cart.html',
			controller: 'CartForm'
		})
		.when('/login', {
			templateUrl: 'mainpage.html',
			controller: 'StoreController'
		});
	});

	
	
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

	app.directive('recommendation', function() {
		return {
			restrict: 'E',
			templateUrl: 'recommendation.html'
		};
	});

	app.directive('leftsideProduct', function() {
		return {
			restrict: 'E',
			templateUrl: 'leftside-product.html'
		};
	});

	app.directive('rightsideProduct', function() {
		return {
			restrict: 'E',
			templateUrl: 'rightside-product.html'
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
		link: '#/category'
	},
	{
		id: 2,
		name: 'Sucha karma',
		link: '#/category'
	},
	{
		id: 3,
		name: 'Przekąski',
		link: '#/category'
	},
	{
		id: 4,
		name: 'Żwirki',
		link: '#/category'
	},
	{
		id: 5,
		name: 'Akcesoria',
		link: '#/category'
	},
	{
		id: 6,
		name: 'Zabawki',
		link: '#/category'
	}];

	app.controller('RightsideController', function($scope, CartService, $routeParams){
		// this.products = products;
		//$scope.products = ProductService.getAll(); /*w funkcji dać scope i service*/
		var products = [
		
			{
				id: 1,
				name: 'Automat na karmę na microchip',
				link: '#/product/1',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7116460P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 450.00
			},
			{
				id: 2,
				name: 'Pojemnnik na jedzenie',
				link: '#/product/2',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7108756P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 10.00
			},
			{
				id: 3,
				name: 'Miski ceramiczne',
				link: '#/product/3',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7114740P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 45.00
			},
			{
				id: 4,
				name: 'Kuwety',
				link: '#/product/4',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/37039P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 58.00
			},
			{
				id: 5,
				name: 'Smycze',
				link: '#/product/5',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/P3659.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 12.00
			},
			{
				id: 6,
				name: 'Szelki',
				link: '#/product/6',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/28539P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 23.50
			}
		];

		$scope.products = products;
		$scope.id = $routeParams.id || 1;
		$scope.product = products.filter(function(item){
			return item.id == $scope.id
		});
		

	});
	

	app.controller('CartController', function($scope, CartService){
		var products = [
	
			{
				id: 1,
				name: 'Automat na karmę na microchip',
				link: 'index3.html',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7116460P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 450.00
			},
			{
				id: 2,
				name: 'Pojemnnik na jedzenie',
				link: 'index3.html',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7108756P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 10.00
			},
			{
				id: 3,
				name: 'Miski ceramiczne',
				link: 'index3.html',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7114740P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 45.00
			},
			{
				id: 4,
				name: 'Kuwety',
				link: 'index3.html',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/37039P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 58.00
			},
			{
				id: 5,
				name: 'Smycze',
				link: 'index3.html',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/P3659.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 12.00
			},
			{
				id: 6,
				name: 'Szelki',
				link: 'index3.html',
				img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/28539P.jpg',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
				price: 23.50
			}
		];	

		//$scope.addToCart = CartService.addItem(product); //dodawanie koszyka 
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

	});
	

	app.controller('CustomerController', function($scope, $location, $rootScope) {
		$scope.products = users;
		$scope.login = false;
		var users = [
			{
				name: 'Aneta',
				username: 'student1',
				password: 'anetka123'
			},
			{
				name: 'Adam',
				username: 'student2',
				password: 'ferrari87'
			},
			{
				name: 'Alan',
				username: 'student3',
				password: 'youtube2015'
			}
		];

		$scope.logged = function() {
			return $scope.login;
		};

		$scope.submit = function() {
			var username = $scope.username;
			var password = $scope.password;
			users.forEach(function(el) {
				if(el.username == $scope.username && el.password == $scope.password) {
					confirm('Pomyślnie zalogowano!');
					$scope.login = true;
				} else {
					confirm('Dane nie są prawidłowe');
					$scope.login = false;
				};
			});
		};
	});
})();


