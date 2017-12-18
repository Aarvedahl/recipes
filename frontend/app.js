angular.module('food', [])
  .controller('foodSearch', function($scope, $http) {


    /*
    [
    	{
        	"name": "Chicken"
    	},
        {
        	"name": "Spaghetti"
        }
    ]
*/
    $scope.create = function(search) {
      ingredients = [];
      ingredients.push(search);
      console.log(ingredients);
      /*$http({
        url: 'http://127.0.0.1:5000/mysql',
        method: "POST",
        data: album,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function(response) {
          // success
        },
        function(response) {
          // failed
          console.error(response);
        }); */
    };

  });