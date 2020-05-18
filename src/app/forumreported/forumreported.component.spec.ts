import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumreportedComponent } from './forumreported.component';

describe('ForumreportedComponent', () => {
  let component: ForumreportedComponent;
  let fixture: ComponentFixture<ForumreportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumreportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumreportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
