import { Component, OnInit, Input } from '@angular/core';
import { subMenuItems } from '../data-menu';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.less']
})
export class SubMenuComponent implements OnInit {
  @Input() itemId: 0;
  constructor() { }

  ngOnInit(): void {
  	alert(this.itemId);
  }

  subMenuItems= subMenuItems;

}
