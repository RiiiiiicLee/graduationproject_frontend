import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnotificationsComponent } from './newnotifications.component';

describe('NewnotificationsComponent', () => {
  let component: NewnotificationsComponent;
  let fixture: ComponentFixture<NewnotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewnotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
