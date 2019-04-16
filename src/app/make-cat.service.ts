import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MakeCatService {
  listenCats = [];
  userCats = [];
  nameCat: string;
  raceCat: string;
  bdCat: any;
  urlCat: string;


  constructor() { }


  addToMarket(form: NgForm) {

    const userCat = {
      name: this.nameCat,
      race: this.raceCat,
      bd: this.bdCat,
      url: this.urlCat,
    };

    this.userCats.push(userCat);
    this.nameCat = '';
    this.raceCat = '';
    this.bdCat = '';
    this.urlCat = '';
  }

  addToAdopted($event, i) {
    $event.preventDefault();
    this.listenCats.push(this.userCats[i]);

    const deletedElement = this.userCats.filter(newUserCats => newUserCats !== this.userCats[i]);
    this.userCats = deletedElement;

  }
}

