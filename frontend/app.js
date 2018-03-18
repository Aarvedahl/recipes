angular.module('food', [])
  .controller('foodSearch', function($scope, $http) {
    $scope.wildcard = false;

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
      content = {};
      content.ingredients = ingredients;
      content.wildcard = $scope.wildcard;
      console.log(content);
      $http({
          url: 'http://192.168.99.100:5001/mysql',
          method: "POST",
          data: content,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function(response) {
            // success
            $scope.recipes = response.data;
          },
          function(response) {
            // failed
            $scope.errormessage = response.statusText;
          });
    };

    $scope.onSelect = function(recipe) {
        if($scope.recipe == recipe) {
            $scope.recipe = null;
        } else {
            $scope.recipe = recipe;
        }
    }
   
  });
