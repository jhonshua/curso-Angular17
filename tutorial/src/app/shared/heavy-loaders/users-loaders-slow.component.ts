import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'user-loaders',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: '<div>./heavy-loaders-slow.component.html<div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class userLoadersComponent { }
