import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GlobalsettingsComponent } from './globalsettings/globalsettings.component';
import { NotifaccordionComponent } from './notifaccordion/notifaccordion.component';
import {HttpModule} from "@angular/http";
import {GlobalDataService}  from './service/globaldata.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/reducers';
import { NotifytemplateComponent } from './shared/notifytemplate/notifytemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalsettingsComponent,
    NotifaccordionComponent,
    NotifytemplateComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    NgbModule.forRoot()
  ],
  providers: [GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
