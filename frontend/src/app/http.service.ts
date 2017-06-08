
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MyHttpService {
    BASE_URL = 'http://localhost:6180/api';

    messages = [];

    // http is an Http object assigned by injection
    constructor(private http: Http) {
        this.getMessages();
    }

    public async getMessages() {
        this.http.get(this.BASE_URL + '/messages').toPromise()
        .then((rc) => {this.messages = rc.json()})
        .catch((error) => this.handleError(`getMessages() failed - ${error}`))
    }

    async postMessage(message) {
        console.log(`debug: postMessage ${message}...`);
        this.http.post(this.BASE_URL + "/messages", message).toPromise()
        .then( () =>  this.messages.push(message) )
        .catch((error) => this.handleError("failed to post message -" + error));
    }

    private handleError(error) {
        console.error(error);
    }
}