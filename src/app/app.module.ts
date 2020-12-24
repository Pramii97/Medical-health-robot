import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent} from './event/event.component';
import { ContactComponent} from './contact/contact.component';
import { NewsComponent} from './news/news.component';
import { RegisterComponent} from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CustodianComponent } from './custodian/custodian.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    ContactComponent,
    NewsComponent,
    RegisterComponent,
    SignInComponent,
    PatientComponent,
    DoctorComponent,
    CustodianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
