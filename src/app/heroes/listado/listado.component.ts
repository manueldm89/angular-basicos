import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman','ironman', 'hulk', 'thor'];
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
