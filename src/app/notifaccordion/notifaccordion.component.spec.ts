import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifaccordionComponent } from './notifaccordion.component';

describe('NotifaccordionComponent', () => {
  let component: NotifaccordionComponent;
  let fixture: ComponentFixture<NotifaccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifaccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifaccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
