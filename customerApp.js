(function() {
	var app = angular.module('customerApp', []);
	app.controller('CustomerController', function() {
		this.datas = datas;
	});

	var datas = [
	{
		name: 'Aneta',
		login: 'student1',
		password: 'anetka123'

	},
	{
		name: 'Adam'
		login: 'student2',
		password: 'ferrari87'

	},
	{
		name: 'Alan',
		login: 'student3',
		password: 'youtube2015'

	}];
});
