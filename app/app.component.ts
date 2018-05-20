import { Component, OnInit, AfterViewInit } from "@angular/core";
<<<<<<< HEAD
=======
import { Router } from "@angular/router";
>>>>>>> 21c19486c4cd9ea76e1a475610bc9b52c268b362

import { BaseService } from "~/services/base.service";

@Component({
	selector: "ns-app",
<<<<<<< HEAD
	templateUrl: "app.component.html",
	providers: [BaseService]
})
export class AppComponent {

	constructor(private app: BaseService) { }

=======
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
>>>>>>> 21c19486c4cd9ea76e1a475610bc9b52c268b362
}
