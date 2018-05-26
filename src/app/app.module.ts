import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service'
import {FormsModule} from '@angular/forms'

import { loginComponenet } from './app.component';


@NgModule({
  declarations: [
    loginComponenet
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [loginComponenet]
})
export class AppModule {
  constructor() {
    localStorage.setItem("users", JSON.stringify({ admin: "this-is-confidential" }))
  }
}
