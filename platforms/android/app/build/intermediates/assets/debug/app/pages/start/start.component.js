"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_service_1 = require("../../services/base.service");
var page_1 = require("tns-core-modules/ui/page");
var StartComponent = /** @class */ (function () {
    function StartComponent(appService, page) {
        this.appService = appService;
        this.page = page;
    }
    StartComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.appService.goto("login");
    };
    StartComponent = __decorate([
        core_1.Component({
            selector: "app-start",
            templateUrl: "pages/start/start.component.html",
            styleUrls: ["pages/start/start.component.css"],
            providers: [base_service_1.BaseService]
        }),
        __metadata("design:paramtypes", [base_service_1.BaseService, page_1.Page])
    ], StartComponent);
    return StartComponent;
}());
exports.StartComponent = StartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDREQUEwRDtBQUMxRCxpREFBZ0Q7QUFRaEQ7SUFFRSx3QkFBb0IsVUFBdUIsRUFBVSxJQUFVO1FBQTNDLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVsRSxpQ0FBUSxHQUFSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFQUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUN2QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDekIsQ0FBQzt5Q0FHZ0MsMEJBQVcsRUFBZ0IsV0FBSTtPQUZwRCxjQUFjLENBUTFCO0lBQUQscUJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtc3RhcnRcIixcblx0XHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9zdGFydC9zdGFydC5jb21wb25lbnQuaHRtbFwiLFxuXHRcdHN0eWxlVXJsczogW1wicGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzc1wiXSxcblx0XHRwcm92aWRlcnM6IFtCYXNlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU3RhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSBhcHBTZXJ2aWNlOiBCYXNlU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuXHRcdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdFx0XHR0aGlzLmFwcFNlcnZpY2UuZ290byhcImxvZ2luXCIpO1xuICAgIH1cbn1cbiJdfQ==