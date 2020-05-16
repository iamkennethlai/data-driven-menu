import { Component, OnInit, Input } from '@angular/core';
import { subMenuItems } from '../data-menu';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.less']
})
export class SubMenuComponent implements OnInit {
  @Input() itemId: 0;
  subMenuItem: any;

  constructor() { 
  }

  ngOnInit(): void {  	
  	this.subMenuItem = this.getSubMenuItem(this.itemId);
  }
  subMenuItems = subMenuItems;

  getSubMenuItem(id) {
  	return subMenuItems.find(x => x.id === id);
  }

  menuItemSelect(item){

    if(item.type=='') 
      window.alert('This page is under construction'); 		
        
    if(item.child !=''){
      item.show = !item.show;
    }
  }
}
