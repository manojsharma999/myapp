import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes} from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { MyserService } from './myser.service';
import { HttpClientModule } from '@angular/common/http';
import { LimitPipe } from './limit.pipe';
import { AppRoutingModule } from './app-routing.module';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    LimitPipe
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule, AppRoutingModule
  ],
  providers: [MyserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
