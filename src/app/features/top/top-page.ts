import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Top } from './top/top';

@Component({
  selector: 'app-top-page',
  imports: [Top],
  templateUrl: './top-page.html',
  styleUrl: './top-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TopPage {}
