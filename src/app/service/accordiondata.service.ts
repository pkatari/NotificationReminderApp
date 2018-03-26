import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { AccordionState } from "../model/accordion.state";
 
@Injectable()
export class AccordionDataService {
    accData : {}
    private accDataGlobal = '../../assets/accordionstate.json';
    constructor(private http: Http) {
    }
 
     getAccordionData(): Observable<AccordionState[]> {
         return this.http
             .get(this.accDataGlobal)
             .map((response: Response) => {
                 return <AccordionState[]>response.json();
             })
             .catch(this.handleError);
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