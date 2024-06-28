import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';
import { TitelComponent } from '../../../shared/titel/titel.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [CommonModule,HeavyLoadersFastComponent,TitelComponent],
  templateUrl: './defer-options.component.html',
  styles:  ` `
})

export default class DeferOptionsComponent {

 }
