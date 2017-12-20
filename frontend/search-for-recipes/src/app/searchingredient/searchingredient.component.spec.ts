import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingredientComponent } from './searchingredient.component';

describe('SearchingredientComponent', () => {
  let component: SearchingredientComponent;
  let fixture: ComponentFixture<SearchingredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
