import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Address, Company, User } from '../../../../domain/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  // TODO: user が渡されなかった場合エラー
  @Input() user!: User;
  @Output() submitted = new EventEmitter<User>();
  @Output() canceled = new EventEmitter<void>();

  addressForm = new FormGroup<Address>({
    street: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
    geo: new FormGroup({ lat: new FormControl(''), lng: new FormControl('') }),
  });

  userForm = new FormGroup<User>({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
    company: new FormGroup<Company>({
      name: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl(''),
    }),
    address: this.addressForm,
  });

  ngOnInit(): void {
    this.userForm.setValue({
      id: this.user.id,
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      phone: this.user.phone,
      website: this.user.website,
      company: {
        name: this.user.company.name,
        catchPhrase: this.user.company.catchPhrase,
        bs: this.user.company.bs,
      },
      address: {
        street: this.user.address.street,
        suite: this.user.address.suite,
        city: this.user.address.city,
        zipcode: this.user.address.zipcode,
        geo: { lat: this.user.address.geo.lat, lng: this.user.address.geo.lng },
      },
    });
  }

  submit(): void {
    this.submitted.emit(this.userForm.value);
  }

  cancel(): void {
    this.canceled.emit();
  }
}
