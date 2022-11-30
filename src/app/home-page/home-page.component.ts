import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { fadeAnimation } from '../animations/animation';
import { FormlyShowPasswordComponent } from '../formly-show-password/formly-show-password.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fadeAnimation],
})
export class HomePageComponent implements OnInit {
  userForm = this.formBuilder.group({});

  model: any = {
    email: undefined,
    password: undefined,
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        placeholder: 'Email',
        required: true,
      },
    },
    {
      key: 'password',
      type: FormlyShowPasswordComponent,
      props: {
        label: 'Mot de passe',
        placeholder: 'Mot de passe',
        required: true,
      },
    },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {}
}
