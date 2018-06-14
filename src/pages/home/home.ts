import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) { 
    
  }

  heroes = [];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    } 
  }

  deletecomnt($commnt) {
    this.heroes.splice($commnt, 1);
  }

}

 

  

