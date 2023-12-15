import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { StackPageComponent } from './pages/stack-page/stack-page.component';
import { UsersComponent } from './pages/users/users.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'user-page', component: UserPageComponent },
  { path: 'admin-page', component: AdminPageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'stack', component: StackPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
