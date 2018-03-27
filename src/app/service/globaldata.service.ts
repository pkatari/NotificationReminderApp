import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import "rxjs/Rx";
import { HttpClient } from '@angular/common/http';
import { GetGlobalSettings } from '../model/globalsettings.model';
@Injectable()
export class GlobalDataService {
    globalData: {};
    private dataGlobal = '../../assets/globalsetting.json';
    constructor(private http: HttpClient) {
    }
    getGlobalData(): Observable<any> {
        return this.http.get(this.dataGlobal);
    }

    updateGlobalData(globaldata: {}): Observable<{}> {
       this.globalData = globaldata;
       console.log(this.globalData);
       return Observable.of(this.globalData);
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
 }
