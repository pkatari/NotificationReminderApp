import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifytemplateComponent } from './notifytemplate.component';

describe('NotifytemplateComponent', () => {
  let component: NotifytemplateComponent;
  let fixture: ComponentFixture<NotifytemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifytemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifytemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
