"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var StartPageController = /** @class */ (function (_super) {
    __extends(StartPageController, _super);
    function StartPageController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartPageController.prototype.pageLoaded = function (args) {
        //var page = <Page>args.object;
        //page.bindingContext = this;
    };
    return StartPageController;
}(observable_1.Observable));
var spc = new StartPageController();
exports.pageLoaded = function (args) { return spc.pageLoaded(args); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXNEO0FBRXREO0lBQWtDLHVDQUFVO0lBQTVDOztJQU9BLENBQUM7SUFMUSx3Q0FBVSxHQUFqQixVQUFrQixJQUFlO1FBQy9CLCtCQUErQjtRQUMvQiw2QkFBNkI7SUFDL0IsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQVBELENBQWtDLHVCQUFVLEdBTzNDO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQ3pCLFFBQUEsVUFBVSxHQUFHLFVBQUEsSUFBSSxJQUFJLE9BQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnREYXRhLCBPYnNlcnZhYmxlfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmNsYXNzIFN0YXJ0UGFnZUNvbnRyb2xsZXIgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICBwdWJsaWMgcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvL3ZhciBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgLy9wYWdlLmJpbmRpbmdDb250ZXh0ID0gdGhpcztcbiAgfVxuXG59XG5cbnZhciBzcGMgPSBuZXcgU3RhcnRQYWdlQ29udHJvbGxlcigpO1xuZXhwb3J0IHZhciBwYWdlTG9hZGVkID0gYXJncyA9PiBzcGMucGFnZUxvYWRlZChhcmdzKTtcbiJdfQ==