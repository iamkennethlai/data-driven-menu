import { Component, ViewChild, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { menuItems } from '../data-menu';
import { subMenuItems } from '../data-menu';

@Component({
  selector: 'app-data-menu',
  templateUrl: './data-menu.component.html',
  styleUrls: ['./data-menu.component.less']
})
export class DataMenuComponent implements OnInit {
  @Input() getShowForm: boolean;
  @Output() getShowFormChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  menuItems = menuItems;
  subMenuItems= subMenuItems;

  menuItemSelect(id, type, child){
  	this.getShowForm=false;
  	this.getShowFormChange.emit(false);
  	if(type=='') 
  		window.alert('This page is under construction');
	else if(type=='form') {
		this.getShowForm=true;
		this.getShowFormChange.emit(true);
	}  		
	else
  		alert('hi');

  		
  	if(child !='')
		alert('drop down');
  }
}
