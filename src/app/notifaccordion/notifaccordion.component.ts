import { Component, OnInit, ChangeDetectionStrategy, state } from '@angular/core';
import { AccordionState } from '../model/accordion.state';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import {AccordionDataService} from '../service/accordiondata.service';
import { Observable } from 'rxjs/Observable';
import * as fromRootReducer from '../reducers/reducers';
import { Store } from '@ngrx/store';
import { Renderer2, ElementRef } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import * as globalConst from '../constants/globalConstants';
import * as FromActions from '../actions/accordion.action';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification-accordion',
  templateUrl: './notifaccordion.component.html',
  styleUrls: ['./notifaccordion.component.scss'],
  providers: [NgbAccordionConfig]
})
export class NotifaccordionComponent implements OnInit {

  accData: AccordionState[];
  accordionForm: FormGroup;
  notificationData: FormArray;
  defaultSetState: fromRootReducer.State;
  weekdays: {};
  fromTime: string[];
  toTime: string[];
  elapseTimeRounds: number[];
  globalStoreData: {};
  daysFrequencyData: number[];
  trackStatus: boolean;
  trackSaveIcon: boolean;
  trackStatusPencil: boolean;
  constructor(private renderer: Renderer2, private accServiceData: AccordionDataService,
    private config: NgbAccordionConfig, private fb: FormBuilder, public store: Store<fromRootReducer.State>) {
    this.trackStatus = false;
    this.trackSaveIcon = false;
    this.trackStatusPencil = true;
    this.createNotificationForm();
  }

  ngOnInit() {
    this.weekdays = globalConst.WeekObj;
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

  // To create Accordion Notification Form.
  private createNotificationForm() {
    this.accordionForm = this.fb.group({
      notificationData: this.fb.array([])
    });
    this.accordionForm.disable();
  }

  /*This method is invoked to patch the value received from store to the
  reactive accordionForm */
  private patchForm() {
    const control = <FormArray>this.accordionForm.controls.notificationData;
    this.accData.forEach((x, i) => {
      const activeClass = [];
      for (const key in this.weekdays) {
        if (x.weekday.indexOf(key) > -1) {
          activeClass.push(true);
        } else {
          activeClass.push(false);
        }
      }
      control.push(this.fb.group({
        id: x.id,
        duringTime:  x.duringTime,
        toSelectTime : ({value: x.toSelectTime, disabled: true}),
        titleAccordion : ({value: x.titleAccordion, disabled: true}),
        activeClass : [activeClass],
        weekday : [x.weekday],
        daysFrequency : [x.daysFrequency]
      }));
    });
  }

  private listClick(event, weekValue, index, i) {
    let found = false;
    const controlArray = <FormArray> this.accordionForm.get('notificationData');
    const weekSelected = this.accordionForm.get('notificationData').value[i].weekday;
    const activeClass = this.accordionForm.get('notificationData').value[i].activeClass;
    const indexWeek =  weekSelected.indexOf(weekValue);
    weekSelected.forEach(element => {
      if (element === weekValue) {
        found = true;
      }
    });
      if (found) {
        activeClass[index] = false;
        weekSelected.splice(indexWeek, 1);
      } else {
        activeClass[index] = true;
        weekSelected.push(weekValue);
      }
      controlArray.controls[i].get('weekday').setValue(weekSelected);
      controlArray.controls[i].get('activeClass').setValue(activeClass);
  }
  /*
  On click of Reset to Global Settings button,resetToGlobalSettings method is called
  which will reset notification to global settings
  */
  private restToGlobalSettings(i) {
    const weekArray = [];
    let count = 0;
    // Subscribe to global settings data
    this.store.select('updateSettingsData').subscribe((appState) => {
      this.globalStoreData = appState;
    });
    if (this.globalStoreData['duringTime'] && this.globalStoreData['toSelectTime'] && this.globalStoreData['weekday'] !== undefined) {
      const controlArray = <FormArray> this.accordionForm.get('notificationData');
      controlArray.controls[i].get('duringTime').setValue(this.globalStoreData['duringTime']);
      controlArray.controls[i].get('toSelectTime').setValue(this.globalStoreData['toSelectTime']);
      controlArray.controls[i].get('weekday').setValue(this.globalStoreData['weekday']);
      // Change active class color when clicked on reset to global settings
      const weekDayGlobal = this.globalStoreData['weekday'];
      const activeClass = this.accordionForm.get('notificationData').value[i].activeClass;
      for (const key in this.weekdays) {
        if (this.weekdays.hasOwnProperty(key)) {
          weekArray.push(key);
          activeClass[count] = false;
          count++;
        }
      }
      weekDayGlobal.forEach(element => {
          const indexElement =  weekArray.indexOf(element);
          activeClass[indexElement] = true;
      });
      controlArray.controls[i].get('activeClass').setValue(activeClass);
    }
    console.log(this.accordionForm.value);
  }

  /* On click of checkmark icon, accordion notification data is saved.
  */
  public saveAccordionData(event, i) {
    console.log('Save Accordion Data');
    if (window.confirm('Do you want to update notification information?')) {
      console.log(this.accordionForm.get('notificationData').value[i]);
    /*Event UpdateAccordionData will be dispatched which call effect which inturn will call service to save data.*/
   this.store.dispatch(new FromActions.UpdateAccordionData(this.accordionForm.get('notificationData').value[i]));
    }  else {
      console.log('Data is not saved');
    }
  }

  private dontSaveAccordionData(event) {
    console.log('Dont Save Accordion Data');
  }

  // This method is invoked once user clicks on accordion panel.
  private toggleAccordian( props: NgbPanelChangeEvent, $event, i): boolean {

      if (props.nextState) {
        console.log('status:true');
        this.trackStatus = true;
        this.trackStatusPencil = false;
      } else {
        console.log('status:false');
        this.trackStatus = false;
        this.trackStatusPencil = true;
      }
      return this.trackStatus;
 }

 // To Change pencil icon to save icon
 private enableAcciordionForm() {
       this.trackSaveIcon = true;
       this.trackStatusPencil = false;
       console.log('save icon........');
       console.log(this.trackSaveIcon);
}

private freqChange(event, index, i) {
    let freqChangeValue = [];
    const controlArray = <FormArray> this.accordionForm.get('notificationData');
    freqChangeValue = controlArray.controls[i].get('daysFrequency').value;
    freqChangeValue[index] = +event.target.value;
    controlArray.controls[i].get('daysFrequency').setValue(freqChangeValue);
 }
}
