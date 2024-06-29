import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitelComponent } from '../../../shared/titel/titel.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitelComponent ],
  template: `
  <app-titel title="View Trasition 1"></app-titel>
  <section class= "flex justify-start">
    <img
    srcset="https://picsum.photos/id/237/200/300"
    alt="Picsum"
    width="200"
    height="300"
    style="view-transition-name:hero1"
    />

    <div
  class = "bg-blue-500 w-56 h-56"></div>
  </section>
  `,
})
export default class ViewTransitionComponent {

}
