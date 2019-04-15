import { Component, OnInit } from '@angular/core';
import { MakeCatService } from '../make-cat.service';

@Component({
  selector: 'app-app-list-kitten',
  templateUrl: './app-list-kitten.component.html',
  styleUrls: ['./app-list-kitten.component.scss']
})
export class AppListKittenComponent implements OnInit {

  constructor(
    public makeCatService: MakeCatService,
  ) { }

  ngOnInit() {
  }

}
