import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name: string;
  message: string;
  url:string;
  fullName:string;
  constructor(){
    this.name = 'Angular 11';
    this.message = 'The Angular is MVC Framework';
    this.url = "https://www.webnethelper.com";
    this.fullName = '';
  }

  display():void {
    alert('Button is clicked');
  }
  displayParameter(event:any):void {
    alert(`The Received value from UI element = ${event.target.value}`);
  }
}
