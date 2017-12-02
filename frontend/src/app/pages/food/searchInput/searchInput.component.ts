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
    list = [];
    model: SearchItem;

    constructor(private data: DataService) { }

    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message);
    }

    onEnter() {
      this.model = new SearchItem(this.value);
      this.list.push(this.model);
      console.log(this.list);
    }

    newMessage() {
      this.data.changeMessage('Hello from Sibling');
    }

}
