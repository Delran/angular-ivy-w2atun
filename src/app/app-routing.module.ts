import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home-page',
        pathMatch: 'full',
      },
      {
        path: 'home-page',
        component: HomePageComponent,
        data: { animation: 'homePage' },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { animation: 'dashboard' },
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home-page',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
