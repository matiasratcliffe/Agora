import { StartComponent } from "./pages/start/start.component";
import { LoginComponent } from "./pages/login/login.component";
import { HubComponent } from "./pages/hub/hub.component";

export const routes = [
    { path: "", component: StartComponent },
		{ path: "login", component: LoginComponent },
    { path: "hub", component: HubComponent }
];

export const navigatableComponents = [
    StartComponent,
		LoginComponent,
    HubComponent
];
