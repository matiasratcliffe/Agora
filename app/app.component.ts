import { Component, OnInit } from "@angular/core";
import { BaseService } from "~/services/base.service";
import { Page } from "tns-core-modules/ui/page";

@Component({
	selector: "ns-app",
	providers: [BaseService]
})
export class AppComponent implements OnInit {

	constructor(private app: BaseService, private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
		this.app.goto("login");
	}
}
