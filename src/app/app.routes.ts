import { Routes } from '@angular/router';
import { HabitComponent } from './components/habit/habit.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
    { path: 'habits', component: HabitComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '', component: HomeComponent }
    
];
