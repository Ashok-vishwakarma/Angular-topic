import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicComponent } from './servic.component';

describe('ServicComponent', () => {
  let component: ServicComponent;
  let fixture: ComponentFixture<ServicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicComponent]
    });
    fixture = TestBed.createComponent(ServicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
