angular.module('myApp.controllers', [])
	.controller('FrameController', ['$scope', function($scope){
		$scope.today = new Date(); // Today's date
		$scope.name = "Peter Chen"; // Our logged-in user's name
		$scope.users = {
			"ari": {
				"twitter": "@auser"
			},
			"nate": {
				"twitter": "@eigenjoy"
			}
		};
	}])
	.controller('DashboardController', ['$scope','$parse', function($scope,$parse){
		//Setting up a watch  expression to watch the entryInput
		$scope.$watch('entryInput', function(newVal, oldVal, scope){
			if(newVal !== oldVal){
				//Look for any part of the string that starts with @
				var strUsers = newVal.match(/[@]+[A-Za-z0-9_]+/g),
					i;
				//if any part of the string starts with @ then we will have a list of those thokens in strUsers
				if(strUsers){
					//We'll loop through our users and parse the $scope looking  for user
					for (i = 0; i < strUsers.length; i++){
						//Found user in the form @[user]
						var user = strUsers[i],
						//remove the @ symbol
							cleanUser = user.slice(1),
							//look up the cleanuser in local scope users.
							parseUser = $parse("users."+cleanUser)(scope);

							if(parseUser){

							}else{

							}
					}
				}
			}
		})

		var date = new Date();
		$scope.dateFilters = {
			'all': 'all',
			'next week': new Date(date.setDate(date.getDate()+7)),
			'tommorrow': chrono.parseDate('tomorrow at 11:59pm'),
			'today': chrono.parseDate('today ar 11:59pm')
		}

		$scope.excludeByDate = function(input) {
			if ($scope.keepDate === 'all') {
				return true;
			} else {
				return new Date(input.start.dateTime).getTime() < $scope.keepDate.getTime();
			}
		}

	}]);