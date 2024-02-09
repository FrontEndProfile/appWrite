import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { CreateComponent } from './page/create/create.component';
import { UpdateComponent } from './page/update/update.component';
import { AccountComponent } from './account/account.component';
import { AdminHomeComponent } from './page/admin-home/admin-home.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
