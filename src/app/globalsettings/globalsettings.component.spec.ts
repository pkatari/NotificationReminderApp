import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GlobalsettingsComponent } from './globalsettings.component';
import { ObjectIterable } from '../pipe/objectiterator';

describe('GlobalsettingsComponent', () => {
  let component: GlobalsettingsComponent;
  let fixture: ComponentFixture<GlobalsettingsComponent>;
  let pipe: ObjectIterable;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ GlobalsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalsettingsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    pipe = new ObjectIterable();
  });

  
});
