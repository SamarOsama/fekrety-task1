import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule , Routes} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { ItemsComponent } from './Components/items/items.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import{PostsserviceService} from './services/postsservice.service';
import { PostformComponent } from './Components/postform/postform.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms'; 
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import{NgxSpinnerModule} from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
//import { AngularFontAwesomeModule} from '@fortawesome/fontawesome-free';
import { FooterComponent } from './footer/footer.component'



const appRoutes:Routes =
[
  {path:'home' , component:HomeComponent},
  {path:'' , redirectTo:'/home', pathMatch:'full'},
  {path:'register' , component:RegisterComponent},
  {path:'items' , component:ItemsComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ItemsComponent,
    NavbarComponent,
    PostformComponent,
    FooterComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    ScrollingModule,
    //AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [PostsserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
