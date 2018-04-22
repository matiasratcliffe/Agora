import { StartComponent } from "./pages/start/start.component";
import { LoginComponent } from "./pages/login/login.component";

export const routes = [
    { path: "", component: StartComponent },
		{ path: "login", component: LoginComponent }
];

export const navigatableComponents = [
    StartComponent,
		LoginComponent
];
