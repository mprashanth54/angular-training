import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class loginComponenet {
  title = 'Login Module';
  login ='Login Name';
  password =  '';
  username = ''

  constructor(){}

  submit(){
    
  }


}
