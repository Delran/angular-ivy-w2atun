import { Component, ElementRef, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-show-password',
  template: `<input>`,
  styleUrls: ['./formly-show-password.component.scss'],
})
export class FormlyShowPasswordComponent extends FieldType {
  @ViewChild('passwordField', { static: false }) passwordField!: ElementRef;

  hidePassword: boolean = true;
}
