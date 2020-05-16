import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { menuItems } from '../data-menu';
import { subMenuItems } from '../data-menu';

@Component({
  selector: 'app-data-menu',
  templateUrl: './data-menu.component.html',
  styleUrls: ['./data-menu.component.less']
})
export class DataMenuComponent {
  @Input() isShowForm: boolean;
  @Output() isShowFormChange = new EventEmitter<boolean>();


  menuItems = menuItems;
  subMenuItems= subMenuItems;

  menuItemSelect(item, ev){
	
  /* Set the not visible */
	this.isShowForm=false;
	this.isShowFormChange.emit(false);

	if(item.type=='') 
		window.alert('This page is under construction');
	else if(item.type=='form') {
		this.isShowForm=true;
		this.isShowFormChange.emit(true);
	}  		
  		
  	if(item.child !='')
		ev.target.nextSibling.style.display = 'block';
  }
  
  showForm(p){
  	this.isShowForm = p;
  }
}
