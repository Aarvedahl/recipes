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
      searches = search.name.split(", ");

      for (var word of searches) {
        let ingredient = {
          name: ""
        };
        ingredient.name = word;
        ingredients.push(ingredient);
      }

      console.log(ingredients);

      // a, s, v, b, a
      $http({
          url: 'http://127.0.0.1:5000/mysql',
          method: "POST",
          data: ingredients,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
            // success
            console.log(response.data);
          },
          function(response) {
            // failed
            console.error(response);
          });
    };

  });