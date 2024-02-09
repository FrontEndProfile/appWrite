import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { CreateComponent } from './page/create/create.component';
import { UpdateComponent } from './page/update/update.component';
import { AccountComponent } from './account/account.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { Account } from 'appwrite';
import { AdminHomeComponent } from './page/admin-home/admin-home.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    AccountComponent,
    AdminAuthComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AdminHomeComponent,
    HeroComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
