import { NgModule }      from '@angular/core';
import { NoopAnimationsModule }  from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from '@angular/material'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { MessageComponent } from './messages.component'
import { MyHttpService } from './http.service'
import { NewMessageComponent } from './new-message.component'
import { MyNavComponent } from './nav.component'

@NgModule({
  imports:      [ BrowserModule, MaterialModule, HttpModule, FormsModule, NoopAnimationsModule ],
  declarations: [ AppComponent, MessageComponent, NewMessageComponent, MyNavComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ MyHttpService ]
})
export class AppModule { }
