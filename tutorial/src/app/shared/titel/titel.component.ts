import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titel',
  standalone: true,
  imports: [CommonModule],
  template:`<h1 class="text-3xl mb-5">{{title}}</h1>`
})
export class TitelComponent {

  @Input({required : true}) title! :string;

  constructor(){}

 }
