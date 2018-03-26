import { Component, OnInit,ChangeDetectionStrategy, state } from '@angular/core';
import { AccordionState } from '../model/accordion.state';
import { FormGroup,FormControl,FormBuilder,FormArray } from '@angular/forms';
import {AccordionDataService} from '../service/accordiondata.service';
import { Observable } from 'rxjs/Observable';
import * as fromRootReducer from '../reducers/reducers';
import { Store } from '@ngrx/store';
import { GetGlobalSettings } from '../model/globalsettings.model';
import { Renderer,Renderer2,ElementRef } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import * as globalConst from '../constants/globalConstants'; 
import * as FromActions from '../actions/accordion.action';

@Component({
  selector: 'notification-accordion',
  templateUrl: './notifaccordion.component.html',
  styleUrls: ['./notifaccordion.component.scss']
})
export class NotifaccordionComponent implements OnInit {

  accData :AccordionState[];
  accordionForm : FormGroup;
  notificationData: FormArray;
  defaultSetState : fromRootReducer.State;
  weekdays : string[];
  fromTime : string[];
  toTime :string[];
  elapseTimeRounds : number[];
  globalStoreData : {}
  daysFrequencyData : number[];

  constructor(private renderer: Renderer2, private accServiceData: AccordionDataService,private fb: FormBuilder,private render: Renderer,public store: Store<fromRootReducer.State>) { 
    this.createNotificationForm();
  }

  createNotificationForm() {
    this.accordionForm = this.fb.group({
      notificationData: this.fb.array([])
    })
  }  

  ngOnInit() {
    this.weekdays = globalConst.weekdays;
    this.fromTime = globalConst.fromTime;
    this.toTime = globalConst.toTime;   
    this.elapseTimeRounds = globalConst.elapseTimeRounds;
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
    this.accData.forEach((x,i)=> {
      var accRepeatDays = x.weekday;
      control.push(this.fb.group({
        id:x.id,
        duringTime: x.duringTime,
        toSelectTime :x.toSelectTime,
        titleAccordion : x.titleAccordion,
        weekday : [x.weekday],
        daysFrequency : [x.daysFrequency]
      })); 
    });
  }

  listClick(event, weekValue,i) {  
    let found = false;
    let weekSelected;
    this.render.setElementClass(event.target, "active-apply", true); 

  }

  restToGlobalSettings(i) {

    //Subscribe to global settings data
    this.store.select('updateSettingsData').subscribe((appState) => {
      this.globalStoreData = appState;
    });
    const controlArray = <FormArray> this.accordionForm.get('notificationData');
    controlArray.controls[i].get('duringTime').setValue(this.globalStoreData['duringTime']);
    controlArray.controls[i].get('toSelectTime').setValue(this.globalStoreData['toSelectTime']);
    console.log(this.accordionForm.value);
    let globalArray = [];

    for(var j in this.globalStoreData['weekday']) {
      let val = this.globalStoreData['weekday'][j];
      globalArray.push(this.weekdays[val]);
    }
    controlArray.controls[i].get('weekday').setValue(globalArray);
    console.log(this.accordionForm.value);
  }

  saveAccordionData(event,i) {
    console.log("Save Accordion Data");
    if (window.confirm("Do you want to update notification information?")) { 
      console.log(this.accordionForm.get('notificationData').value[i]);

      //Dispatch action on save
   this.store.dispatch(new FromActions.UpdateAccordionData(this.accordionForm.get('notificationData').value[i]));
    }  else {
      console.log("Data is not saved")
    }
  }

  dontSaveAccordionData(event) {
    console.log("Dont Save Accordion Data");
  }

  applyActiveClass(week,index) {
    let found = false;
      this.accData.forEach(x => {
        x.weekday.forEach(element => {
          if(x.weekday.indexOf(element) == index) {
            found = true;
            return true;
          } 
        });
        if(found) {
          return true;
        }
     });
     return found; 
   }

  toggleAccordian( props:NgbPanelChangeEvent,$event,i): void{    
    const saveElement = this.renderer.selectRootElement(`.acc-save${i}`); 
    const closeElement = this.renderer.selectRootElement(`.acc-close${i}`);
    
    if(props.nextState) {
      this.renderer.addClass(saveElement,'accSaveShow');
      this.renderer.removeClass(saveElement,'accSaveHide');
      this.renderer.addClass(closeElement ,'accCloseShow');
      this.renderer.removeClass(closeElement ,'accCloseHide');
    } else {
        this.renderer.removeClass(saveElement,'accSaveShow');
        this.renderer.addClass(saveElement,'accSaveHide');
        this.renderer.removeClass(closeElement,'accCloseShow');
        this.renderer.addClass(closeElement,'accCloseHide');
    }
 }

 freqChange(event,index,i) {
    console.log(event.target.value)
    console.log(index);
    console.log(i);
    let freqChangeValue = [];
    const controlArray = <FormArray> this.accordionForm.get('notificationData');
    freqChangeValue = controlArray.controls[i].get('daysFrequency').value;
    freqChangeValue[index] = +event.target.value;
    console.log(freqChangeValue)
    controlArray.controls[i].get('daysFrequency').setValue(freqChangeValue);
 }
}
 
