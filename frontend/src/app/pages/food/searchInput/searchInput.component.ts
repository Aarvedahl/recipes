import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ngt-search-inputs',
  templateUrl: './searchInput.html',
})
export class SearchInputComponent implements OnInit {

    message: string;
    constructor(private data: DataService) { }
    ngOnInit() {
      this.data.currentMessage.subscribe(message => this.message = message);
    }
    newMessage() {
      this.data.changeMessage("Hello from Sibling");
    }

}
