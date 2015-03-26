'use strict';

module.exports = function(app){


	app.controller('MessagesController',['$scope','resource','$routeParams', 
					'$cookies', '$location',function($scope,resource,$routeParams,
										$cookies, $location){
		if (!$cookies.eat || $cookies.eat.length < 1)
      		$location.path('/signup'); 


		$scope.messages=[];
		var Messages = resource('messages');  
		$scope.getResource = function(){

			var location=$routeParams.location;
			var gender 	=$routeParams.gender; 
			console.log('location gender ->'+ location + ' ' + gender);
			Messages.getResource(location,gender,function(data){
				$scope.messages=data;
				
		});

	  };

	}]);



};