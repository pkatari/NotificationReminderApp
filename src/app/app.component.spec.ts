import { AppComponent } from './app.component';
import { TestBed, async } from '@angular/core/testing';
import { GlobalsettingsComponent } from './globalsettings/globalsettings.component';
import { NotifaccordionComponent } from './notifaccordion/notifaccordion.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObjectIterable } from './pipe/objectiterator';
import { Store } from '@ngrx/store';
import { AccordionDataService } from './service/accordiondata.service';
import { HttpClientModule } from '@angular/common/http';

const storeStub = {};
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GlobalsettingsComponent,
        NotifaccordionComponent,
        ObjectIterable
      ],
      providers : [{provide: Store, useValue: storeStub }, AccordionDataService, ObjectIterable],
      imports: [ReactiveFormsModule, FormsModule, NgbModule.forRoot(), HttpClientModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Notification Reminder App');
  }));
});
