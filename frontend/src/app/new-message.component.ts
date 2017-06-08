import { Component } from '@angular/core';
import { MyHttpService } from './http.service';

@Component({
    selector: "my-new-message",
    template: `
        <md-card>
            <md-card-content>
                <md-input-container>
                    <input [(ngModel)]="message.owner" mdInput placeholder="Name">
                </md-input-container>
                <md-input-container>
                    <textarea [(ngModel)]="message.text" mdInput placeholder="Message"></textarea>
                </md-input-container>
                <md-card-actions>
                    <button (click)="post()" md-button color="primary">POST</button>
                </md-card-actions>
            </md-card-content>
        </md-card>
    `
})

export class NewMessageComponent{

    // http service injected via constructor
    constructor(private httpService: MyHttpService) {
    }
    
    message = {text: '', owner: ''};

    private handle_response(res: Response) {
        console.log(res);
    }

    post() {
        if (this.message.owner) { // owner field must not be empty
            this.httpService.postMessage(this.message);
        }
    }
}