import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component/login.component';
import { Dashboard } from './dashboard/dashboard';
import { SingupComponent } from './pages/singup.component/singup.component';
import { ForgetpswComponent } from './pages/login/forgetpsw.component/forgetpsw.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  {path : 'dashboard', component: Dashboard, title: 'Dashboard' },
  {path :'singup' ,component : SingupComponent, title: 'Singup' },
  {path: 'forgot-password',component: ForgetpswComponent, title: 'Forgot Password'  },
  
];
