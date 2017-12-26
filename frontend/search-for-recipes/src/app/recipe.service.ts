import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Search } from './search';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class RecipeService {

  private recipeDomain = 'http://127.0.0.1:5000/'; // Domain to web api
  private getAllUrl = 'mysql';

  constructor( private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeDomain + this.getAllUrl);
  }

  getRecipesByIngredients(ingredients: string) {
    console.log("Hey I am boxbox");
    let ingrelist = this.findRecipes(ingredients);
    let testList = [
    {
        "name": "Meatballs"
    },
    {
        "name": "Spaghetti"
    }
];
    return this.http.post<Recipe[]>(this.recipeDomain + this.getAllUrl,
      testList, httpOptions);
  }

  private searchIngredients = new BehaviorSubject<string>("");
  currentIngredients = this.searchIngredients.asObservable();


  changeIngredients(ingredients: string) {
    this.searchIngredients.next(ingredients)
    console.log(this.findRecipes(ingredients))
    this.findRecipes(ingredients);
  }

  findRecipes(ings: string) {
    let ingredients: Search[] = [];
    let searches = ings.split(", ");

    for (var word of searches) {
      let search = new Search(word);
      ingredients.push(search);
    }

    return ingredients;
  }


// TODO Convert the get to a post request

}
