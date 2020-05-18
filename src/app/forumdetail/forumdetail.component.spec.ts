import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumdetailComponent } from './forumdetail.component';

describe('ForumdetailComponent', () => {
  let component: ForumdetailComponent;
  let fixture: ComponentFixture<ForumdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
