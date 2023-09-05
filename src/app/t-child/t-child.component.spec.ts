import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TChildComponent } from './t-child.component';

describe('TChildComponent', () => {
  let component: TChildComponent;
  let fixture: ComponentFixture<TChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TChildComponent]
    });
    fixture = TestBed.createComponent(TChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
