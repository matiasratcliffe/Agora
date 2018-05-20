<<<<<<< HEAD
import { LoginComponent } from './pages/login/login.component';
import { HubComponent } from './pages/hub/hub.component';

export const routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'hub', component: HubComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'login' }
=======
import { LoginComponent } from "./pages/login/login.component";
import { HubComponent } from "./pages/hub/hub.component";

export const routes = [
	{ path: "login", component: LoginComponent },
	{ path: "hub", component: HubComponent }
>>>>>>> 21c19486c4cd9ea76e1a475610bc9b52c268b362
];

export const navigatableComponents = [
	LoginComponent,
	HubComponent
];
