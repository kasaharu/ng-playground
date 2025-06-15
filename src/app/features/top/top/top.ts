import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TopStore } from './top.store';

@Component({
  selector: 'app-top',
  imports: [],
  providers: [TopStore],
  templateUrl: './top.html',
  styleUrl: './top.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Top {
  private readonly topStore = inject(TopStore);

  state = this.topStore.state;
}
