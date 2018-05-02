import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
//import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
	imports: [
		NativeScriptModule,
		//NativeScriptHttpModule,
		NativeScriptHttpClientModule,
		NativeScriptFormsModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes)
	],
	declarations: [
		AppComponent,
		...navigatableComponents
	],
	bootstrap: [AppComponent],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
