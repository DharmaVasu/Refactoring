import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class modService {


    constructor(private _http: Http) { }

    findAll() {
        return this._http.get('/findall').map(res => res.json()).catch(err => {
            return Observable.of({ 'err': err })
        });
    }

    find(userId) {
        return this._http.get('/find?userId=' + userId).map(res => res.json());
    }

    onEditUsers(user): Observable<any> {

        let ids = [];
        for (let i = 0; i < user.length; i++) {
            ids.push(user[i].id);
        }

        return this._http.post('/edit', { userId: ids }).map(res => res.json()).catch(err => {
            return Observable.of({ 'err': err })
        });
    }

    onEditUser(user): Observable<any> {
        return this._http.post('/edit', { userId: user.id }).map(res => res.json()).catch(err => {
            return Observable.of({ 'err': err })
        });
    }

    onRemove(userId): Observable<any> {
        return this._http.post('/remove', { userId: userId }).map(res => res.json()).catch(err => {
            return Observable.of({ 'err': err })
        });
    }

}
