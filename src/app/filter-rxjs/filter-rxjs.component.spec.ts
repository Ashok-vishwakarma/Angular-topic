import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRXJSComponent } from './filter-rxjs.component';

describe('FilterRXJSComponent', () => {
  let component: FilterRXJSComponent;
  let fixture: ComponentFixture<FilterRXJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterRXJSComponent]
    });
    fixture = TestBed.createComponent(FilterRXJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
