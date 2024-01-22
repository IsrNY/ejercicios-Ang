import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  template: `
    <h1>
Hola counter
</h1>
<p>Couter: {{counter}}</p>
<button (click)="operar(1)" class="btn btn-outline-primary">Tocame!!</button>
<button (click)="operar(-1)" class="btn btn-outline-primary">Tocame mas fuerte!!!!!!! </button>
<button (click)="reset()" class="btn btn-outline-danger">Baboso jajaja</button>
  `,
  styles: ``
})
export class CounterComponent {
  public counter: number = 0;

    operar(nigga:number) {
      if(nigga == 1){
        if(this.counter!=10){
        this.counter++;
        }
        else{
          window.alert('Ya parale mi rey');
        }
      }
      else if(nigga == -1)
      if(this.counter!=0){
       this.counter--;
      }
      else{
        alert('Sumale algo mi rey');
      }
    }
    reset(){

      if(this.counter != 0){
        this.counter = 0;
      } else{

        alert('Ya esta en cero baboso');
      }
    }
}
