import { Component, OnInit,ChangeDetectionStrategy, state } from '@angular/core';
import { getAccordionData, AccObj } from '../model/accordion.state';
import { FormGroup,FormControl,FormBuilder,FormArray } from '@angular/forms';
import  { GlobalDataService }  from '../service/globaldata.service';
import { Observable } from 'rxjs/Observable';
import * as fromRootReducer from '../reducers/reducers';
import { Store } from '@ngrx/store';
import { GetGlobalSettings } from '../model/globalsettings.model';

@Component({
  selector: 'notification-accordion',
  templateUrl: './notifaccordion.component.html',
  styleUrls: ['./notifaccordion.component.scss']
})
export class NotifaccordionComponent implements OnInit {

  accordiondata : getAccordionData;
  accData :AccObj[];
  accordionForm : FormGroup;
  weekdays : string[];
  fromTime : string[];
  toTime :string[];
  defaultSetState : fromRootReducer.State;

  public getDefaultGlobalSettings$: Observable<GetGlobalSettings[]>;

    constructor(private formBuilder: FormBuilder,private gbData: GlobalDataService,public store: Store<fromRootReducer.State>) { 
        this.accordiondata = new getAccordionData();
        this.createNotificationForm();
    }

    createNotificationForm() {
        this.accordionForm = this.formBuilder.group({
        });
    }  

  ngOnInit() {
      this.accData = this.accordiondata.accData;   
      this.gbData.getGlobalData()  
      .subscribe(
       gbVal => {
        console.log("ngOninit1")
          this.weekdays = gbVal['weekdays'];
          this.fromTime = gbVal['fromTime']
          this.toTime =  gbVal['toTime'];
        },
        err => {
          console.log(err);
        }
      );
  }

  restToGlobalSettings() {
    console.log("Reset to Global Settings clicked...");

this.store.subscribe((appState) => {
console.log(this.defaultSetState);
this.defaultSetState  = appState;
console.log("this.defaultSetState"); 
});
  }

}
