import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { BaseService } from "../../services/base.service";
import { HttpService } from "../../services/http.service";

import { AppConfig } from "../../model/app.config";
import { User } from "../../model/user.model";

@Component({
	selector: "app-login",
	templateUrl: "pages/login/login.component.html",
	styleUrls: ["pages/login/login.component.css"],
	providers: [BaseService, HttpService]
})
export class LoginComponent implements OnInit {

	user: User;
	isLoggingIn = true;

	constructor(private app: BaseService, private http: HttpService, private page: Page) {
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

	login() {
		this.http.post(AppConfig.server,{}).subscribe(
			() => {},
			() => {}
		);
	}

	signUp() {}

	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
	}

}
