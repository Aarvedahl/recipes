import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SearchItem } from './searchItem';

@Injectable()

export class DataService {

  private messageSource = new BehaviorSubject<string>("test 2");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }



}
