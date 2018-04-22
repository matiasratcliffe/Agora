"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_service_1 = require("../../services/base.service");
var page_1 = require("tns-core-modules/ui/page");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, page) {
        this.appService = appService;
        this.page = page;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            templateUrl: "pages/login/login.component.html",
            styleUrls: ["pages/login/login.component.css"],
            providers: [base_service_1.BaseService]
        }),
        __metadata("design:paramtypes", [base_service_1.BaseService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDREQUEwRDtBQUMxRCxpREFBZ0Q7QUFRaEQ7SUFFRSx3QkFBb0IsVUFBdUIsRUFBVSxJQUFVO1FBQTNDLGVBQVUsR0FBVixVQUFVLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVsRSxpQ0FBUSxHQUFSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFOUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUN2QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDekIsQ0FBQzt5Q0FHZ0MsMEJBQVcsRUFBZ0IsV0FBSTtPQUZwRCxjQUFjLENBTzFCO0lBQUQscUJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtbG9naW5cIixcblx0XHR0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuXHRcdHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcblx0XHRwcm92aWRlcnM6IFtCYXNlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSBhcHBTZXJ2aWNlOiBCYXNlU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuXHRcdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxufVxuIl19