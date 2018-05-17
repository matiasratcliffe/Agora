import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

import { BaseService } from "~/services/base.service";

@Component({
	selector: "ns-app",
	template: "<Button text='HERE BE LOGO' (tap)='change()'></Button>",
	providers: [BaseService]
})
export class AppComponent implements OnInit, AfterViewInit {

	constructor(private app: BaseService, private router: Router) { }

	ngOnInit() {
		console.log("oninit");
		//this.router.navigate(["login"]);
	}

	ngAfterViewInit() {
		console.log("aftervievvinit");
	}

	change() {
		console.log("change");
		this.router.navigate(["login"]);	
	}
}
