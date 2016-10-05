angular.module('lesson2', [])
	.controller('RootController', function($scope, $http, $log){
		$scope.data = [];
		$http({
			method: 'GET',
			url: 'data.json'
		}).then(function(response){
			$scope.data = response.data;
		});
		$scope.active = {};
		this.save = function(){
			console.log('...saving');
			$scope.data.push(angular.extend({}, $scope.active));
		}
	});
/*

добавлять новых животных
редактировать записи о существующих
видеть весь список сразу

{
	name: ''
	type: 'beast'
	flying: true
	dangerous: false
}
*/