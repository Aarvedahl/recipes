import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES }  from '../mock-recipes';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;
  ingredients:string;

  recipe: Recipe = {
    recipeID: 1,
    recipeName: "Spaghetti och Köttfärsås",
    rating: 3.5,
    ingNeed: 4
  };

  // TODO Lägg till genre på recipes om man t.ex bara vill ha indisk mat

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
    this.recipeService.currentIngredients.subscribe(ingredients => this.ingredients = ingredients)

  }

  getRecipes(): void {
    this.recipeService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
