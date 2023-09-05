import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosthttpformComponent } from './posthttpform.component';

describe('PosthttpformComponent', () => {
  let component: PosthttpformComponent;
  let fixture: ComponentFixture<PosthttpformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosthttpformComponent]
    });
    fixture = TestBed.createComponent(PosthttpformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
