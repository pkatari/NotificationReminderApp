import { Component, OnInit, DoCheck } from '@angular/core';
import 'rxjs/add/operator/map';
import { GetGlobalSettings} from '../model/globalsettings.model';
import { FormGroup,FormControl,FormBuilder,FormArray } from '@angular/forms';
import * as FromActions from '../actions/global.action';
import { Renderer } from '@angular/core';
import * as fromRootReducer from '../reducers/reducers';
import { Store } from '@ngrx/store';
import * as globalConst from '../constants/globalConstants'; 

@Component({
    selector: 'app-globalsettings',
    templateUrl: './globalsettings.component.html',
    styleUrls: ['./globalsettings.component.scss']
})
export class GlobalsettingsComponent implements OnInit {

    globalInfo : GetGlobalSettings[];
    weekdays : string[];
    fromTime : string[];
    toTime :string[];
    globalForm: FormGroup;
    constructor(private formBuilder: FormBuilder,private render: Renderer,public store: Store<fromRootReducer.State>) { 
    }

    createForm() {
        this.globalForm = this.formBuilder.group({
        weekday : new FormArray([]),
        duringTime: '7:00 am',
        toSelectTime : '7:00 pm'
      });
    }

    ngOnInit() {
        this.weekdays = globalConst.weekdays;
        this.fromTime = globalConst.fromTime;
        this.toTime = globalConst.toTime;
        this.createForm();
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
      console.log(this.globalForm.value);
      //Dispatch action on submit
      this.store.dispatch(new FromActions.UpdateGlobalSettings(this.globalForm.value));
    }
}