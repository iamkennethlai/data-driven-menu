import { Component, OnInit, Input, Output } from '@angular/core';
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
  }
  subMenuItems = subMenuItems;
  subMenuItem = subMenuItems.find(x => x.id === this.itemId);

}
