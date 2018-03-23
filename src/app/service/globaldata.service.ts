import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { GetGlobalSettings } from "../model/globalsettings.model";
 
@Injectable()
export class GlobalDataService {
    private dataGlobal = '../../assets/globalsetting.json';
    constructor(private http: Http) {
    }
 
    getGlobalData(): Observable<GetGlobalSettings[]> {
        return this.http
            .get(this.dataGlobal)
            .map((response: Response) => {
                 return <GetGlobalSettings[]>response.json();
            })
            .catch(this.handleError);
    }
 
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
 }