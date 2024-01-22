import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-heroes',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: String = 'IronMan';
  public age:number = 46;

  get capitalizeName():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName():void{
    this.name = 'Spiterman';
  }

  changeAge(){
    this.age = 23;
  }
  resetForm():void{
    this.name = 'IronMan';
    this.age = 46;
  }
}
