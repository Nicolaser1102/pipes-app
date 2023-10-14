import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'nicolás';
  public nameUpper: string= 'NICOLÁS';
  public fullName: string = 'nICOlAS MorA';

}
