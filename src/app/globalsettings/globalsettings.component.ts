import { Component, OnInit, DoCheck } from '@angular/core';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import * as FromActions from '../actions/global.action';
import { Renderer2} from '@angular/core';
import * as fromRootReducer from '../reducers/reducers';
import { Store } from '@ngrx/store';
import * as globalConst from '../constants/globalConstants';

@Component({
    selector: 'app-globalsettings',
    templateUrl: './globalsettings.component.html',
    styleUrls: ['./globalsettings.component.scss']
})
export class GlobalsettingsComponent implements OnInit {

    weekdays: {};
    fromTime: string[];
    toTime: string[];
    globalForm: FormGroup;
    constructor(private renderer: Renderer2, private formBuilder: FormBuilder,
        public store: Store<fromRootReducer.State>) {
    }

    ngOnInit() {
        this.weekdays = globalConst.WeekObj;
        this.fromTime = globalConst.fromTime;
        this.toTime = globalConst.toTime;
        this.createForm();
    }

   // This method is incoked to create globalForm.
    private createForm() {
        this.globalForm = this.formBuilder.group({
        weekday : new FormArray([]),
        duringTime: '7:00 am',
        toSelectTime : '7:00 pm'
      });
    }

    private listClick(event, weekValue, i) {
        let found = false;
        this.globalForm.value.weekday.forEach(element => {
        if (element === weekValue) {
            found = true;
        }
      });
      if (found) {
          this.renderer.removeClass(event.target, 'active-apply');
          const index =  this.globalForm.value.weekday.indexOf(weekValue);
          if (index > -1) {
            this.globalForm.value.weekday.splice(index, 1);
          }
       }  else {
          this.globalForm.value.weekday.push(weekValue);
          this.renderer.addClass(event.target, 'active-apply');
       }
    }
   /*On click of 'Apply' Buton,onSubmit method is called which dispatch
   an action UpdateGlobalSettings which will call effect which in turn will
   invoke service to store data */
    private onSubmit() {
      console.log(this.globalForm.value);
      // Dispatch action on submit
      this.store.dispatch(new FromActions.UpdateGlobalSettings(this.globalForm.value));
    }
}
