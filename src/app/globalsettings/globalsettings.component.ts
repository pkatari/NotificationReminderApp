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
  weekdays : {};
  fromTime : string[];
  toTime :string[];
  globalForm: FormGroup;
  weekdaySelected : string[];
  selectedWeek : number;
  default: string = '7.00 am';

  constructor(private gbData: GlobalDataService,private formBuilder: FormBuilder,private render: Renderer,public store: Store<fromRootReducer.State>) { 
   
  }

  createForm() {
      this.globalForm = this.formBuilder.group({
        weekday : new FormArray([]),
        duringTime: '',
        toSelectTime : ''
     });
  }

  ngOnInit() {
    console.log("ngOninit")
    this.gbData.getGlobalData()
    .subscribe(
     gbVal => {
      console.log("ngOninit1")
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
      this.globalForm.value.weekday.push(weekValue);
      this.selectedWeek = i;
      this.render.setElementClass(event.target, "active-apply", true);  
  }

  isActive(i) {
      return this.selectedWeek ===i
  }

  onSubmit() {
    console.log("submit")  
    console.log(this.globalForm);
    this.store.dispatch(new FromActions.GetGlobalApplySettings(this.globalForm.value));
  }
}