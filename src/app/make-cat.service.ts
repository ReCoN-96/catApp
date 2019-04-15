import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakeCatService {
  userCats = [];
  nameCat: string;
  raceCat: string;
  bdCat: any;
  urlCat: string;


  constructor() { }

  addToMarket($event) {
    $event.preventDefault();

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
}

