import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AuthguardGuard} from './authguard.guard';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewStoreFormComponent } from './new-store-form/new-store-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomeComponent } from './home/home.component';
import {LoginService} from './login.service';


const appRoutes:Routes = [

{
  path:'login',

  component:LoginformComponent  
},
{
  path:'new-store-form',
  component:NewStoreFormComponent  
}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    HeaderComponent,
    NewStoreFormComponent,
    ContactUsComponent,
    FooterComponent,
    LoginformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path:'about',component:AboutComponent},
    {path:'dashboard',component:DashboardComponent},
     {path:'login',component:LoginformComponent},
     {path:'contact',component:ContactUsComponent},
     {path:'',component:HomeComponent},
     {path:'new-store-form',component:NewStoreFormComponent}
    ])
  ],
  providers: [LoginService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
