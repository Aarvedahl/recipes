import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RECIPES }  from '../mock-recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes = RECIPES;
  selectedRecipe: Recipe;

  recipe: Recipe = {
    recipeID: 1,
    recipeName: "Spaghetti och Köttfärsås",
    rating: 3.5,
    ingNeed: 4
  };

  // TODO Lägg till genre på recipes om man t.ex bara vill ha indisk mat

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
