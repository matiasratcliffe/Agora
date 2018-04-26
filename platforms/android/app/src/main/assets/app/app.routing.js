"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var start_component_1 = require("./pages/start/start.component");
var login_component_1 = require("./pages/login/login.component");
var hub_component_1 = require("./pages/hub/hub.component");
exports.routes = [
    { path: "", component: start_component_1.StartComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "hub", component: hub_component_1.HubComponent }
];
exports.navigatableComponents = [
    start_component_1.StartComponent,
    login_component_1.LoginComponent,
    hub_component_1.HubComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCxpRUFBK0Q7QUFDL0QsMkRBQXlEO0FBRTVDLFFBQUEsTUFBTSxHQUFHO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUN2QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSw0QkFBWSxFQUFFO0NBQ3hDLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ3BDLGdDQUFjO0lBQ2QsZ0NBQWM7SUFDZCw0QkFBWTtDQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFydENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh1YkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2h1Yi9odWIuY29tcG9uZW50XCI7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBTdGFydENvbXBvbmVudCB9LFxuXHR7IHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuXHR7IHBhdGg6IFwiaHViXCIsIGNvbXBvbmVudDogSHViQ29tcG9uZW50IH1cbl07XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXG5cdFN0YXJ0Q29tcG9uZW50LFxuXHRMb2dpbkNvbXBvbmVudCxcblx0SHViQ29tcG9uZW50XG5dO1xuIl19