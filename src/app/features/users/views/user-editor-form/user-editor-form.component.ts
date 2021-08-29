import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { debounceTime, withLatestFrom } from 'rxjs/operators';
import { User } from '../../../../domain/user';

@Component({
  selector: 'app-user-editor-form',
  templateUrl: './user-editor-form.component.html',
  styleUrls: ['./user-editor-form.component.scss'],
})
export class UserEditorFormComponent implements OnInit {
  constructor() {}
  @Input() user!: User;
  @Output() submitted = new EventEmitter<User>();

  form = new FormGroup<User>(
    {
      id: new FormControl(),
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        suite: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl(''),
        geo: new FormGroup({
          lat: new FormControl(''),
          lng: new FormControl(''),
        }),
      }),
      phone: new FormControl(''),
      website: new FormControl(''),
      company: new FormGroup({
        name: new FormControl(''),
        catchPhrase: new FormControl(''),
        bs: new FormControl(''),
      }),
    },
    { updateOn: 'blur' },
  );

  ngOnInit(): void {
    this.form.patchValue({
      id: this.user.id,
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      phone: this.user.phone,
      website: this.user.website,
    });

    this.form.valueChanges.subscribe((val) => this.submitted.emit(val));
  }
}
