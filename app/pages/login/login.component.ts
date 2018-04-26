import { Component, OnInit } from "@angular/core";
import { BaseService } from "../../services/base.service";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../../model/user.model";

@Component({
	selector: "app-login",
	templateUrl: "pages/login/login.component.html",
	styleUrls: ["pages/login/login.component.css"],
	providers: [BaseService]
})
export class LoginComponent implements OnInit {

	user: User;
	isLoggingIn = true;

	constructor(private appService: BaseService, private page: Page) {
		this.user = new User();
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	submit() {
		if (this.isLoggingIn) {
			this.login();
		} else {
			this.signUp();
		}
	}

	login() {}

	signUp() {}

	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
	}

}
