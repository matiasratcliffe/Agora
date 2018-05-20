import { Component, OnInit, AfterViewInit } from "@angular/core";

import { BaseService } from "~/services/base.service";

@Component({
	selector: "ns-app",
	templateUrl: "app.component.html",
	providers: [BaseService]
})
export class AppComponent {

	constructor(private app: BaseService) { }

}
