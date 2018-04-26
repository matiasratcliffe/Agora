import { Component, OnInit} from "@angular/core";
import { BaseService } from "../../services/base.service";
import { Page } from "tns-core-modules/ui/page";

@Component({
	selector: "app-start",
	templateUrl: "pages/start/start.component.html",
	styleUrls: ["pages/start/start.component.css"],
	providers: [BaseService]
})
export class StartComponent implements OnInit {

	constructor(private appService: BaseService, private page: Page) { }

	ngOnInit() {
		this.page.actionBarHidden = true;
		this.appService.goto("login");
	}
}
