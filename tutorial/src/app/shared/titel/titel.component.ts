import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-titel',
  standalone: true,
  imports: [CommonModule],
  template:`<h1 class="text-3xl mb-5">titel </h1>`,
  styleUrl: './titel.component.css',

})
export class TitelComponent {


 }
