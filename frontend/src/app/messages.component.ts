import {Component} from '@angular/core'
import { MaterialModule } from '@angular/material'
import { MyHttpService } from './http.service'

@Component({
    selector: "my-messages",
    template: `<div *ngFor="let message of httpService.messages">
            <md-card>
                <md-card-title>{{message.owner}}</md-card-title>
                <md-card-content>{{message.text}}</md-card-content>
            </md-card>
        </div>`
})

export class MessageComponent{
    private httpService: MyHttpService;

    // http service injected via constructor
    constructor(httpService: MyHttpService) {
        this.httpService = httpService;
    }
}