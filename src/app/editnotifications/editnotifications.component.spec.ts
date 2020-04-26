import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnotificationsComponent } from './editnotifications.component';

describe('EditnotificationsComponent', () => {
  let component: EditnotificationsComponent;
  let fixture: ComponentFixture<EditnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
