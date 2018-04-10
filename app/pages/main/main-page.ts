import {EventData, Observable} from "data/observable";
import {Page} from "ui/page";

class StartPageController extends Observable {

  public pageLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = this;
    console.log("Page Loaded!");
  }

}

var spc = new StartPageController();
export var pageLoaded = args => spc.pageLoaded(args);
