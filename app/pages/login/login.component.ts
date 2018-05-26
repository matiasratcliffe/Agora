import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { BaseService } from "~/services/base.service";
import { HttpService } from "~/services/http.service";

import { AppConfig } from "~/model/app.config";
import { User } from "~/model/user.model";

@Component({
	selector: "app-login",
	templateUrl: "login.component.html",
	styleUrls: ["login.component.css"],
	providers: [BaseService, HttpService]
})
export class LoginComponent implements OnInit {

	user: User;
	isLoggingIn = true;

	constructor(private app: BaseService, private http: HttpService, private page: Page) {
		this.http.setDefaultUrl(AppConfig.server);
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
		this.http.post({
			"email": this.user.email,
			"password": this.user.password
		}, AppConfig.server + "users/login").subscribe(
			(response) => { 
				alert('bien');
				this.app.setData("user", this.user);
				console.log(response.headers.get("X-Auth"));
				this.app.goto("hub");
			},
			(error) => {
				console.log(error);
				alert("mal");
				//this.app.goto("hub");
			}
		);
	}

	signUp() {
		this.http.post({
			"email": this.user.email,
			"password": this.user.password
		}).subscribe(
			(response) => { 
				//alert(response.content); 
				this.app.log("biennnnn");
				this.app.goto("hub");
			},
			(error) => {
				alert(error.error.text);	
			}
		);
	}

	toggleDisplay() {
		this.isLoggingIn = !this.isLoggingIn;
	}

}
