app.controller('RightsideController', ['$http', function($http){
		/*var store = this;
		store.products = [];
		$http.get('products.js').success(function(data){
			store.products = data
		});*/
		this.products = products;
		//$scope.products = ProductService.getAll(); /*w funkcji dać scope i service*/
	}]);



(function() {
	var app = angular.module('store-products', []);
});

var products = [

	{
		id: 1,
		name: 'Automat na karmę na microchip',
		link: '#product',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7116460P.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
		price: 450.00
	},
	{
		id: 2,
		name: 'Pojemnnik na jedzenie',
		link: '#product',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7108756P.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
		price: 10.00
	},
	{
		id: 3,
		name: 'Miski ceramiczne',
		link: '#product',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/7114740P.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
		price: 45.00
	},
	{
		id: 4,
		name: 'Kuwety',
		link: '#product',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/37039P.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
		price: 58.00
	},
	{
		id: 5,
		name: 'Smycze',
		link: '#product',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/P3659.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
		price: 12.00
	},
	{
		id: 6,
		name: 'Szelki',
		link: '#product',
		img: 'http://media.petsathome.com/wcsstore/pah-cas01//173/28539P.jpg',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum turpis vel pulvinar bibendum. Donec eros lacus, consectetur sit amet sodales sit amet, consequat eget justo. Nulla sollicitudin ante in eros accumsan congue.',
		price: 23.50
	}];	
