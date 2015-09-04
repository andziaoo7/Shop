(function() {
	var app = angular.module('store', []);
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

	app.directive('recommendation', function() {
		return {
			restrict: 'E',
			templateUrl: 'recommendation.html'
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
		/*$scope.products = ProductService.getAll(); w funkcji dać scope i service*/

	});
	var products = [
	
		{
			id: 1,
			name: 'Automat na karmę na microchip',
			link: 'index3.html',
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7116460P.jpg',
			price: 10.00
		},
		{
			id: 2,
			name: 'Pojemnnik na jedzenie',
			link: 'index3.html',
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7108756P.jpg',
			price: 10.00
		},
		{
			id: 3,
			name: 'Miski ceramiczne',
			link: 'index3.html',
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7114740P.jpg',
			price: 10.00
		},
		{
			id: 4,
			name: 'Kuwety',
			link: 'index3.html',
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/37039P.jpg',
			price: 10.00
		},
		{
			id: 5,
			name: 'Smycze',
			link: 'index3.html',
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/P3659.jpg',
			price: 10.00
		},
		{
			id: 6,
			name: 'Szelki',
			link: 'index3.html',
			img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/28539P.jpg',
			price: 10.00
		}
	];	

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
