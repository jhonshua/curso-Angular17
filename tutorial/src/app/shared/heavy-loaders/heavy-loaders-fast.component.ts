import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template:'<div>Holamundo</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent { }
