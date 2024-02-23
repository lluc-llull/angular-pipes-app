import { Component } from '@angular/core';
import {interval, Observable, tap} from "rxjs";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select Pipe
  public name: string = 'Lluc';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Cata';
    this.gender = 'female';
  }

  // i18n Plural Pipe && Slice Pipe
  public clients: string[] = ['Maria', 'Pedro', 'Lluc', 'Cata', 'Melissa', 'Esteve', 'Aurora'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void {
    this.clients.shift();
  }

  // Json Pipe && KeyValue Pipe
  public person = {
    name: 'Lluc',
    age: 24,
    address: 'Creu, 45, Sant Llorenç'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })

}
