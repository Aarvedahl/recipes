import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SearchItem } from '../searchItem';

@Component({
  selector: 'ngt-search-inputs',
  templateUrl: './searchInput.html',
})
export class SearchInputComponent implements OnInit {
    value = '';
    message: string;

    constructor(private data: DataService) { }

    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message);
    }

    onEnter() {

    }
    // Ta emot det som står i fältet och då skapa ett nytt searchObject med det därefter lägga till det i en lista
    /*
    hero: Hero = {
       name: 'Windstorm'
     };
    */
    newMessage() {
      this.data.changeMessage('Hello from Sibling');
    }

}
