import {EventData, Observable} from "data/observable";

class StartPageController extends Observable {

  public pageLoaded(args: EventData) {
    //var page = <Page>args.object;
    //page.bindingContext = this;
  }

}

var spc = new StartPageController();
export var pageLoaded = args => spc.pageLoaded(args);
