import { Component, OnInit } from "@angular/core";
//import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
	selector: "ns-app",
	template: "<Label text='HERE BE LOGO'></Label>",
})
export class AppComponent {

	constructor(private page: Page) { }

	ngOnInit() {
		//this.router.navigate(["login"]);
	}
}
