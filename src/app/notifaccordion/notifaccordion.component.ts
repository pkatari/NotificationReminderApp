import { Component, OnInit,ChangeDetectionStrategy, state } from '@angular/core';
import { AccObj } from '../model/accordion.state';
import { FormGroup,FormControl,FormBuilder,FormArray } from '@angular/forms';
import {AccordionDataService} from '../service/accordiondata.service';
import { Observable } from 'rxjs/Observable';
import * as fromRootReducer from '../reducers/reducers';
import { Store } from '@ngrx/store';
import { GetGlobalSettings } from '../model/globalsettings.model';
import { Renderer } from '@angular/core';
@Component({
  selector: 'notification-accordion',
  templateUrl: './notifaccordion.component.html',
  styleUrls: ['./notifaccordion.component.scss']
})
export class NotifaccordionComponent implements OnInit {

  accData :AccObj[];
  accordionForm : FormGroup;
  notificationData: FormArray;
  defaultSetState : fromRootReducer.State;
  weekdays : string[];
  fromTime : string[];
  toTime :string[];
  elapseTimeRounds : number[];
  globalStoreData : {}
  
    constructor(private accServiceData: AccordionDataService,private fb: FormBuilder,private render: Renderer,public store: Store<fromRootReducer.State>) { 
        this.createNotificationForm();
    }

    createNotificationForm() {
      this.accordionForm = this.fb.group({
       notificationData: this.fb.array([])
      })
    }  

  ngOnInit() {

    this.weekdays =  ['S','M','T','W','T','F','S'];
    this.fromTime =  ["7:00 am","8:00 am","9:00 am","10:00 am","11:00 am","12:00 pm","1:00 pm","2:00 pm","3: 00pm","4:00 pm","5:00 pm","6:00 pm","7:00 pm"];
    this.toTime   =  ["7:00 am","8:00 am","9:00 am","10:00 am","11:00 am","12:00 pm","1:00 pm","2:00 pm","3: 00pm","4:00 pm","5:00 pm","6:00 pm","7:00 pm"]
    this.elapseTimeRounds = [1,2,3,4];
    
    this.accServiceData.getAccordionData()
      .subscribe(
      gbVal => {
        this.accData = gbVal;
          this.patchForm();
        },
        err => {
          console.log(err);
        }
      );
  }
  patchForm() {
    let control = <FormArray>this.accordionForm.controls.notificationData;
    this.accData.forEach(x => {
        var accRepeatDays = x.accrepeat;
        var daysFrequency =[];
        for(var i in x.timeRoundInfo) {
          daysFrequency.push(x.timeRoundInfo[i]);
        }
      control.push(this.fb.group({
        duringTime: x.accfromTime,
        toSelectTime :x.accToTime,
        titleAccordion : x.acctitle,
        weekday : [x.accrepeat],
        daysFrequency :[daysFrequency]
      }));      
    })
  }

  listClick(event, weekValue,i) {  
    let found = false;
    this.render.setElementClass(event.target, "active-apply", true); 
  }

  restToGlobalSettings(i) {
    this.store.select('getSettingsData').subscribe((appState) => {
        this.globalStoreData = appState;
    });
    console.log(this.globalStoreData);
    console.log(this.accordionForm.value);
    console.log("*********before");
    console.log(this.accordionForm.value.notificationData[i]);
    console.log("***************");
    this.accordionForm.value.notificationData[i].duringTime = this.globalStoreData['duringTime'];
    this.accordionForm.value.notificationData[i].toSelectTime = this.globalStoreData['toSelectTime'];
    this.accordionForm.value.notificationData[i].weekday = this.globalStoreData['weekday'];

    let control = <FormArray>this.accordionForm.controls.notificationData;
    console.log("*********After");
    console.log(this.accordionForm.value.notificationData[i]);
    console.log("***************");
  
  }

  saveAccordionData(event,i) {
      console.log("Save Accordion Data");
      console.log(this.accordionForm.value)
    //  console.log(this.accordionForm.value.notificationData[i].duringTime);
    
      //console.log(this.accordionForm)
  }

  dontSaveAccordionData(event) {
      console.log("Dont Save Accordion Data");
  }

  applyActiveClass(week) {
    //  console.log(week)
  }


}
 