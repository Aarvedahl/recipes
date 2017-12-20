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

}
