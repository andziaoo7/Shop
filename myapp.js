(function() {
	var app = angular.module('store', ['ngRoute']);
	
	app.controller('StoreController', function(){
		this.products = categories;
	});

	//Rout - nie działa
	app.config(function($routeProvider){
		$routeProvider
		/*.when('/', {
			templateUrl: 'index.html',
			controller: 'StoreController'
		})*/
		.when('/product/:id', {
			templateUrl: 'index3.html',
			controller: 'RightsideController'
		});
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

	app.controller('RightsideController', function($scope, CartService){
		this.products = products;
		//$scope.products = ProductService.getAll(); /*w funkcji dać scope i service*/
	});
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
	

	app.controller('CustomerController', function() {
		this.products = users;
	});

	var users = [
	{
		name: 'Aneta',
		login: 'student1',
		password: 'anetka123'
	},
	{
		name: 'Adam',
		login: 'student2',
		password: 'ferrari87'
	},
	{
		name: 'Alan',
		login: 'student3',
		password: 'youtube2015'
	}];
	
})();
