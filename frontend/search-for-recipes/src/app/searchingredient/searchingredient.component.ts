import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './searchingredient.component.html',
  styleUrls: ['./searchingredient.component.css']
})
export class SearchingredientComponent implements OnInit {

  search: Search = {
    name: ""
  };

  ingredients:string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.currentIngredients.subscribe(ingredients => this.ingredients = ingredients)
  }

  newIngredients() {
    this.recipeService.changeIngredients(this.search.name);
  }

  findRecipes() {
    this.newIngredients();
    let ingredients: Search[] = [];
    let searches = this.search.name.split(", ");

    for (var word of searches) {
      let search = new Search(word);
      ingredients.push(search);
    }
    console.log(ingredients);
  }

}
