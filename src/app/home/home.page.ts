import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


    text =  'This is Arafat !' ;

  onClick() {
      this.text =  'Thanks for clicking !' ;
  }

}
