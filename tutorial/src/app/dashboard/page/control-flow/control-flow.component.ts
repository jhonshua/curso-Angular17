import { CommonModule } from '@angular/common';
import {  Component, signal } from '@angular/core';
import { TitelComponent } from '../../../shared/titel/titel.component';


type Grade = 'A'|'B'|'F'

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,TitelComponent
  ],
  templateUrl: './control-flow.component.html',
  styles:`` ,

})

export default class ControlFlowComponent {

public showContent = signal(false);

public grade = signal<Grade>('B');

public frameworks = signal(['Angular', 'Vue', 'Svelte','Qwik','React'])

public frameworks2 = signal([])

public toggleContent(){

  this.showContent.update(value => !value)

};

  constructor(){}

}
