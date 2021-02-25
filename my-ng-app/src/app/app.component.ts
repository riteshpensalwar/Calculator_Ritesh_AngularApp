import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  message: string;
  url:string;
  fullName:string;
  input:string = '';
  result:string = '';
  num1: number = 0;
  num2: number = 0;
  op: string = '';

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

  buttonClick(event: any): void {
    
    this.result += event.target.defaultValue;
    
    
  }

  setOperator (event: any): void {
    this.result = this.result + event.target.defaultValue;
    this.op = event.target.defaultValue;
  }

  equalTo(): void {

    // if(this.result.length != 0 && this.result != ''){
      
    //   var res = this.result.split(this.op);
    //   if(res.length >= 2){
    //     this.result = this.addNumbers(...res).toString();
    //     // this.num1 = Number(res[0]);
    //     // this.num2 = Number(res[1]);
    //     // var sum = this.num1 + this.num2;
    //     // this.result = sum.toString();
    //   }
      
      
    // }

    if(this.op !=''){
      console.log
      var res = this.result.split(this.op);
      switch(this.op){
        case '+':
          this.result = this.addNumbers(Number(res[0]),Number(res[1])).toString();
          break;
        case '-':
          this.result = this.subNumber(Number(res[0]),Number(res[1])).toString();
          break;
        case '*':
          this.result = this.multi(Number(res[0]),Number(res[1])).toString();
          break;
        case '/':
          this.result = this.div(Number(res[0]),Number(res[1])).toString();
          //this.result= this.div(...res).toString(); 
          break;
        default:
          this.op = '';     

      }
    }
    
  }


  

  addNumbers(n1:number,n2:number):number{
    let sum=0;
    return n1 + n2;
  }
  clear() {
     this.result = '';
     this.op = '';
     this.num1=0;
     this.num2=0;
  }  

 

  subNumber(n1:number,n2:number): number {
    return n1-n2;
  }

  multi(n1:number,n2:number): number {
    return n1*n2;
  }
  div(n1:number,n2:number): number {
    return n1/n2;
  }
// addNumbers(...nos: string []): number {
  //   let sum = 0;
  //   nos.forEach(n =>  sum += Number(n));
  //   return sum;
  // }
 // subNumber(...nos: string[]): number {
  //   console.log(nos[0], nos[1])
  //   let sum = 0;
  //   nos.forEach(n => sum -= Number(n));
  //   return sum;
  // }
  // multi(...nos: string[]): number {
  //   let sum = 0;
  //   nos.forEach(n => sum *= Number(n));
  //   return sum;
  // }

  // div (...nos: string[]): number {
  //   let sum = 0;
  //   nos.forEach(n => sum /= Number(n));
  //   return sum;
  // }

  
}
  

   

