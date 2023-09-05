import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLifecycleComponent } from './task-lifecycle.component';

describe('TaskLifecycleComponent', () => {
  let component: TaskLifecycleComponent;
  let fixture: ComponentFixture<TaskLifecycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskLifecycleComponent]
    });
    fixture = TestBed.createComponent(TaskLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
