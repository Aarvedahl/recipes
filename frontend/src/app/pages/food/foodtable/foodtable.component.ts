import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ngt-foodtable',
  templateUrl: './foodtable.html',
})
export class FoodTableComponent implements OnInit {

    message: string;

    constructor(private data: DataService) { }

    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message);
    }

}
