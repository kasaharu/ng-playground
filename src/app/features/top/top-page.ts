import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-top-page',
  imports: [],
  templateUrl: './top-page.html',
  styleUrl: './top-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopPage {}
