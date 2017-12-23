import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RecipeService {

  private recipeDomain = 'http://127.0.0.1:5000/'; // Domain to web api
  private getAllUrl = 'mysql';

  constructor( private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeDomain + this.getAllUrl);
  }

  private searchIngredients = new BehaviorSubject<string>("");
  currentIngredients = this.searchIngredients.asObservable();


  changeIngredients(ingredients: string) {
    this.searchIngredients.next(ingredients)
  }

// TODO Convert the get to a post request
  /*
    GET heroes from the server
    getHeroes (): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
    }
*/

}
