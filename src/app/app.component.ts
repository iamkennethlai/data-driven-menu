import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'data-driven-menu';
  isShowForm = false;

  showForm(p){
  	this.isShowForm = p;
  }
}
