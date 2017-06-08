import { Component } from '@angular/core';
import { MyNavComponent } from './nav.component'
import { NewMessageComponent } from './new-message.component'
import { MessageComponent } from './messages.component'

@Component({
  selector: 'my-app',
  template: `
    <my-nav></my-nav>
    <my-new-message></my-new-message>
    <my-messages></my-messages>
    `,
})
export class AppComponent  { name = 'Angular'; }
