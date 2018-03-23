import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { AccObj } from "../model/accordion.state";
 
@Injectable()
export class AccordionDataService {

    private accDataGlobal = '../../assets/accordionstate.json';
    constructor(private http: Http) {
    }
 
     getAccordionData(): Observable<AccObj[]> {
         return this.http
             .get(this.accDataGlobal)
             .map((response: Response) => {
                 return <AccObj[]>response.json();
             })
             .catch(this.handleError);
    }
 
    private handleError(error: Response) {
         return Observable.throw(error.statusText);
    }
 }