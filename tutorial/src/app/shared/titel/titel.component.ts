import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-titel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './titel.component.html',
  styleUrl: './titel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitelComponent { }
