import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Nicolás';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural

  public clients:string[] = ['María','Pedro', 'Fernando','Nicolás'];

  public clientsMap = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos 1 cliente esperando.',
    '=2' : 'tenemos 2 personas esperando.',
    'other' : 'tenemos # clientes esperando.'
  };

  deleteClient():void{
    this.clients.shift();
  }

  //Key Value Pipe
  public person ={
    name: 'Nicolás',
    age: 21,
    address: 'Quito, Ecuador'
  }

  //Async Pipe
  public myObservableTime = interval(2000);

      //Async Pipe con una promesa
        public promiseValue: Promise<string> = new Promise ((resolve, reject) => {
          setTimeout(() => {
            resolve('Tenemos data en la promesa.');
          }, 3500)
        })
}
