import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { AccordionState } from '../model/accordion.state';
@Injectable()
export class AccordionDataService {
    accData: {};
    private accDataGlobal = '../../assets/accordionstate.json';
    constructor(private http: HttpClient) {
    }
    public getAccordionData(): Observable<any> {
        return this.http.get(this.accDataGlobal);
    }

    public updateAcordionData(globaldata: {}): Observable<{}> {
        this.accData = globaldata;
        return Observable.of(this.accData);
    }
    public handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
 }
