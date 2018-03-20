// Detecta A,A inget mellanslag efter kommatecknet och justera det automatiskt
angular.module('food', [])
  .controller('foodSearch', function($scope, $http) {
    $scope.wildcard = false;

    $scope.create = function(search) {
      ingredients = [];
      //searches = search.name.split(", ");
        searches = getString(search.name);
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
    };

    function getString(text) {
        var newString = "";
        for(var i=0; i<text.length; i++) {
            if(text.charAt(i) == "," && text.charAt(i+1) != " ") {
                newString += text.charAt(i) + " ";
            } else {
                newString += text.charAt(i);
            }
        }
        return newString.split(", ");

    };

  });
