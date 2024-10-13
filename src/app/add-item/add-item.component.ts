import { Component, Signal } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  name:string = '';
  amount?:number;

  addItem() {

  }
}
