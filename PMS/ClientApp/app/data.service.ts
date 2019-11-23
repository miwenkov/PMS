import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Human } from './human';
import { HumanViewModel } from './human_view_model';
@Injectable()
export class DataService {

    private url = "/api/humans";

    constructor(private http: HttpClient) {
    }

    getHumans() {
        return this.http.get(this.url);
    }

    createHuman(human: Human) {
        return this.http.post(this.url, human);
    }
}