import { Routes } from '@angular/router';
import { HabitComponent } from './components/habit/habit.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { provideTranslocoScope } from '@jsverse/transloco';

export const routes: Routes = [
    {
        path: 'habits', loadComponent: () => import('./components/habit/habit.component').then(m => m.HabitComponent) 
        
    },
    {
        path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent),
        providers: provideTranslocoScope()
    },
    {
        path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent),
        
    },
    {
        path: 'logout', loadComponent: () => import('./components/logout/logout.component').then(m => m.LogoutComponent), 
        
    },
    {
        path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), 
        providers: provideTranslocoScope('home')
    }
    
];
