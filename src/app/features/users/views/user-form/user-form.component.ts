import { Component, Input, OnInit } from '@angular/core';
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

  addressForm = new FormGroup<Address>({
    street: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
    geo: new FormGroup({ lat: new FormControl(''), lng: new FormControl('') }),
  });

  userForm = new FormGroup<User>({
    id: new FormControl(0),
    name: new FormControl(''),
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
    this.userForm.patchValue({
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      phone: this.user.phone,
      company: {
        name: this.user.company.name,
        catchPhrase: this.user.company.catchPhrase,
        bs: this.user.company.bs,
      },
    });
  }

  submit(): void {
    console.log(this.userForm.value);
  }

  cancel(): void {
    console.log('click cancel button');
  }
}
