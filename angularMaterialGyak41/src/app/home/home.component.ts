import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private sayHiMessage:string = "Üdvözlöm az Angular Material gyakorló oldalon :)";
  private angularLogoURL: string = "https://cdn.cdnlogo.com/logos/a/24/angular-icon.svg";
  private angularLogoTitle: string = "Angular logo";
  private angularLogoAlt: string = "Angular logó felirat nélkül";
  private picsHeight: number = 300;
  
  public get SayHiMessage() : string {
  return this.sayHiMessage;
  }
  
  public get AngularLogoURL(): string {
  return this.angularLogoURL;
  }
  
  public get AngularLogoTitle(): string {
  return this.angularLogoTitle;
  }
  
  
  public get AngularLogoAlt(): string {
  return this.angularLogoAlt;
  }
  
  public get PicsHeight(): number {
  return this.picsHeight;
  }
}
