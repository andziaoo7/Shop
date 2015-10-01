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

	//Rout
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
		})
		.when('/admin', {
			templateUrl: 'admin.html',
			controller: 'AdminController'
		})
		.when('/search', {
			templateUrl: 'search-panel.html'
			// controller: 'RightsideController'
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

	app.controller('CategoryController', function($scope, $http){
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


	

	// service do obsługi pliku json z rightside controllera

	app.service('RightsideService', function($http) {
		this.downloadProducts = function() {
			return $http.get("http://demo5674451.mockable.io/product");
		};
	});

	app.controller('RightsideController', function($scope, CartService, $routeParams, $http, RightsideService){
		// $scope.product = {};
		// $scope.id = $routeParams.id || 1;
		

		// $http.get("https://demo5674451.mockable.io/product").success(function (response) {
		// 	$scope.products = response.products;
		// 	$scope.product = response.products.filter(function(item){
		// 	return item.id == $scope.id
		// 	});
		// });

		RightsideService.downloadProducts().then(function (data) {
			$scope.products = data.data.products;
		});
	});


	// // app.controller('CartController', function($scope, CartService){
	// // 	var products = []  zabrać produkty z kategorii (są w api)
	

	// 	//$scope.addToCart = CartService.addItem(product); //dodawanie koszyka 
	// 	$scope.addToCart = function(product) {

	// 		var item = {
	// 			id: product.id,
	// 			price: product.price
	// 		};

	// 		CartService.addItem(item);
	// 	};
	// });	
	
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
	
	// app.service('CartService', function($scope, items) {
	// 	$scope.items = items;
	// 	$scope.cart = [];

	// 	$scope.deleteItem = function(item) {
	// 		var cart = $scope.cart;
	// 		var match = getMatchedCartItem(item);
	// 		if(match.count > 1) {
	// 			match.count -= 1;
	// 			return;
	// 		}
	// 		cart.splice(cart.indexOf(item), 1);
	// 	}

	// 	$scope.addItem = function(item) {
	// 		var match = getMatchedCartItem(item);
	// 		if(match) {
	// 			match.count += 1;
	// 			return;
	// 		}
	// 		var itemToAdd = angular.copy(item);
	// 		itemToAdd.count = 1;
	// 	}
	// 	function getMatchedCartItem(item) {
	// 		return $scope.cart.find(function(product) {
	// 			return product.id === item.id
	// 		});
	// 	}


	// });


	app.controller('CustomerController', function($scope, $location, $rootScope) {
		$scope.products = users;
		$scope.login = true;
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

	app.controller('AdminController', function($scope, $http) {
		$scope.insertdata = function() {
			$http.post("http://demo5674451.mockable.io/admin", ($scope.product.id, $scope.product.name, $scope.product.description, $scope.product.img, $scope.product.price)).success(function(data, status, headers, config) {
				console.log('Pomyślne dodano nowy produkt');
			});
		};
	});
})();  


