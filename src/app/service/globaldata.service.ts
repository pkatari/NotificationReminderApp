import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GlobalDataService {
    globalData: {};
    constructor(private http: HttpClient) {
    }

    public updateGlobalData(globaldata: {}): Observable<{}> {
       this.globalData = globaldata;
       return Observable.of(this.globalData);
    }
    public handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
 }
