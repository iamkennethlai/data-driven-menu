import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  cancel(){
  	this._location.back();
  }
}
