import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AccordionDataService } from './service/accordiondata.service';
import { GlobalsettingsComponent } from './globalsettings/globalsettings.component';
import { NotifaccordionComponent } from './notifaccordion/notifaccordion.component';
import {HttpModule} from "@angular/http";
import {GlobalDataService}  from './service/globaldata.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/reducers';


@NgModule({
  declarations: [
    AppComponent,
    GlobalsettingsComponent,
    NotifaccordionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    NgbModule.forRoot()
  ],
  providers: [AccordionDataService,GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
