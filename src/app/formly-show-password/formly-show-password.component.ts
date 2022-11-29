import { Component, ElementRef, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-show-password',
  template: `
  <mat-form-field
    [hideRequiredMarker]="true"
    [floatLabel]="props['floatLabel']"
    [appearance]="props['appearance']"
    [color]="props['color']"
    [style.width]="'100%'">
  
    <mat-label *ngIf="props.label && props['hideLabel'] !== true">
        {{ props.label }}
        <span *ngIf="props.required && props['hideRequiredMarker'] !== true" class="mat-form-field-required-marker">*</span>
    </mat-label>
  
    <input matInput #passwordField
        [id]="id"
        [type]="hidePassword ? 'password' : 'text'"
        [readonly]="props.readonly"
        [formlyAttributes]="field"
        [tabindex]="props.tabindex || 0"
        [placeholder]="props.placeholder ? props.placeholder : ''">
  
    <mat-icon matSuffix [ngClass]="hidePassword ? 'mat-primary' : 'greyed-out'"
      class="toggle-password color-transition" click-stop-propagation
      (click)="hidePassword = !hidePassword">{{hidePassword ? "visibility" : "visibility_off"}}</mat-icon>
  
    <mat-error [id]="id">
        <formly-validation-message [field]="field"></formly-validation-message>
    </mat-error>
  
  </mat-form-field>
  `,
  styleUrls: ['./formly-show-password.component.scss'],
})
export class FormlyShowPasswordComponent extends FieldType {
  @ViewChild('passwordField', { static: false }) passwordField!: ElementRef;

  hidePassword: boolean = true;
}
