import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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

// [(ngModel)]= "value"
    onEnter() {
      console.log(this.value);
    }
    // Ta emot det som står i fältet och då skapa ett nytt searchObject med det därefter lägga till det i en lista
    newMessage() {
      this.data.changeMessage('Hello from Sibling');
    }

}
