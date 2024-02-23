import {Component} from '@angular/core';
import {Color, Hero} from "../../interfaces/hero.interface";

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.yellow,
    },
    {
      name: 'Deadpool',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      canFly: true,
      color: Color.green,
    },
  ]

  toggleUppercase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder(value: keyof Hero):void {
    this.orderBy = value;
  }


}
