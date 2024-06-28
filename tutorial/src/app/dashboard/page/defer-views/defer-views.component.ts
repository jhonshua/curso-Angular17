import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';
import { TitelComponent } from '../../../shared/titel/titel.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [CommonModule, HeavyLoadersSlowComponent, TitelComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
