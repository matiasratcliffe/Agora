import { LoginComponent } from "./pages/login/login.component";
import { HubComponent } from "./pages/hub/hub.component";

export const routes = [
	{ path: "login", component: LoginComponent },
	{ path: "hub", component: HubComponent },
];

export const navigatableComponents = [
	LoginComponent,
	HubComponent,
];
