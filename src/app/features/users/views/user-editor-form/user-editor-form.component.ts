import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-user-editor-form',
  templateUrl: './user-editor-form.component.html',
  styleUrls: ['./user-editor-form.component.scss'],
})
export class UserEditorFormComponent implements OnInit {
  constructor() {}
  @Input() user: User | null = null;

  ngOnInit(): void {}
}
