import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyShowPasswordComponent } from './formly-show-password/formly-show-password.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
  ],
  declarations: [
    AppComponent, 
    HomePageComponent, 
    FormlyShowPasswordComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
