import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { EventComponent} from './event/event.component';
import { ContactComponent} from './contact/contact.component';
import { NewsComponent} from './news/news.component';
import { RegisterComponent} from './register/register.component';
import { SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'event', component : EventComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'news', component : NewsComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'sign-in', component : SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
