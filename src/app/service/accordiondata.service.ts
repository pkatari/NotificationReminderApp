import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { AccordionState } from "../model/accordion.state";
 
@Injectable()
export class AccordionDataService {
    accData : {}
    private accDataGlobal = '../../assets/accordionstate.json';
    constructor(private http: HttpClient) {
    }
 
     getAccordionData(): Observable<any> {
         return this.http.get(this.accDataGlobal);
        
    }

    updateAcordionData(globaldata : {}) : Observable<{}> {
        console.log("Inside Service..Update Accordion Data")
       this.accData =globaldata;
       console.log(this.accData);
       console.log("Data is Updated..........");
       return Observable.of(this.accData);
    }
 
    private handleError(error: Response) {
         return Observable.throw(error.statusText);
    }
 }