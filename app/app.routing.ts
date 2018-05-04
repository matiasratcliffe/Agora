import { LoginComponent } from "./pages/login/login.component";
import { HubComponent } from "./pages/hub/hub.component";
import { AppComponent } from "~/app.component";

export const routes = [
	{ path: "", component: AppComponent },
	{ path: "login", component: LoginComponent },
	{ path: "hub", component: HubComponent }
];

export const navigatableComponents = [
	LoginComponent,
	HubComponent
];
