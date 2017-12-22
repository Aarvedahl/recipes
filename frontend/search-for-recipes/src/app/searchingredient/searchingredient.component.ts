import { Component, OnInit } from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-search',
  templateUrl: './searchingredient.component.html',
  styleUrls: ['./searchingredient.component.css']
})
export class SearchingredientComponent implements OnInit {

  search: Search = {
    name: ""
  };

  constructor() { }

  ngOnInit() {
  }

  findRecipes() {
    let ingredients: Search[] = [];
    let searches = this.search.name.split(", ");

    for (var word of searches) {
      let search = new Search(word);
      ingredients.push(search);
    }
    console.log(ingredients);
  }

}
