import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnotfoundComponent } from './appnotfound.component';

describe('AppnotfoundComponent', () => {
  let component: AppnotfoundComponent;
  let fixture: ComponentFixture<AppnotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppnotfoundComponent]
    });
    fixture = TestBed.createComponent(AppnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
