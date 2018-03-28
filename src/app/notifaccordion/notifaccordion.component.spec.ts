import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotifaccordionComponent  } from './notifaccordion.component';
import { ObjectIterable } from '../pipe/objectiterator';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionDataService } from '../service/accordiondata.service';
import 'rxjs/add/observable/of';

describe('NotifaccordionComponent', () => {
  let component: NotifaccordionComponent;
  let fixture: ComponentFixture<NotifaccordionComponent>;

  const storeStub = {};

  const mockAccordionData =  [{
    id: 1,
    titleAccordion: 'Test Mock Title',
    weekday: ['Mon', 'Tue'],
    duringTime: '8:00 am',
    toSelectTime: '8:00 am',
    daysFrequency: [1, 2, 3, 4]
   }];

  beforeEach(async(() => {
    const accordService = jasmine.createSpyObj('AccordionDataService', ['getAccordionData']);

    const getSpyData = accordService.getAccordionData.and.returnValue( Observable.of(mockAccordionData) );

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, NgbModule.forRoot()],
      providers : [{provide: Store, useValue: storeStub },
           {provide: AccordionDataService, useValue: accordService}
     ],
      declarations: [ NotifaccordionComponent, ObjectIterable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifaccordionComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('Test if form is valid', () => {
    expect(component.accordionForm.valid).toBeTruthy();
 });

});
