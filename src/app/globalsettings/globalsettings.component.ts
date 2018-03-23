import { Component, OnInit, DoCheck } from '@angular/core';
import 'rxjs/add/operator/map';
import { GetGlobalSettings,GetGlobalSettingsModel } from '../model/globalsettings.model';
import  { GlobalDataService }  from '../service/globaldata.service';
import { FormGroup,FormControl,FormBuilder,FormArray } from '@angular/forms';
import * as FromActions from '../actions/global.action';
import { Renderer } from '@angular/core';
import * as fromRootReducer from '../reducers/reducers';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-globalsettings',
    templateUrl: './globalsettings.component.html',
    styleUrls: ['./globalsettings.component.scss']
})
export class GlobalsettingsComponent implements OnInit {

    globalInfo : GetGlobalSettings[];
    weekdays : ['S','M'];
    fromTime : string[];
    toTime :string[];
    globalForm: FormGroup;

    constructor(private gbData: GlobalDataService,private formBuilder: FormBuilder,private render: Renderer,public store: Store<fromRootReducer.State>) { 
    }

    createForm() {
        this.globalForm = this.formBuilder.group({
          weekday : new FormArray([]),
          duringTime: '7:00 am',
          toSelectTime : '7:00 pm'
      });
    }

    ngOnInit() {
      this.gbData.getGlobalData()
      .subscribe(
      gbVal => {
            this.globalInfo = gbVal;
            this.weekdays = this.globalInfo['weekdays'];
            this.fromTime = this.globalInfo['fromTime']
            this.toTime = this.globalInfo['toTime'];
            this.createForm();
        },
        err => {
          console.log(err);
        }
      );
    }

   listClick(event, weekValue,i) {  
      let found = false;
      this.globalForm.value.weekday.forEach(element => {
        if(element == i) {
            found = true;
        } 
      });
      if(found) {
          this.render.setElementClass(event.target, "active-apply", false); 
          var index =  this.globalForm.value.weekday.indexOf(i);
          if (index > -1) {
            this.globalForm.value.weekday.splice(index, 1);
          }
       }  else {
          this.globalForm.value.weekday.push(i);
          this.render.setElementClass(event.target, "active-apply", true); 
       } 
   }

    onSubmit() {
      console.log(this.globalForm);
      this.store.dispatch(new FromActions.GetGlobalApplySettings(this.globalForm.value));
    }
}