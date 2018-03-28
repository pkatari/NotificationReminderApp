import { GlobalsettingsComponent } from './globalsettings.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ObjectIterable } from '../pipe/objectiterator';
import { Store } from '@ngrx/store';
describe('GlobalsettingsComponent', () => {
  let component: GlobalsettingsComponent;
  let fixture: ComponentFixture<GlobalsettingsComponent>;

  const storeStub = {};
  const time = ['7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm',
  '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      providers : [{provide: Store, useValue: storeStub }],
      declarations: [ GlobalsettingsComponent, ObjectIterable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalsettingsComponent);
    component = fixture.componentInstance;

  //  component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('Test if form is valid', () => {
     expect(component.globalForm.valid).toBeTruthy();
  });

  it('Test form Values', () => {
    const expectedFormValue = {
         weekday : [],
         duringTime : '9:00 am',
         toSelectTime : '10:00 am'
    };

    const duringControl = component.globalForm.controls['duringTime'];
    duringControl.setValue('9:00 am');

    const selectControl = component.globalForm.controls['toSelectTime'];
    selectControl.setValue('10:00 am');

    const formValue = component.globalForm.value;

    expect(formValue).toEqual(expectedFormValue);
  });


  it('Test Values', () => {
  //  const GlobalElement: HTMLElement = fixture.nativeElement;
     const app = fixture.debugElement.componentInstance;
      expect(app.fromTime).toEqual(time);
      expect(app.toTime).toEqual(time);

  });

  it('To Test Submit Button OnClick', () => {
     spyOn(component, 'onSubmit');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  });

});
