import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-show-password',
  template: `
  <input>
  `,
  styles: [
    `
    input {
      width: 100%;
      margin-bottom: 5%;
    }
    `,
  ],
})
export class FormlyShowPasswordComponent extends FieldType<FieldTypeConfig> {}
